var _a;
export class ElColorfader {
    DEFAULT_SETTINGS = {
        r_min: 70,
        r_max: 180,
        g_min: 70,
        g_max: 180,
        b_min: 70,
        b_max: 180,
        dur: 4.2,
        func: 'linear',
        target: 'text',
    };
    ele_selector;
    constructor(ele_selector = '.cf') {
        this.ele_selector = ele_selector;
    }
    start() {
        document.querySelectorAll(this.ele_selector).forEach(ele => {
            if (!(ele instanceof HTMLElement))
                return;
            const settings = {
                r_min: (ele.dataset['rMin']) ? _a.#clamp_number(Number(ele.dataset['rMin']), 0, 255) : this.DEFAULT_SETTINGS.r_min,
                r_max: (ele.dataset['rMax']) ? _a.#clamp_number(Number(ele.dataset['rMax']), 0, 255) : this.DEFAULT_SETTINGS.r_max,
                g_min: (ele.dataset['gMin']) ? _a.#clamp_number(Number(ele.dataset['gMin']), 0, 255) : this.DEFAULT_SETTINGS.g_min,
                g_max: (ele.dataset['gMax']) ? _a.#clamp_number(Number(ele.dataset['gMax']), 0, 255) : this.DEFAULT_SETTINGS.g_max,
                b_min: (ele.dataset['bMin']) ? _a.#clamp_number(Number(ele.dataset['bMin']), 0, 255) : this.DEFAULT_SETTINGS.b_min,
                b_max: (ele.dataset['bMax']) ? _a.#clamp_number(Number(ele.dataset['bMax']), 0, 255) : this.DEFAULT_SETTINGS.b_max,
                dur: (ele.dataset['dur']) ? Math.max(0, Number(ele.dataset['dur'])) : this.DEFAULT_SETTINGS.dur,
                func: (ele.dataset['func']) ? ele.dataset['func'].toLowerCase() : this.DEFAULT_SETTINGS.func,
                target: (ele.dataset['target']) ? ele.dataset['target'].toLowerCase() : this.DEFAULT_SETTINGS.target,
            };
            ele.style.transitionProperty = this.#target_to_prop(settings.target);
            ele.style.transitionDuration = `${settings.dur}s`;
            ele.style.transitionTimingFunction = settings.func;
            ele.addEventListener('transitionend', () => {
                this.#colorize(ele, settings);
            });
            this.#colorize(ele, settings);
        });
    }
    #colorize(ele, settings) {
        ele.style.setProperty(this.#target_to_prop(settings.target), `rgb(${_a.#random_int(settings.r_min, settings.r_max)} ${_a.#random_int(settings.g_min, settings.g_max)} ${_a.#random_int(settings.b_min, settings.b_max)})`);
    }
    #target_to_prop(target) {
        if (target == 'text') {
            return 'color';
        }
        else if (target == 'background') {
            return 'background-color';
        }
        else if (target == 'border') {
            return 'border-color';
        }
        else {
            console.warn(`invalid target '${target}', falling back to '${this.DEFAULT_SETTINGS.target}'`);
            return 'color';
        }
    }
    static #random_int(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    static #clamp_number(num, min, max) {
        return Math.max(min, Math.min(num, max));
    }
}
_a = ElColorfader;
