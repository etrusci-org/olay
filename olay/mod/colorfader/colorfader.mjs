import { Olay } from '../../lib/olay.mjs';
import { ElColorfader } from '../../lib/elcolorfader.mjs';
export class Olay_Colorfader extends Olay {
    conf = {
        duration: 3,
        func: 'ease-in-out',
        rmin: 70,
        rmax: 180,
        gmin: 70,
        gmax: 180,
        bmin: 70,
        bmax: 180,
    };
    ui = {
        mod: document.querySelector('.mod')
    };
    constructor() {
        super();
        for (let [k, v] of this.urlparams.entries()) {
            v = v.trim();
            switch (k) {
                case 'duration':
                    this.conf.duration = Math.max(0, Number(v || this.conf.duration));
                    break;
                case 'func':
                    this.conf.func = v || this.conf.func;
                    break;
                case 'rmin':
                    this.conf.rmin = Math.max(0, Number(v || this.conf.rmin));
                    break;
                case 'rmax':
                    this.conf.rmax = Math.max(0, Number(v || this.conf.rmax));
                    break;
                case 'gmin':
                    this.conf.gmin = Math.max(0, Number(v || this.conf.gmin));
                    break;
                case 'gmax':
                    this.conf.gmax = Math.max(0, Number(v || this.conf.gmax));
                    break;
                case 'bmin':
                    this.conf.bmin = Math.max(0, Number(v || this.conf.bmin));
                    break;
                case 'bmax':
                    this.conf.bmax = Math.max(0, Number(v || this.conf.bmax));
                    break;
                default:
                    console.warn(`skipping unknown parameter "${k}" with value "${v}"`);
            }
        }
        this.ui.mod.dataset['dur'] = String(this.conf.duration);
        this.ui.mod.dataset['func'] = this.conf.func;
        this.ui.mod.dataset['rMin'] = String(this.conf.rmin);
        this.ui.mod.dataset['rMax'] = String(this.conf.rmax);
        this.ui.mod.dataset['gMin'] = String(this.conf.gmin);
        this.ui.mod.dataset['gMax'] = String(this.conf.gmax);
        this.ui.mod.dataset['bMin'] = String(this.conf.bmin);
        this.ui.mod.dataset['bMax'] = String(this.conf.bmax);
        this.ui.mod.dataset['target'] = 'background';
        new ElColorfader('.mod').start();
    }
}
