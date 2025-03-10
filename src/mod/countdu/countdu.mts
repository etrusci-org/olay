// if ResistFingerprinting is turned on in the webbrowser, type=time will not yield correct results.

import { Olay } from '../../lib/olay.mjs'
import { mstodur } from '../../lib/mstodur.mjs'


export class Olay_Countdu extends Olay
{
    conf: Olay_Countdu_Conf = {
        type: 'number',
        startnumber: 0,
        endnumber: 5,
        endtime: '',
        countingspeed: 1,
        endmessage: ''
    }

    ui: Olay_Countdu_UI = {
        mod: document.querySelector('.mod') as HTMLDivElement
    }

    default_number_endmessage: string = 'end number reached: {endnumber}'
    default_time_endmessage: string = 'end time reached: {endtime}'

    valid_countdu_types: string[] = ['number', 'time']
    number: number
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
                        this.conf.endmessage = this.default_number_endmessage
                    }

                    if (this.conf.type == 'time') {
                        this.conf.endmessage = this.default_time_endmessage
                    }
                    break

                case 'startnumber':
                    this.conf.startnumber = Number(v || this.conf.startnumber)
                    break

                case 'endnumber':
                    this.conf.endnumber = Number(v || this.conf.endnumber)
                    break

                case 'endtime':
                    this.conf.endtime = v || this.conf.endtime
                    break

                case 'countingspeed':
                    this.conf.countingspeed = Math.max(0, Number(v || this.conf.countingspeed))
                    break

                case 'endmessage':
                    if (v == 'none') {
                        this.conf.endmessage = ''
                    }
                    else {
                        this.conf.endmessage = v || this.conf.endmessage
                    }
                    break

                default:
                    console.warn(`skipping unknown parameter "${k}" with value "${v}"`)
            }
        }

        this.number = this.conf.startnumber
        this.future = new Date(this.conf.endtime)

        this.update_ui(true)
    }


    update_ui(init_continous: boolean = false): void
    {
        switch (this.conf.type) {
            case 'number':
                this.ui.mod.innerHTML = String(this.number)

                if (this.number == this.conf.endnumber) {
                    this.ui.mod.innerHTML = this.conf.endmessage.replace('{endnumber}', String(this.conf.endnumber))
                    clearInterval(this.iid)
                    return
                }

                this.number += (this.conf.startnumber < this.conf.endnumber) ? 1 : -1
                break

            case 'time':
                if (!this.conf.endtime) {
                    this.ui.mod.innerHTML = 'no end time set'
                    return
                }

                const now = new Date()
                const delta = this.future.getTime() - now.getTime()

                if (delta <= 0) {
                    this.ui.mod.innerHTML = this.conf.endmessage.replace('{endtime}', String(this.conf.endtime))
                    clearInterval(this.iid)
                    return
                }

                this.ui.mod.innerHTML = mstodur(delta)
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
