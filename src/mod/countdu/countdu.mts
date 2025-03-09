// if ResistFingerprinting is turned on in the webbrowser, type=time will not yield correct results.

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
        end_message: ''
    }

    ui: Olay_Countdu_UI = {
        mod: document.querySelector('.mod') as HTMLElement
    }

    default_number_end_message: string = 'end number reached: {end_number}'
    default_time_end_message: string = 'end time reached: {end_time}'

    valid_countdu_types: string[] = ['number', 'time']
    number_current: number
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

                    if (this.conf.type == 'number') {
                        this.conf.end_message = this.default_number_end_message
                    }

                    if (this.conf.type == 'time') {
                        this.conf.end_message = this.default_time_end_message
                    }
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

                case 'end_message':
                    if (v == 'none') {
                        this.conf.end_message = ''
                    }
                    else {
                        this.conf.end_message = v || this.conf.end_message
                    }
                    break

                default:
                    console.warn(`skipping unknown parameter "${k}" with value "${v}"`)
            }
        }

        this.number_current = this.conf.number_start
        this.future = new Date(this.conf.time_end)

        this.update_ui(true)
    }


    update_ui(init_continous: boolean = false): void
    {
        switch (this.conf.type) {
            case 'number':
                this.ui.mod.innerHTML = String(this.number_current)

                if (this.number_current == this.conf.number_end) {
                    this.ui.mod.innerHTML = this.conf.end_message.replace('{end_number}', String(this.conf.number_end))
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
                    this.ui.mod.innerHTML = this.conf.end_message.replace('{end_time}', String(this.conf.time_end))
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
