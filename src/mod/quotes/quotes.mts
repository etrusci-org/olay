import { Olay } from '../../lib/olay.mjs'
import { fetchjson } from '../../lib/fetchjson.mjs'


export class Olay_Quotes extends Olay
{
    conf: Olay_Quotes_Conf = {
        updaterate: 60,
        typingspeed: 0.05,
        format_quote: '"{quote}"',
        format_author: '— {author}',
        endpoint: 'https://pdv.ourspace.ch/api/collections/random_quote/records/1?fields=author,quote',
    }

    ui: Olay_Quotes_UI = {
        mod: document.querySelector('.mod') as HTMLDivElement,
        quote: document.querySelector('.mod .quote') as HTMLDivElement,
        author: document.querySelector('.mod .author') as HTMLDivElement,
    }

    min_updaterate: number = 10


    constructor()
    {
        super()

        for (let [k, v] of this.urlparams.entries()) {
            v = v.trim()

            switch (k) {
                case 'updaterate':
                    this.conf.updaterate = Math.max(this.min_updaterate, Number(v || this.conf.updaterate))
                    break

                case 'typingspeed':
                    this.conf.typingspeed = Math.max(0, Number(v || this.conf.typingspeed))
                    break

                case 'format_quote':
                    this.conf.format_quote = v || this.conf.format_quote
                    break

                case 'format_author':
                    this.conf.format_author = v || this.conf.format_author
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
            console.error(`missing author and/or quote in response data:`, data)
            return
        }

        this.ui.quote.innerHTML = ''
        this.ui.author.innerHTML = ''

        if (this.conf.typingspeed > 0) {
            const queue_quote: string[] = this.conf.format_quote.replace('{quote}', data.quote).split('')
            let iid = setInterval(() => {
                this.ui.quote.innerHTML += queue_quote.shift()
                if (queue_quote.length == 0) {
                    clearInterval(iid)

                    const author_queue: string[] = this.conf.format_author.replace('{author}', data.author).split('')
                    iid = setInterval(() => {
                        this.ui.author.innerHTML += author_queue.shift()
                        if (author_queue.length == 0) {
                            clearInterval(iid)
                            setTimeout(() => this.update_ui(), this.conf.updaterate * 1_000)
                        }
                    }, this.conf.typingspeed * 1_000)
                }
            }, this.conf.typingspeed * 1_000)
        }
        else {
            this.ui.quote.innerHTML = this.conf.format_quote.replace('{quote}', data.quote)
            this.ui.author.innerHTML = this.conf.format_author.replace('{author}', data.author)
            setTimeout(() => this.update_ui(), this.conf.updaterate * 1_000)
        }
    }
}
