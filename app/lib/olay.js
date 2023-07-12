// Load mod when all stuff is loaded
// ------------------------------------------------------------------------------------------------

window.addEventListener('load', () => {
    // Collect crucial info to start with
    const requestParams = new URL(document.location.href).searchParams
    const modHandle = requestParams.get('mod')

    // Stop if "modHandle" is not set
    if (!modHandle) {
        return
    }

    // Cosmetics
    document.title = `${modHandle} | ${document.title}`

    // Load and init the mod
    import(`../mod/${modHandle}.js`).then((modClass) => {
        const Mod = new modClass.Mod(modHandle, requestParams)

        import(`../mod/${modHandle}.conf.js`).then((confData) => {
            Mod.loadConf(confData.modConf)
            Mod.onInit()
        }).catch((error) => {
            document.body.innerHTML = `failed to import "${modHandle}" conf: <code>${error}</code>`
        })
    }).catch((error) => {
        document.body.innerHTML = `failed to import "${modHandle}" module: <code>${error}</code>`
    })
}, false)




// Shared stuff
// ------------------------------------------------------------------------------------------------

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
            document.body.append(`loaded conf: ${JSON.stringify(this.conf)}`)
        }
    }


    // override this in the individual module classes.
    // it's the first thing that's executed once after loadConf().
    onInit() {}
}


function replaceNumsWithChars(input, mapKey)
{
    if (!mapKey) {
        mapKey = 1
    }

    const map = {
        1: { '0': 'A', '1': 'B', '2': 'C', '3': 'D', '4': 'E', '5': 'F', '6': 'G', '7': 'H', '8': 'I', '9': 'J' },
        2: { '0': 'Z', '1': 'Y', '2': 'X', '3': 'W', '4': 'V', '5': 'U', '6': 'T', '7': 'S', '8': 'R', '9': 'Q' },
        3: { '0': '9', '1': '8', '2': '7', '3': '6', '4': '5', '5': '4', '6': '3', '7': '2', '8': '1', '9': '0' },
        4: { '0': '●', '1': '□', '2': '◆', '3': '■', '4': '○', '5': '▶', '6': '◁', '7': '▲', '8': '◇', '9': '▼' },
        5: { '0': '٠', '1': '١', '2': '٢', '3': '٣', '4': '٤', '5': '٥', '6': '٦', '7': '٧', '8': '٨', '9': '٩' },
    }

    let chars = ''
    for (const x of String(input).split('')) {
        if (map[mapKey][x]) {
            chars += map[mapKey][x]
        } else {
            chars += x
        }
    }

    return chars
}


function getRandomInteger(min, max)
{
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}


function fyShuffle(arr) {
    const copy = [...arr]

    for (let i = copy.length - 1; i > 0; i--) {
        const y = Math.floor(Math.random() * i)
        const z = copy[i]
        copy[i] = copy[y]
        copy[y] = z
    }

    return copy
}


function getRandomColorHex()
{
    return Math.random().toString(16).slice(2, 8)
}


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
        if (!this.typerID || !this.target) return

        clearInterval(this.typerID)
        this.typerID = null
    },
}
