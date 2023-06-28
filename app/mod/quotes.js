import { RandomQuoteTyper } from '../lib/RandomQuoteTyper.js';
import { conf } from './quotes.conf.js';
export class Mod {
    outputElement;
    updateInterval = conf.updateInterval;
    quotesFile = conf.quotesFile;
    typingSpeed = conf.typingSpeed;
    constructor(outputElement) {
        this.outputElement = outputElement;
        this.init();
    }
    async init() {
        const quotesScript = await import(this.quotesFile);
        RandomQuoteTyper.targetSelector = 'div.mod';
        RandomQuoteTyper.typingSpeed = this.typingSpeed;
        RandomQuoteTyper.init(quotesScript.quotes);
        RandomQuoteTyper.typeQuote();
        setInterval(() => {
            RandomQuoteTyper.typeQuote();
        }, this.updateInterval);
    }
}
