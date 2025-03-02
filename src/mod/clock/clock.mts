import { Olay } from '../../lib/olay.mjs'
import { humantime } from '../../lib/humantime.mjs'
import { beatsnow } from '../../lib/beatsnow.mjs'


export class Olay_Clock extends Olay
{
    conf: Olay_Clock_Conf = {
        type: 'human',
        format: '{year}-{month}-{day} {hour}:{minute}:{second}',
        updaterate: 0.5,
        precision: 0,
    }

    ui: Olay_Clock_UI = {
        mod: document.querySelector('.mod') as HTMLElement
    }

    valid_clock_types: string[] = ['human', 'beats', 'unix', 'unixms']


    constructor()
    {
        super()

        for (let [k, v] of this.urlparams.entries()) {
            v = v.trim()

            switch (k) {
                case 'type':
                    this.conf.type = (this.valid_clock_types.includes(v)) ? v : this.conf.type
                    break

                case 'format':
                    this.conf.format = v || this.conf.format
                    break

                case 'updaterate':
                    this.conf.updaterate = Math.max(0, Number(v) || this.conf.updaterate)
                    break

                case 'precision':
                    this.conf.precision = Math.max(0, Number(v) || this.conf.precision)
                    break

                default:
                    console.warn(`skipping unknown parameter "${k}" with value "${v}"`)
            }
        }

        this.update_ui(true)
    }


    update_ui(init_continous: boolean = false): void
    {
        switch (this.conf.type) {
            case 'human':
                this.ui.mod.innerHTML = humantime(this.conf.format)
                break

            case 'beats':
                if (this.conf.format.includes('{beats}')) {
                    this.ui.mod.innerHTML = this.conf.format.replace('{beats}', beatsnow(this.conf.precision))
                }
                else {
                    this.ui.mod.innerHTML = beatsnow(this.conf.precision)
                }
                break

            case 'unix':
                this.ui.mod.innerHTML = String((Date.now() / 1000).toFixed(this.conf.precision))
                break

            case 'unixms':
                this.ui.mod.innerHTML = String(Date.now())
                break

            default:
                console.error(`invalid clock type: ${this.urlparams.get('type')}`)
                break
        }

        if (!init_continous) {
            return
        }

        setInterval(() => this.update_ui(), this.conf.updaterate * 1_000)
    }
}
