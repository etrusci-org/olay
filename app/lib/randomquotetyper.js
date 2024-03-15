const RandomQuoteTyper = {
    typingSpeed: 100,
    targetSelector: '.randomQuoteTyper',
    target: null,
    quotes: null,
    queue: [],
    quote: null,
    typerID: null,


    init(quotes) {
        this.target = document.querySelector(this.targetSelector)
        if (quotes) {
            this.quotes = quotes
        }
    },


    typeQuote() {
        if (!this.quotes || RandomQuoteTyper.typerID) return

        if (this.queue.length == 0) {
            this.queue = [...fyShuffle(this.quotes)]
        }

        this.quote = this.queue.pop() || null

        if (!this.quote) return

        const quoteStr = `"${this.quote.text}" — ${this.quote.author}`.split('')

        if (!this.target) return

        this.target.innerHTML = ``
        this.target.classList.remove('doneTyping')

        this.typerID = setInterval(() => {
            if (!this.target) return

            this.target.innerHTML += `${quoteStr.shift()}`

            if (quoteStr.length == 0) {
                this.stop()
                this.target.classList.add('doneTyping')
            }
        }, this.typingSpeed)
    },


    stop() {
        if (!this.typerID) return

        clearInterval(this.typerID)
        this.typerID = null
    },
}
