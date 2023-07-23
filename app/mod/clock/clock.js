export class Mod extends ModBase
{
    onInit()
    {
        this.update()

        setInterval(() => {
            this.update()
        }, this.conf.updaterate)
    }


    update()
    {
        let out = ''

        if (this.conf.type == 'human') {
            out = humanTimestamp(this.conf.humanformat)
        }
        else if (this.conf.type == 'unix') {
            out = String(Math.floor(Date.now() / 1000))
        }
        else if (this.conf.type == 'unixms') {
            out = String(Date.now())
        }

        if (this.conf.repnum == 'true') {
            out = replaceNumsWithChars(out, this.conf.repmap)
        }

        this.outputElement.innerHTML = out
    }
}
