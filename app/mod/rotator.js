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
            for (const item of this.conf.items.split('|')) {
                const value = item.trim()
                if (value) {
                    this.queue.push(value)
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
