export class Mod extends ModBase
{
    // onInit() will be automatically executed once when the mod class is loaded.
    // this.conf includes the default config + possible overrides from url request params.
    // this.outputElement is where the output goes.
    // everything else is pretty much optional.

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
