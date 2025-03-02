// want:
                                                                        // countup Number to Number
// countup Time to Time
// countup from Number for Duration
                                                                        // countdown Number to Number
// countdown Time to Time
// countdown from Number for Duration

import { Olay } from '../../lib/olay.mjs'


export class Olay_Countdu extends Olay
{
    conf: Olay_Countdu_Conf = {
        type: 'number',
        number_start: 0,
        number_end: 5,
        countingspeed: 1,
    }

    ui: Olay_Countdu_UI = {
        mod: document.querySelector('.mod') as HTMLElement
    }

    valid_countdu_types: string[] = ['number', 'time']
    number_current: number = 0
    iid: number = 0


    constructor()
    {
        super()

        for (let [k, v] of this.urlparams.entries()) {
            v = v.trim()

            switch (k) {
                case 'type':
                    this.conf.type = (this.valid_countdu_types.includes(v)) ? v : this.conf.type
                    break

                case 'number_start':
                    this.conf.number_start = Number(v) || this.conf.number_start
                    break

                case 'number_end':
                    this.conf.number_end = Number(v) || this.conf.number_end
                    break

                case 'countingspeed':
                    this.conf.countingspeed = Math.max(0, Number(v) || this.conf.countingspeed)
                    break

                default:
                    console.warn(`skipping unknown parameter "${k}" with value "${v}"`)
            }
        }

        this.number_current = this.conf.number_start

        this.update_ui(true)
    }


    update_ui(init_continous: boolean = false): void
    {
        switch (this.conf.type) {
            case 'number':
                console.log('number', this.number_current)

                this.ui.mod.innerHTML = String(this.number_current)

                if (this.number_current == this.conf.number_end) {
                    clearInterval(this.iid)
                    return
                }

                this.number_current += (this.conf.number_start < this.conf.number_end) ? 1 : -1
                break

            default:
                console.error(`invalid clock type: ${this.urlparams.get('type')}`)
                break
        }

        if (!init_continous) {
            return
        }

        this.iid = setInterval(() => this.update_ui(), this.conf.countingspeed * 1_000)
    }
}
