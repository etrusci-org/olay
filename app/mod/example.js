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
        this.outputElement.innerHTML = `${this.conf.message} ${Date.now()}`
    }
}
