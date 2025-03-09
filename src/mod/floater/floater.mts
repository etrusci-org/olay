import { Olay } from '../../lib/olay.mjs'
import { ElFloaterLoader } from '../../lib/elfloater.mjs'




export class Olay_Floater extends Olay
{
    conf: Olay_Floater_Conf = {
        text: 'hello<br>cruel<br>world',
        pos_x: -1,
        pos_y: -1,
        vel_x: 1.0,
        vel_y: 1.0,
        flip_x: false,
        flip_y: false,
        colorchange: false,
    }

    ui: Olay_Floater_UI = {
        mod: document.querySelector('.mod') as HTMLDivElement,
        floater: document.querySelector('.mod .floater') as HTMLDivElement,
    }


    constructor()
    {
        super()

        for (let [k, v] of this.urlparams.entries()) {
            v = v.trim()

            switch (k) {
                case 'text':
                    this.conf.text = v || this.conf.text
                    break

                case 'pos_x':
                    this.conf.pos_x = Math.max(-1, Number(v || this.conf.pos_x))
                    break

                case 'pos_y':
                    this.conf.pos_y = Math.max(-1, Number(v || this.conf.pos_y))
                    break

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

        // const floater = this.ui.mod.querySelector('.floater')

        if (!(this.ui.floater instanceof HTMLDivElement)) {
            return
        }

        this.ui.floater.innerHTML = this.conf.text

        if (this.conf.pos_x >= 0) {
            this.ui.floater.dataset['posX'] = String(this.conf.pos_x)
        }

        if (this.conf.pos_y >= 0) {
            this.ui.floater.dataset['posY'] = String(this.conf.pos_y)
        }

        this.ui.floater.dataset['velX'] = String(this.conf.vel_x)
        this.ui.floater.dataset['velY'] = String(this.conf.vel_y)
        this.ui.floater.dataset['flipX'] = String(this.conf.flip_x)
        this.ui.floater.dataset['flipY'] = String(this.conf.flip_y)
        this.ui.floater.dataset['randomColor'] = String(this.conf.colorchange)

        new ElFloaterLoader('.floater', '.mod')
    }
}
