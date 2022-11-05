import { OlayClock } from "./OlayClock.js";
export const Olay = {
    conf: {
        overlay: {
            clock: {
                updateInterval: 1000,
                format: [
                    'human',
                    'unix',
                    'unixmilli',
                    'uptime',
                ]
            },
        },
    },
    overlay: null,
    main() {
        let req = new URL(window.location.href);
        let overlay = req.searchParams.get('overlay') || '';
        if (Object.keys(this.conf.overlay).indexOf(overlay) != -1) {
            this.overlay = overlay;
        }
        if (this.overlay == 'clock') {
            OlayClock.run(this.conf.overlay['clock']);
        }
        else {
            let ul = document.createElement('ul');
            Object.keys(this.conf.overlay).forEach(k => {
                let li = document.createElement('li');
                li.innerHTML = `<a href="?overlay=${k}">${k}</a>`;
                ul.append(li);
            });
            let body = document.querySelector('body');
            if (!body)
                return;
            body.prepend(ul);
        }
    },
};
