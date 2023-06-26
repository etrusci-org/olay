import { conf } from './clock.conf.js'




export class Mod
{
    outputElement: HTMLDivElement
    updateInterval = conf.updateInterval
    formatTemplate = conf.formatTemplate


    constructor(outputElement: HTMLDivElement)
    {
        this.outputElement = outputElement

        this.update()

        setInterval(() => {
            this.update()
        }, this.updateInterval)
    }


    update(): void
    {
        if (!this.outputElement) {
            return
        }

        const timeNow = new Date()

        let output = this.formatTemplate
        output = output.replace('{year}', String(timeNow.getFullYear()).padStart(2, '0'))
        output = output.replace('{month}', String(timeNow.getMonth() + 1).padStart(2, '0'))
        output = output.replace('{day}', String(timeNow.getDate()).padStart(2, '0'))
        output = output.replace('{hour}', String(timeNow.getHours()).padStart(2, '0'))
        output = output.replace('{minute}', String(timeNow.getMinutes()).padStart(2, '0'))
        output = output.replace('{second}', String(timeNow.getSeconds()).padStart(2, '0'))
        output = output.replace('{timezoneOffset}', `UTC${String(timeNow.getTimezoneOffset() / 60)}`)

        this.outputElement.innerHTML = `${output}`
    }
}
