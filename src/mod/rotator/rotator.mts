import { Olay } from '../../lib/olay.mjs'


export class Olay_Rotator extends Olay
{
    conf: {
        updaterate: number
        items: string
    } = {
        updaterate: 3,
        items: 'foo|bar|moo|cow',
    }

    ui: {
        mod: HTMLElement
    } = {
        mod: document.querySelector('#mod') as HTMLElement
    }

    queue: string[] = []


    constructor()
    {
        super()

        for (const [k, v] of this.urlparams.entries()) {

            switch (k) {
                case 'updaterate':
                    this.conf.updaterate = Math.max(0, Number(v)) || this.conf.updaterate
                    break

                case 'items':
                    this.conf.items = String(v) || this.conf.items
                    break

                default:
                    console.warn(`skipping unknown parameter "${k}" with value "${v}"`)
            }
        }

        this.update_ui(true)
    }


    update_ui(init_continous: boolean = false): void
    {
        if (this.queue.length == 0) {
            for (let v of this.conf.items.split('|')) {
                v = v.trim()
                if (!v) continue
                this.queue.push(v)
            }
        }

        let item: string = this.queue.splice(0, 1)[0] || ''

        this.ui.mod.innerHTML = item

        if (!init_continous) {
            return
        }

        setInterval(() => this.update_ui(), this.conf.updaterate * 1000)
    }

}
