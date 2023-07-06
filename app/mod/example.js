export class Mod extends ModBase
{
    // this.conf includes the default config + possible overrides from request params
    // this.outputElement is where the output goes

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
