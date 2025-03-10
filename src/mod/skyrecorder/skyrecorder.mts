import { Olay } from '../../lib/olay.mjs'


export class Olay_Skyrecorder extends Olay
{
    conf: Olay_Skyrecorder_Conf = {
        updaterate: 900,
    }

    ui: Olay_Skyrecorder_UI = {
        mod: document.querySelector('.mod') as HTMLDivElement,
        img: document.querySelector('.mod img') as HTMLImageElement,
    }

    min_updaterate: number = 600
    img_url: string = 'https://sky.etrusci.org/recent.jpg'


    constructor()
    {
        super()

        for (let [k, v] of this.urlparams.entries()) {
            v = v.trim()

            switch (k) {
                case 'updaterate':
                    this.conf.updaterate = Math.max(this.min_updaterate, Number(v || this.conf.updaterate))
                    break

                default:
                    console.warn(`skipping unknown parameter "${k}" with value "${v}"`)
            }
        }

        this.update_ui(true)
    }


    update_ui(init_continous: boolean = false): void
    {
        this.ui.img.setAttribute('src', `${this.img_url}?t=${Date.now()}`)

        if (!init_continous) {
            return
        }

        setInterval(() => this.update_ui(), this.conf.updaterate * 1_000)
    }
}
