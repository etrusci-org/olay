class ModBase
{
    modHandle = null
    outputElementSelector = 'div.mod'
    outputElement = null
    requestParams = null
    conf = {}


    constructor(modHandle, requestParams)
    {
        this.modHandle = modHandle
        this.requestParams = requestParams
        this.outputElement = document.querySelector(this.outputElementSelector)
        this.outputElement.classList.add(modHandle)
    }


    // will be automatically executed once when initializing the module.
    loadConf(modConf)
    {
        this.requestParams.forEach((v, k) => {
            if (modConf[k]) {
                modConf[k] = v
            }
        })

        this.conf = modConf

        if (this.requestParams.has('debug')) {
            console.debug('loaded conf:', this.conf)
            const e = document.createElement('div')
            e.innerHTML = `<div class="debug">loaded conf: ${JSON.stringify(this.conf)}</div>`
            document.body.appendChild(e)
        }
    }


    // override this in the individual module classes.
    // it's the first thing that's executed once after loadConf().
    onInit() {}
}
