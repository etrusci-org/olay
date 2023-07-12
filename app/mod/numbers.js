export class Mod extends ModBase
{
    counter = null
    intervalID = null


    onInit()
    {
        this.counter = Number(this.conf.start)

        this.update()

        this.intervalID = setInterval(() => {
            this.update()
        }, this.conf.updaterate)
    }


    update()
    {
        let out = ''

        if (this.conf.type == 'random') {
            out = getRandomInteger(this.conf.start, this.conf.end)
        }

        if (this.conf.type == 'countup') {
            if (
                this.conf.end != 'none'
                && this.counter > Number(this.conf.end)
            ) {
                clearInterval(this.intervalID)
                return
            }

            out = this.counter
            this.counter++
        }

        if (this.conf.type == 'countdown') {
            if (
                this.conf.end != 'none'
                && this.counter < Number(this.conf.end)
            ) {
                clearInterval(this.intervalID)
                return
            }

            out = this.counter
            this.counter--
        }

        if (this.conf.repnum == 'true') {
            out = replaceNumsWithChars(out, this.conf.repmap)
        }

        this.outputElement.innerHTML = out
    }
}
