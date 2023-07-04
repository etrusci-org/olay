import { fyShuffle } from 'https://cdn.jsdelivr.net/gh/etrusci-org/nifty@main/javascript/fyShuffle.min.js'




export class Mod extends ModBase
{
    queue = []


    onInit()
    {
        this.update()

        setInterval(() => {
            this.update()
        }, this.conf.updaterate)
    }


    update()
    {
        if (this.queue.length == 0) {
            let dump = this.conf.items.split('|')

            for (let k = 0; k < dump.length; k++) {
                const item = String(dump[k]).trim();
                if (item) {
                    this.queue.push(item)
                }
            }

            if (this.conf.shuffle == 'true') {
                this.queue = fyShuffle(this.queue)
            }
        }

        let item = this.queue.splice(0, 1)[0]

        this.outputElement.innerHTML = item
    }
}
