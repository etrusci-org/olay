const appConf = {
    module: {
        chat: {
            css: [
                './mod/chat/chat.default.css',
            ],
            libs: [
                './lib/humantimestamp.js',
                './lib/injecttwitchemotes.js',
                './lib/removehtmltags.js',
                './lib/replacenumswithchars.js',
                './lib/vendor/tmi.min.js',
            ],
        },
        clock: {
            css: [
                './mod/clock/clock.default.css',
            ],
            libs: [
                './lib/beats.js',
                './lib/humantimestamp.js',
                './lib/replacenumswithchars.js',
            ],
        },
        colorfader: {
            css: [
                './mod/colorfader/colorfader.default.css',
            ],
            libs: [
                './lib/fyshuffle.js',
                './lib/getrandomcolorhex.js',
            ],
        },
        example: {
            css: [
                './mod/example/example.default.css',
            ],
            libs: [],
        },
        goal: {
            css: [
                './mod/goal/goal.default.css',
            ],
            libs: [],
        },
        numbers: {
            css: [
                './mod/numbers/numbers.default.css',
            ],
            libs: [
                './lib/getrandominteger.js',
                './lib/replacenumswithchars.js',
            ],
        },
        quotes: {
            css: [
                './mod/quotes/quotes.default.css',
            ],
            libs: [
                './lib/fetchjson.js',
                './lib/fyshuffle.js',
                './lib/randomquotetyper.js',
            ],
        },
        rotator: {
            css: [
                './mod/rotator/rotator.default.css',
            ],
            libs: [
                './lib/fyshuffle.js',
            ],
        },
    }
}


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

    // Load CSS and libs
    for (const item of appConf.module[modHandle].css) {
        const e = document.createElement('link')
        e.rel = 'stylesheet'
        e.href = item
        document.head.appendChild(e)
    }

    for (const item of appConf.module[modHandle].libs) {
        const e = document.createElement('script')
        e.src = item
        document.body.appendChild(e)
    }

    // Load and init the mod
    import(`../mod/${modHandle}/${modHandle}.js`).then((modClass) => {
        const Mod = new modClass.Mod(modHandle, requestParams)
        import(`../mod/${modHandle}/${modHandle}.conf.js`).then((confData) => {
            Mod.loadConf(confData.modConf)
            Mod.onInit()
        })
        .catch((error) => {
            document.body.innerHTML = `failed to import "${modHandle}" conf: <code>${error}</code>`
        })
    })
    .catch((error) => {
        document.body.innerHTML = `failed to import "${modHandle}" module: <code>${error}</code>`
    })
}, false)
