export class Mod extends ModBase
{
    onInit()
    {
        this.outputElement.innerHTML = ''
        this.outputElement.style.width = '100vw'
        this.outputElement.style.height = '100vh'
        this.outputElement.style.backgroundColor = getRandomColorHex()
        this.outputElement.style.transition = `background-color ${this.conf.duration}s ${this.conf.function} ${this.conf.delay}s`

        this.outputElement.addEventListener('transitionend', () => {
            this.update()
        })
    }


    update()
    {
        this.outputElement.style.backgroundColor = getRandomColorHex()
    }
}
