import { Olay } from '../../lib/olay.mjs'
import { ElFloaterLoader } from '../../lib/elfloater.mjs'




export class Olay_Floater extends Olay
{
    conf: Olay_Floater_Conf = {
        text: 'hello<br>cruel<br>world',
        posx: -1,
        posy: -1,
        velx: 1.0,
        vely: 1.0,
        flipx: false,
        flipy: false,
        changecolor: false,
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

                case 'posx':
                    this.conf.posx = Math.max(-1, Number(v || this.conf.posx))
                    break

                case 'posy':
                    this.conf.posy = Math.max(-1, Number(v || this.conf.posy))
                    break

                case 'velx':
                    this.conf.velx = Math.max(0, Number(v || this.conf.velx))
                    break

                case 'vely':
                    this.conf.vely = Math.max(0, Number(v || this.conf.vely))
                    break

                case 'flipx':
                    this.conf.flipx = (v === 'true') ? true : false
                    break

                case 'flipy':
                    this.conf.flipy = (v === 'true') ? true : false
                    break

                case 'changecolor':
                    this.conf.changecolor = (v === 'true') ? true : false
                    break

                default:
                    console.warn(`skipping unknown parameter "${k}" with value "${v}"`)
            }
        }

        if (!(this.ui.floater instanceof HTMLDivElement)) {
            return
        }

        this.ui.floater.innerHTML = this.conf.text

        if (this.conf.posx >= 0) {
            this.ui.floater.dataset['posX'] = String(this.conf.posx)
        }

        if (this.conf.posy >= 0) {
            this.ui.floater.dataset['posY'] = String(this.conf.posy)
        }

        this.ui.floater.dataset['velX'] = String(this.conf.velx)
        this.ui.floater.dataset['velY'] = String(this.conf.vely)
        this.ui.floater.dataset['flipX'] = String(this.conf.flipx)
        this.ui.floater.dataset['flipY'] = String(this.conf.flipy)
        this.ui.floater.dataset['randomColor'] = String(this.conf.changecolor)

        new ElFloaterLoader('.floater', '.mod')
    }
}
