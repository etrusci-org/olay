import { Olay } from '../../lib/olay.mjs'
import { ElColorfader } from '../../lib/elcolorfader.mjs'


export class Olay_Colorfader extends Olay
{
    conf: Olay_Colorfader_Conf = {
        duration: 3,
        func: 'ease-in-out',
        r_min: 70,
        r_max: 180,
        g_min: 70,
        g_max: 180,
        b_min: 70,
        b_max: 180,
    }

    ui: Olay_Colorfader_UI = {
        mod: document.querySelector('.mod') as HTMLDivElement
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

                case 'r_min':
                    this.conf.r_min = Math.max(0, Number(v || this.conf.r_min))
                    break

                case 'r_max':
                    this.conf.r_max = Math.max(0, Number(v || this.conf.r_max))
                    break

                case 'g_min':
                    this.conf.g_min = Math.max(0, Number(v || this.conf.g_min))
                    break

                case 'g_max':
                    this.conf.g_max = Math.max(0, Number(v || this.conf.g_max))
                    break

                case 'b_min':
                    this.conf.b_min = Math.max(0, Number(v || this.conf.b_min))
                    break

                case 'b_max':
                    this.conf.b_max = Math.max(0, Number(v || this.conf.b_max))
                    break

                default:
                    console.warn(`skipping unknown parameter "${k}" with value "${v}"`)
            }
        }

        this.ui.mod.dataset['dur'] = String(this.conf.duration)
        this.ui.mod.dataset['func'] = this.conf.func
        this.ui.mod.dataset['rMin'] = String(this.conf.r_min)
        this.ui.mod.dataset['rMax'] = String(this.conf.r_max)
        this.ui.mod.dataset['gMin'] = String(this.conf.g_min)
        this.ui.mod.dataset['gMax'] = String(this.conf.g_max)
        this.ui.mod.dataset['bMin'] = String(this.conf.b_min)
        this.ui.mod.dataset['bMax'] = String(this.conf.b_max)
        this.ui.mod.dataset['target'] = 'background'

        new ElColorfader('.mod').start()
    }
}
