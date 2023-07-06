import { RandomQuoteTyper } from 'https://cdn.jsdelivr.net/gh/etrusci-org/nifty@main/javascript/RandomQuoteTyper.min.js'
import { quotes } from 'https://cdn.jsdelivr.net/gh/etrusci-org/quotes@main/js/quotes-s9.min.js'





export class Mod extends ModBase
{
    onInit()
    {
        RandomQuoteTyper.targetSelector = this.outputElementSelector
        RandomQuoteTyper.typingSpeed = this.conf.typingspeed

        RandomQuoteTyper.init(quotes)

        RandomQuoteTyper.typeQuote()

        setInterval(() => {
            RandomQuoteTyper.typeQuote()
        }, this.conf.updaterate)
    }
}
