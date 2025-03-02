import { Olay } from '../../lib/olay.mjs'
import { ElColorfader } from '../../lib/elcolorfader.mjs'


export class Olay_Colorfader extends Olay
{
    conf: Olay_Colorfader_Conf = {}

    ui: Olay_Colorfader_UI = {
        mod: document.querySelector('.mod') as HTMLElement
    }


    constructor()
    {
        super()

        for (let [k, v] of this.urlparams.entries()) {
            v = v.trim()

            switch (k) {
                default:
                    console.warn(`skipping unknown parameter "${k}" with value "${v}"`)
            }
        }

        this.ui.mod.dataset['dur'] = '10'
        this.ui.mod.dataset['func'] = 'ease-in-out'
        this.ui.mod.dataset['target'] = 'background'

        new ElColorfader('.mod').start()
    }
}
