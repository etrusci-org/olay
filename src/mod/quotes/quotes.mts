import { Olay } from '../../lib/olay.mjs'
import { fetchjson } from '../../lib/fetchjson.mjs'


export class Olay_Quotes extends Olay
{
    conf: Olay_Quotes_Conf = {
        updaterate: 60,
        typingspeed: 0.05,
        disabletyping: false,
        format: '"{quote}" — {author}',
        endpoint: 'https://pdv.ourspace.ch/api/collections/random_quote/records/1?fields=author,quote',
    }

    ui: Olay_Quotes_UI = {
        mod: document.querySelector('.mod') as HTMLElement
    }

    min_updaterate: number = 10


    constructor()
    {
        super()

        for (let [k, v] of this.urlparams.entries()) {
            v = v.trim()

            switch (k) {
                case 'updaterate':
                    this.conf.updaterate = Math.max(this.min_updaterate, Number(v) || this.conf.updaterate)
                    break

                case 'typingspeed':
                    this.conf.typingspeed = Math.max(0, Number(v) || this.conf.typingspeed)
                    break

                case 'disabletyping':
                    this.conf.disabletyping = (v === 'true') ? true : false
                    break

                case 'format':
                    this.conf.format = v || this.conf.format
                    break

                case 'endpoint':
                    this.conf.endpoint = v || this.conf.endpoint
                    break

                default:
                    console.warn(`skipping unknown parameter "${k}" with value "${v}"`)
            }
        }

        this.update_ui()
    }


    async update_ui(): Promise<void>
    {
        const data: {author: string, quote: string} = await fetchjson(this.conf.endpoint)

        if (!data.author || !data.quote) {
            console.error(`missing author and/or quote in response data.`)
            return
        }

        let output: string = this.conf.format
        output = output.replace('{author}', data.author)
        output = output.replace('{quote}', data.quote)

        this.ui.mod.innerHTML = ''

        const queue = output.split('')

        if (!this.conf.disabletyping) {
            const typer_interval = setInterval(() => {
                this.ui.mod.innerHTML += queue.shift()

                if (queue.length == 0) {
                    clearInterval(typer_interval)
                    setTimeout(() => this.update_ui(), this.conf.updaterate * 1_000)
                }
            }, this.conf.typingspeed * 1_000)
        }
        else {
            this.ui.mod.innerHTML = output
            setTimeout(() => this.update_ui(), this.conf.updaterate * 1_000)
        }
    }
}
