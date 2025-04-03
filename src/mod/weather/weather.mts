import { Olay } from '../../lib/olay.mjs'
import { fetchx } from '../../lib/fetchx.mjs'
import { clampnumber } from '../../lib/clampnumber.mjs'
import { winddirtotext } from '../../lib/winddirtotext.mjs'
import { humantime } from '../../lib/humantime.mjs'


export class Olay_Weather extends Olay
{
    conf: Olay_Weather_Conf = {
        latitude: 45.976424,
        longitude: 7.658605,
        temperatureunit: 'celsius',
        windspeedunit: 'kmh',
        precipitationunit: 'mm',
    }

    ui: Olay_Weather_UI = {
        mod: document.querySelector('.mod') as HTMLDivElement,
        description: document.querySelector('.mod .description') as HTMLDivElement,
        temperature: document.querySelector('.mod .temperature') as HTMLDivElement,
        temperaturereal: document.querySelector('.mod .temperature .real') as HTMLSpanElement,
        temperaturefeel: document.querySelector('.mod .temperature .feel') as HTMLSpanElement,
        wind: document.querySelector('.mod .wind') as HTMLDivElement,
        windspeed: document.querySelector('.mod .wind .speed') as HTMLSpanElement,
        windgusts: document.querySelector('.mod .wind .gusts') as HTMLSpanElement,
        winddirectiontext: document.querySelector('.mod .wind .directiontext') as HTMLSpanElement,
        winddirectiondegrees: document.querySelector('.mod .wind .directiondegrees') as HTMLSpanElement,
        cloudcover: document.querySelector('.mod .cloudcover') as HTMLDivElement,
        humidity: document.querySelector('.mod .humidity') as HTMLDivElement,
        precipitation: document.querySelector('.mod .precipitation') as HTMLDivElement,
        elevation: document.querySelector('.mod .elevation') as HTMLDivElement,
        updatedon: document.querySelector('.mod .updatedon') as HTMLDivElement,
        findcoords: document.querySelector('.findcoords') as HTMLDivElement,
        findcoordsinput: document.querySelector('.findcoords input') as HTMLInputElement,
        findcoordsresult: document.querySelector('.findcoords .result') as HTMLTableSectionElement,
    }

    endpoint_weather: string = 'https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&current=precipitation,temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m,wind_gusts_10m,wind_direction_10m,cloud_cover&timezone=auto&forecast_days=1&timeformat=unixtime&temperature_unit={temperatureunit}&wind_speed_unit={windspeedunit}&precipitation_unit={precipitationunit}'
    endpoint_coords: string = 'https://geocoding-api.open-meteo.com/v1/search?name={query}&count=10&language=en&format=json'
    valid_temperature_units: string[] = ['celsius', 'fahrenheit']
    valid_windspeed_units: string[] = ['kmh', 'ms', 'mph', 'kn']
    valid_precipitation_units: string[] = ['mm', 'inch']
    weather_descriptions: {[key: number]: string} = {
        0: 'clear sky',
        1: 'mainly clear',
        2: 'partly cloudy',
        3: 'overcast',
        45: 'fog',
        48: 'depositing rime fog',
        51: 'light drizzle',
        53: 'moderate drizzle',
        55: 'dense drizzle',
        56: 'light freezing drizzle',
        57: 'dense freezing drizzle',
        61: 'slight rain',
        63: 'moderate rain',
        65: 'heavy rain',
        66: 'light freezing rain',
        67: 'heavy freezing rain',
        71: 'light snow fall',
        73: 'moderate snow fall',
        75: 'heavy snow fall',
        77: 'snow grains',
        80: 'slight rain showers',
        81: 'moderate rain showers',
        82: 'violent rain showers',
        85: 'light snow showers',
        86: 'heavy snow showers',
        95: 'thunderstorm',
        96: 'thunderstorm with slight hail',
        99: 'thunderstorm with heavy hail',
    }


    constructor()
    {
        super()

        if (this.urlparams.has('findcoords')) {
            this.ui.mod.remove()

            const css = document.createElement('link')
            css.setAttribute('rel', 'stylesheet')
            css.setAttribute('href', `./findcoords.css?b=${Date.now()}`)
            document.head.append(css)

            this.ui.findcoordsinput.addEventListener('keyup', async () => await this.querycoords())

            return
        }

        this.ui.findcoords.remove()

        for (let [k, v] of this.urlparams.entries()) {
            v = v.trim()

            switch (k) {
                case 'latitude':
                    this.conf.latitude = clampnumber(Number(v || this.conf.latitude), -90, 90)
                    break

                case 'longitude':
                    this.conf.longitude = clampnumber(Number(v || this.conf.longitude), -180, 180)
                    break

                case 'temperatureunit':
                    this.conf.temperatureunit = (this.valid_temperature_units.includes(v)) ? v : this.conf.temperatureunit
                    break

                case 'windspeedunit':
                    this.conf.windspeedunit = (this.valid_windspeed_units.includes(v)) ? v : this.conf.windspeedunit
                    break

                case 'precipitationunit':
                    this.conf.precipitationunit = (this.valid_precipitation_units.includes(v)) ? v : this.conf.precipitationunit
                    break

                default:
                    console.warn(`skipping unknown parameter "${k}" with value "${v}"`)
            }
        }

        this.endpoint_weather = this.endpoint_weather.replace('{latitude}', String(this.conf.latitude))
        this.endpoint_weather = this.endpoint_weather.replace('{longitude}', String(this.conf.longitude))
        this.endpoint_weather = this.endpoint_weather.replace('{temperatureunit}', this.conf.temperatureunit)
        this.endpoint_weather = this.endpoint_weather.replace('{windspeedunit}', this.conf.windspeedunit)
        this.endpoint_weather = this.endpoint_weather.replace('{precipitationunit}', this.conf.precipitationunit)

        this.update_ui(true)
    }


    async update_ui(init_continous: boolean = false): Promise<void>
    {
        const data: {
            error?: boolean
            elevation: number
            generationtime_ms: number
            latitude: number
            longitude: number
            timezone_abbreviation: string
            timezone: string
            utc_offset_seconds: number
            current_units: {
                apparent_temperature: string
                interval: string
                is_day: string
                precipitation: string
                relative_humidity_2m: string
                temperature_2m: string
                time: string
                weather_code: string
                wind_direction_10m: string
                wind_speed_10m: string
                wind_gusts_10m: string
                cloud_cover: string
            }
            current: {
                apparent_temperature: number
                interval: number
                is_day: number
                precipitation: number
                relative_humidity_2m: number
                temperature_2m: number
                time: number
                weather_code: number
                wind_direction_10m: number
                wind_speed_10m: number
                wind_gusts_10m: number
                cloud_cover: number
            }
        } = await fetchx('json', this.endpoint_weather)

        if (!data || data.error) {
            console.warn('error while fetching weather data')
            return
        }

        this.ui.updatedon.innerHTML = `${humantime('{year}-{month}-{day} {hour}:{minute}', data.current.time)}`
        this.ui.description.innerHTML = `${this.weather_descriptions[data.current.weather_code]}`
        this.ui.temperaturereal.innerHTML = `${data.current.temperature_2m}${data.current_units.temperature_2m}`
        this.ui.temperaturefeel.innerHTML = `${data.current.apparent_temperature}`
        this.ui.humidity.innerHTML = `${data.current.relative_humidity_2m}${data.current_units.relative_humidity_2m}`
        this.ui.precipitation.innerHTML = `${data.current.precipitation}${data.current_units.precipitation}`
        this.ui.elevation.innerHTML = `${data.elevation}m`
        this.ui.windspeed.innerHTML = `${data.current.wind_speed_10m}${data.current_units.wind_speed_10m}`
        this.ui.windgusts.innerHTML = `${data.current.wind_gusts_10m}${data.current_units.wind_gusts_10m}`
        this.ui.winddirectiontext.innerHTML = `${winddirtotext(data.current.wind_direction_10m)}`
        this.ui.winddirectiondegrees.innerHTML = `${data.current.wind_direction_10m}°`
        this.ui.cloudcover.innerHTML = `${data.current.cloud_cover}${data.current_units.cloud_cover}`

        if (!init_continous) {
            return
        }

        setInterval(async () => await this.update_ui(), clampnumber(data.current.interval / 3, 60, 900) * 1_000)
    }



    async querycoords(): Promise<void>
    {
        const query = this.ui.findcoordsinput.value.trim()

        if (!query || query.length < 2) {
            this.ui.findcoordsresult.innerHTML = ''
            return
        }

        const data: {
            error?: boolean
            results: {
                name: string
                latitude: number
                longitude: number
                country: string
                country_code: string
                timezone: string
                elevation: number
                population: number
            }[]
        } = await fetchx('json', this.endpoint_coords.replace('{query}', query))

        if (!data || data.error || !data.results) {
            this.ui.findcoordsresult.innerHTML = ''
            console.warn('error while fetching geo data')
            return
        }

        this.ui.findcoordsresult.innerHTML = ''

        for (const v of data.results) {
            const item = document.createElement('tr')
            item.innerHTML = `
                <td><a href="https://www.openstreetmap.org/?mlat=${v.latitude}&mlon=${v.longitude}&zoom=15" target="_blank">${v.name}</a></td>
                <td><input type="text" value="${v.latitude || '?'}" readonly></td>
                <td><input type="text" value="${v.longitude || '?'}" readonly></td>
                <td>${v.country || '?'}</td>
                <td>${v.timezone || '?'}</td>
                <td>${v.elevation || '?'}</td>
                <td>${v.population || '?'}</td>
            `
            this.ui.findcoordsresult.append(item)
        }
    }
}
