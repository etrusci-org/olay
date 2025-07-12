import { Olay } from '../../lib/olay.mjs';
export class Olay_Goal extends Olay {
    conf = {
        description: 'Road to something',
        current: 5,
        target: 10,
        unit: 'something',
    };
    ui = {
        mod: document.querySelector('.mod'),
        description: document.querySelector('.description'),
        current: document.querySelector('.current'),
        target: document.querySelector('.target'),
        unit: document.querySelector('.unit'),
    };
    constructor() {
        super();
        for (let [k, v] of this.urlparams.entries()) {
            v = v.trim();
            switch (k) {
                case 'description':
                    this.conf.description = v || this.conf.description;
                    break;
                case 'current':
                    this.conf.current = Number(v || this.conf.current);
                    break;
                case 'target':
                    this.conf.target = Number(v || this.conf.target);
                    break;
                case 'unit':
                    this.conf.unit = v || this.conf.unit;
                    break;
                default:
                    console.warn(`skipping unknown parameter "${k}" with value "${v}"`);
            }
        }
        this.update_ui();
    }
    update_ui() {
        this.ui.description.innerHTML = this.conf.description;
        this.ui.current.innerHTML = String(this.conf.current);
        this.ui.target.innerHTML = String(this.conf.target);
        this.ui.unit.innerHTML = this.conf.unit;
    }
}
