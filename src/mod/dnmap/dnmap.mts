import { Olay } from '../../lib/olay.mjs'


export class Olay_Dnmap extends Olay
{
    conf: Olay_Dnmap_Conf = {
        type: 'map',
        updaterate: 300,
    }

    ui: Olay_Dnmap_UI = {
        mod: document.querySelector('.mod') as HTMLDivElement,
        map: document.querySelector('.mod .map') as HTMLImageElement,
    }

    min_updaterate: number = 180
    valid_map_types: string[] = ['map', 'satellite']
    map_url: string = 'https://www.timeanddate.com/scripts/sunmap.php?iso={iso}&earth={earth}'


    constructor()
    {
        super()

        for (let [k, v] of this.urlparams.entries()) {
            v = v.trim()

            switch (k) {
                case 'type':
                    this.conf.type = (this.valid_map_types.includes(v)) ? v : this.conf.type
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
        this.ui.map.setAttribute('src', this.map_url
            .replace('{iso}', new Date().toISOString())
            .replace('{earth}', (this.conf.type == 'satellite') ? '1' : '0')
        )

        if (!init_continous) {
            return
        }

        setInterval(() => this.update_ui(), this.conf.updaterate * 1_000)
    }
}
