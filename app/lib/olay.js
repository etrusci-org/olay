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
        })
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


    // 1
    loadConf(modConf)
    {
        this.requestParams.forEach((v, k) => {
            if (modConf[k]) {
                modConf[k] = v
            }
        })

        this.conf = modConf
    }


    // 2
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


function getRandomColorHex()
{
    return `#${Math.random().toString(16).slice(2, 8)}`
}
