import { Olay } from '../../lib/olay.mjs'
import { fetchjson } from '../../lib/fetchjson.mjs'


export class Olay_Quotes extends Olay
{
    conf: {
        updaterate: number
        format: string
        endpoint: string
    } = {
        updaterate: 60,
        format: '"{quote}" – {author}',
        endpoint: 'https://pdv.ourspace.ch/api/collections/random_quote/records/1?fields=author,quote',
    }

    ui: {
        mod: HTMLElement
    } = {
        mod: document.querySelector('#mod') as HTMLElement
    }

    min_updaterate: number = 10


    constructor()
    {
        super()

        for (const [k, v] of this.urlparams.entries()) {

            switch (k) {
                case 'updaterate':
                    this.conf.updaterate = Math.max(this.min_updaterate, Number(v)) || this.conf.updaterate
                    break

                case 'format':
                    this.conf.format = String(v) || this.conf.format
                    break

                case 'endpoint':
                    this.conf.endpoint = String(v) || this.conf.endpoint
                    break

                default:
                    console.warn(`skipping unknown parameter "${k}" with value "${v}"`)
            }
        }

        this.update_ui(true)
    }


    async update_ui(init_continous: boolean = false): Promise<void>
    {
        const data: {author: string, quote: string} = await fetchjson(this.conf.endpoint)

        if (!data.author || !data.quote) {
            return
        }

        let output: string = this.conf.format
        output = output.replace('{author}', data.author)
        output = output.replace('{quote}', data.quote)

        this.ui.mod.innerHTML = output

        if (!init_continous) {
            return
        }

        setInterval(async () => await this.update_ui(), this.conf.updaterate * 1000)
    }
}
