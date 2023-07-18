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
            const dt = new Date()
            out = this.conf.humanformat
            out = out.replace('{year}', String(dt.getFullYear()).padStart(2, '0'))
            out = out.replace('{month}', String(dt.getMonth() + 1).padStart(2, '0'))
            out = out.replace('{day}', String(dt.getDate()).padStart(2, '0'))
            out = out.replace('{hour}', String(dt.getHours()).padStart(2, '0'))
            out = out.replace('{minute}', String(dt.getMinutes()).padStart(2, '0'))
            out = out.replace('{second}', String(dt.getSeconds()).padStart(2, '0'))
            out = out.replace('{millisecond}', String(dt.getMilliseconds()).padEnd(3, '0'))
            out = out.replace('{timezoneOffset}', `UTC${String(dt.getTimezoneOffset() / 60)}`)
        }
        else if (this.conf.type == 'unix') {
            out = String(Math.floor(Date.now() / 1000))
        }
        else if (this.conf.type == 'unixms') {
            out = String(Date.now())
        }
        else {
            out = 'Invalid "type"'
        }

        if (this.conf.repnum == 'true') {
            out = replaceNumsWithChars(out, this.conf.repmap)
        }

        this.outputElement.innerHTML = out
    }
}
