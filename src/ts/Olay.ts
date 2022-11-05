import { OlayClock } from "./OlayClock.js"



export const Olay: OlayInterface = {
    conf: {
        overlay: {
            clock: {
                updateInterval: 1_000,
                format: [
                    'human',
                    'unix',
                    'unixmilli',
                    'uptime',
                ]
            },
            // randomLuck: {
            //     updateInterval: 13_000,
            // },
            // randomQuotes: {
            //     updateInterval: 300_000,
            // },
        },
    },

    overlay: null,

    main() {
        let req = new URL(window.location.href)
        let overlay = req.searchParams.get('overlay') || ''
        if (Object.keys(this.conf.overlay).indexOf(overlay) != -1) {
            this.overlay = overlay
        }

        // clock
        if (this.overlay == 'clock') {
            OlayClock.run(this.conf.overlay['clock'])
        }
        // when no module was loaded just display the list
        else {
            let ul = document.createElement('ul')
            Object.keys(this.conf.overlay).forEach(k => {
                let li = document.createElement('li')
                li.innerHTML = `<a href="?overlay=${k}">${k}</a>`
                ul.append(li)
            })

            let body = document.querySelector('body')
            if (!body) return
            body.prepend(ul)
        }
    },
}
