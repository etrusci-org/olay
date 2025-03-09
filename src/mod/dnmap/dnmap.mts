import { Olay } from '../../lib/olay.mjs'


export class Olay_Dnmap extends Olay
{
    conf: Olay_Dnmap_Conf = {
        type: 'map',
        updaterate: 300,
    }

    ui: Olay_Dnmap_UI = {
        mod: document.querySelector('.mod') as HTMLElement,
        img: document.querySelector('.mod img') as HTMLImageElement,
    }

    valid_image_types: string[] = ['map', 'satellite']
    img_url: string = 'https://www.timeanddate.com/scripts/sunmap.php?iso={iso}&earth={earth}'
    min_updaterate: number = 180


    constructor()
    {
        super()

        for (let [k, v] of this.urlparams.entries()) {
            v = v.trim()

            switch (k) {
                case 'type':
                    this.conf.type = (this.valid_image_types.includes(v)) ? v : this.conf.type
                    break

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
        const img_url = this.img_url
            .replace('{iso}', new Date().toISOString())
            .replace('{earth}', (this.conf.type == 'satellite') ? '1' : '0')

        this.ui.img.setAttribute('src', img_url)

        if (!init_continous) {
            return
        }

        setInterval(() => this.update_ui(), this.conf.updaterate * 1_000)
    }
}
