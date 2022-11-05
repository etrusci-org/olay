import { quotes } from './quotes.js'


export const RandomQuoteTyper = {
    typingSpeed: 100,
    targetSelector: '.randomQuoteTyper',
    target: null,
    queue: [],
    quote: null,
    typerID: null,


    init() {
        this.target = document.querySelector(this.targetSelector)
    },


    typeQuote() {
        if (RandomQuoteTyper.typerID) return

        if (this.queue.length == 0) {
            this.queue = [...this._fys(quotes)]
        }

        this.quote = this.queue.pop() || null
        if (!this.quote) return

        let quoteStr = `"${this.quote.text}" — ${this.quote.author}`.split('')

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
        if (!this.typerID || !this.target) return

        clearInterval(this.typerID)
        this.typerID = null
    },


    _fys(arr) {
        for (let x = arr.length - 1; x > 0; x--) {
            const y = Math.floor(Math.random() * x)
            const z = arr[x]
            arr[x] = arr[y]
            arr[y] = z
        }
        return arr
    },
}
