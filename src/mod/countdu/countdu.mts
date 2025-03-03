// want:
                                                                        // countup Number to Number
                                                                        // countup Time to Time
// countup from Number for Duration
                                                                        // countdown Number to Number
// countdown Time to Time
// countdown from Number for Duration

import { Olay } from '../../lib/olay.mjs'
import { sectodur } from '../../lib/sectodur.mjs'


export class Olay_Countdu extends Olay
{
    conf: Olay_Countdu_Conf = {
        type: 'number',
        number_start: 0,
        number_end: 5,
        time_end: '',
        time_format: '{delta}',
        countingspeed: 1,
    }

    ui: Olay_Countdu_UI = {
        mod: document.querySelector('.mod') as HTMLElement
    }

    valid_countdu_types: string[] = ['number', 'time']
    number_current: number
    time_now: Date
    future: Date
    iid!: number


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
                    this.conf.number_start = Number(v || this.conf.number_start)
                    break

                case 'number_end':
                    this.conf.number_end = Number(v || this.conf.number_end)
                    break

                case 'time_end':
                    this.conf.time_end = v || this.conf.time_end
                    break

                case 'countingspeed':
                    this.conf.countingspeed = Math.max(0, Number(v || this.conf.countingspeed))
                    break

                default:
                    console.warn(`skipping unknown parameter "${k}" with value "${v}"`)
            }
        }

        this.number_current = this.conf.number_start
        this.time_now = new Date()
        this.future = new Date(this.conf.time_end)

        this.update_ui(true)
    }


    update_ui(init_continous: boolean = false): void
    {
        switch (this.conf.type) {
            case 'number':
                this.ui.mod.innerHTML = String(this.number_current)

                if (this.number_current == this.conf.number_end) {
                    clearInterval(this.iid)
                    return
                }

                this.number_current += (this.conf.number_start < this.conf.number_end) ? 1 : -1
                break

            case 'time':
                if (!this.conf.time_end) {
                    this.ui.mod.innerHTML = 'no end time set'
                    return
                }

                const now = new Date()
                const delta = this.future.getTime() - now.getTime()

                if (delta <= 0) {
                    clearInterval(this.iid)
                    return
                }

                this.ui.mod.innerHTML = this.conf.time_format.replace('{delta}', sectodur(delta))
                break

            default:
                console.error(`invalid type: ${this.urlparams.get('type')}`)
                break
        }

        if (!init_continous) {
            return
        }

        this.iid = setInterval(() => this.update_ui(), this.conf.countingspeed * 1_000)
    }
}
