import { Olay } from '../../lib/olay.mjs'
import { ElFloaterLoader } from '../../lib/elfloater.mjs'




export class Olay_Floater extends Olay
{
    conf: Olay_Floater_Conf = {
        vel_x: 1.0,
        vel_y: 1.0,
        flip_x: false,
        flip_y: false,
        colorchange: false,
    }

    ui: Olay_Floater_UI = {
        mod: document.querySelector('.mod') as HTMLElement
    }


    constructor()
    {
        super()

        for (let [k, v] of this.urlparams.entries()) {
            v = v.trim()

            switch (k) {
                case 'vel_x':
                    this.conf.vel_x = Math.max(0, Number(v || this.conf.vel_x))
                    break

                case 'vel_y':
                    this.conf.vel_y = Math.max(0, Number(v || this.conf.vel_y))
                    break

                case 'flip_x':
                    this.conf.flip_x = (v === 'true') ? true : false
                    break

                case 'flip_y':
                    this.conf.flip_y = (v === 'true') ? true : false
                    break

                case 'colorchange':
                    this.conf.colorchange = (v === 'true') ? true : false
                    break

                default:
                    console.warn(`skipping unknown parameter "${k}" with value "${v}"`)
            }
        }

        const floater = this.ui.mod.querySelector('.text-floater')

        if (!(floater instanceof HTMLElement)) {
            return
        }

        floater.dataset['velX'] = String(this.conf.vel_x)
        floater.dataset['velY'] = String(this.conf.vel_y)
        floater.dataset['flipX'] = String(this.conf.flip_x)
        floater.dataset['flipY'] = String(this.conf.flip_y)
        floater.dataset['randomColor'] = String(this.conf.colorchange)

        new ElFloaterLoader('.text-floater', '.mod')
    }
}
