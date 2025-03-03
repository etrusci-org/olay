import { Olay } from '../../lib/olay.mjs'
import { ElColorfader } from '../../lib/elcolorfader.mjs'


export class Olay_Colorfader extends Olay
{
    conf: Olay_Colorfader_Conf = {
        duration: 3,
        func: 'ease-in-out',
    }

    ui: Olay_Colorfader_UI = {
        mod: document.querySelector('.mod') as HTMLElement
    }


    constructor()
    {
        super()

        for (let [k, v] of this.urlparams.entries()) {
            v = v.trim()

            switch (k) {
                case 'duration':
                    this.conf.duration = Math.max(0, Number(v || this.conf.duration))
                    break

                case 'func':
                    this.conf.func = v || this.conf.func
                    break

                    default:
                    console.warn(`skipping unknown parameter "${k}" with value "${v}"`)
            }
        }

        this.ui.mod.dataset['dur'] = String(this.conf.duration)
        this.ui.mod.dataset['func'] = this.conf.func
        this.ui.mod.dataset['target'] = 'background'

        new ElColorfader('.mod').start()
    }
}
