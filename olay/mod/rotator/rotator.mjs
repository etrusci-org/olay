import { Olay } from '../../lib/olay.mjs';
import { fyshuffle } from '../../lib/fyshuffle.mjs';
export class Olay_Rotator extends Olay {
    conf = {
        updaterate: 3,
        items: 'one|two|tree|four',
        random: false,
    };
    ui = {
        mod: document.querySelector('.mod')
    };
    queue = [];
    constructor() {
        super();
        for (let [k, v] of this.urlparams.entries()) {
            v = v.trim();
            switch (k) {
                case 'updaterate':
                    this.conf.updaterate = Math.max(0, Number(v || this.conf.updaterate));
                    break;
                case 'items':
                    this.conf.items = v || this.conf.items;
                    break;
                case 'random':
                    this.conf.random = (v === 'true') ? true : false;
                    break;
                default:
                    console.warn(`skipping unknown parameter "${k}" with value "${v}"`);
            }
        }
        this.update_ui(true);
    }
    update_ui(init_continous = false) {
        if (this.queue.length == 0) {
            for (let v of this.conf.items.split('|')) {
                v = v.trim();
                if (!v)
                    continue;
                this.queue.push(v);
            }
            if (this.conf.random) {
                this.queue = fyshuffle(this.queue);
            }
        }
        let item = this.queue.splice(0, 1)[0] || '';
        this.ui.mod.innerHTML = item;
        if (!init_continous) {
            return;
        }
        setInterval(() => this.update_ui(), this.conf.updaterate * 1_000);
    }
}
