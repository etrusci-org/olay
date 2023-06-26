import { conf } from './clock.conf.js'




export class Mod
{
    outputElement: HTMLDivElement
    updateInterval = conf.updateInterval
    clockType = conf.clockType
    formatTemplate = conf.formatTemplate


    constructor(outputElement: HTMLDivElement)
    {
        this.outputElement = outputElement

        this.update()

        setInterval(() => {
            this.update()
        }, this.updateInterval)
    }


    update(): void
    {
        if (!this.outputElement) {
            return
        }

        this.outputElement.innerHTML = this.getOutput()
    }


    getOutput(): string
    {
        const dt = new Date()

        let out = ''

        if (this.clockType == 'human') {
            out = this.formatTemplate
            out = out.replace('{year}', String(dt.getFullYear()).padStart(2, '0'))
            out = out.replace('{month}', String(dt.getMonth() + 1).padStart(2, '0'))
            out = out.replace('{day}', String(dt.getDate()).padStart(2, '0'))
            out = out.replace('{hour}', String(dt.getHours()).padStart(2, '0'))
            out = out.replace('{minute}', String(dt.getMinutes()).padStart(2, '0'))
            out = out.replace('{second}', String(dt.getSeconds()).padStart(2, '0'))
            out = out.replace('{millisecond}', String(dt.getMilliseconds()).padEnd(3, '0'))
            out = out.replace('{timezoneOffset}', `UTC${String(dt.getTimezoneOffset() / 60)}`)
        }

        if (this.clockType == 'robot') {
            out = String(Math.floor(dt.getTime() / 1000))
        }

        return out
    }
}
