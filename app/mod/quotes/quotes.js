export class Mod extends ModBase
{
    async onInit()
    {
        const quotes = await fetchJSON(this.conf.sourcefile)

        RandomQuoteTyper.targetSelector = this.outputElementSelector
        RandomQuoteTyper.typingSpeed = this.conf.typingspeed

        RandomQuoteTyper.init(quotes)

        RandomQuoteTyper.typeQuote()

        setInterval(() => {
            RandomQuoteTyper.typeQuote()
        }, this.conf.updaterate)
    }
}
