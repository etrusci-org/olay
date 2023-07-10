export class Mod extends ModBase
{
    queue = []


    onInit()
    {
        this.outputElement.innerHTML = ''
        this.outputElement.style.width = '100vw'
        this.outputElement.style.height = '100vh'
        this.outputElement.style.transition = `background-color ${this.conf.duration}s ${this.conf.function} ${this.conf.delay}s`

        this.update()

        this.outputElement.addEventListener('transitionend', () => {
            this.update()
        })
    }


    update()
    {
        if (this.conf.random == 'true') {
            this.outputElement.style.backgroundColor = getRandomColorHex()
        }
        else {
            if (this.queue.length == 0) {
                for (const item of this.conf.list.split('|')) {
                    const value = item.trim()
                    if (value) {
                        this.queue.push(value)
                    }
                }

                if (this.conf.shuffle == 'true') {
                    this.queue = fyShuffle(this.queue)
                }
            }

            this.outputElement.style.backgroundColor = this.queue.splice(0, 1)[0]
        }
    }
}
