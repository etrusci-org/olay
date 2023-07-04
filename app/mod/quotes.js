import { RandomQuoteTyper } from 'https://cdn.jsdelivr.net/gh/etrusci-org/nifty@main/javascript/RandomQuoteTyper.js'
import { quotes } from 'https://cdn.jsdelivr.net/gh/etrusci-org/quotes@main/js/quotes-s9.js'





export class Mod extends ModBase
{
    onInit()
    {
        RandomQuoteTyper.targetSelector = this.outputElementSelector

        RandomQuoteTyper.init(quotes)

        RandomQuoteTyper.typeQuote()

        setInterval(() => {
            RandomQuoteTyper.typeQuote()
        }, this.conf.updaterate)
    }
}
