import { Olay } from '../../lib/olay.mjs';
export class Olay_Soho extends Olay {
    conf = {
        camera: 'c2',
        updaterate: 900,
    };
    ui = {
        mod: document.querySelector('.mod'),
        sun: document.querySelector('.mod .sun'),
    };
    min_updaterate = 600;
    camera_images = {
        'c2': 'https://soho.nascom.nasa.gov/data/realtime/c2/1024/latest.jpg',
        'c3': 'https://soho.nascom.nasa.gov/data/realtime/c3/1024/latest.jpg',
        'eit_171': 'https://soho.nascom.nasa.gov/data/realtime/eit_171/1024/latest.jpg',
        'eit_195': 'https://soho.nascom.nasa.gov/data/realtime/eit_195/1024/latest.jpg',
        'eit_284': 'https://soho.nascom.nasa.gov/data/realtime/eit_284/1024/latest.jpg',
        'eit_304': 'https://soho.nascom.nasa.gov/data/realtime/eit_304/1024/latest.jpg',
        'hmi_igr': 'https://soho.nascom.nasa.gov/data/realtime/hmi_igr/1024/latest.jpg',
        'hmi_mag': 'https://soho.nascom.nasa.gov/data/realtime/hmi_mag/1024/latest.jpg',
    };
    constructor() {
        super();
        for (let [k, v] of this.urlparams.entries()) {
            v = v.trim();
            switch (k) {
                case 'camera':
                    this.conf.camera = (Object.keys(this.camera_images).includes(v)) ? v : this.conf.camera;
                    break;
                case 'updaterate':
                    this.conf.updaterate = Math.max(this.min_updaterate, Number(v || this.conf.updaterate));
                    break;
                default:
                    console.warn(`skipping unknown parameter "${k}" with value "${v}"`);
            }
        }
        this.update_ui(true);
    }
    update_ui(init_continous = false) {
        this.ui.sun.setAttribute('src', `${this.camera_images[this.conf.camera]}?t=${Date.now()}`);
        if (!init_continous) {
            return;
        }
        setInterval(() => this.update_ui(), this.conf.updaterate * 1_000);
    }
}
