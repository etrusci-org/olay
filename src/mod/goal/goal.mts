import { Olay } from '../../lib/olay.mjs'


export class Olay_Goal extends Olay
{
    conf: {
        description: string
        current: number | string
        target: number | string
        unit: string
    } = {
        description: 'Road to something',
        current: 5,
        target: 10,
        unit: 'something',
    }

    ui: {
        mod: HTMLElement
        description: HTMLElement
        current: HTMLElement
        target: HTMLElement
        unit: HTMLElement
    } = {
        mod: document.querySelector('#mod') as HTMLElement,
        description: document.querySelector('.description') as HTMLElement,
        current: document.querySelector('.current') as HTMLElement,
        target: document.querySelector('.target') as HTMLElement,
        unit: document.querySelector('.unit') as HTMLElement,
    }


    constructor()
    {
        super()

        for (const [k, v] of this.urlparams.entries()) {

            switch (k) {
                default:
                    console.warn(`skipping unknown parameter "${k}" with value "${v}"`)
            }
        }

        this.update_ui()
    }


    update_ui(): void
    {
        this.ui.description.innerHTML = this.conf.description
        this.ui.current.innerHTML = String(this.conf.current)
        this.ui.target.innerHTML = String(this.conf.target)
        this.ui.unit.innerHTML = this.conf.unit
    }
}
