type ElementSettings = {
    r_min: number
    r_max: number
    g_min: number
    g_max: number
    b_min: number
    b_max: number
    dur: number
    func: string  // linear | ease | ease-in | ease-out | ease-in-out | step-start | step-end
    target: string  // text | background | border
}


export class ElColorfader
{
    DEFAULT_SETTINGS: ElementSettings = {
        r_min: 70,
        r_max: 180,
        g_min: 70,
        g_max: 180,
        b_min: 70,
        b_max: 180,
        dur: 4.2,
        func: 'linear',
        target: 'text',
    }

    ele_selector: string


    constructor(ele_selector: string = '.cf')
    {
        this.ele_selector = ele_selector
    }


    start(): void
    {
        document.querySelectorAll(this.ele_selector).forEach(ele => {
            if (!(ele instanceof HTMLElement)) return

            const settings: ElementSettings = {
                r_min: (ele.dataset['rMin']) ? ElColorfader.#clamp_number(Number(ele.dataset['rMin']), 0, 255) : this.DEFAULT_SETTINGS.r_min,
                r_max: (ele.dataset['rMax']) ? ElColorfader.#clamp_number(Number(ele.dataset['rMax']), 0, 255) : this.DEFAULT_SETTINGS.r_max,
                g_min: (ele.dataset['gMin']) ? ElColorfader.#clamp_number(Number(ele.dataset['gMin']), 0, 255) : this.DEFAULT_SETTINGS.g_min,
                g_max: (ele.dataset['gMax']) ? ElColorfader.#clamp_number(Number(ele.dataset['gMax']), 0, 255) : this.DEFAULT_SETTINGS.g_max,
                b_min: (ele.dataset['bMin']) ? ElColorfader.#clamp_number(Number(ele.dataset['bMin']), 0, 255) : this.DEFAULT_SETTINGS.b_min,
                b_max: (ele.dataset['bMax']) ? ElColorfader.#clamp_number(Number(ele.dataset['bMax']), 0, 255) : this.DEFAULT_SETTINGS.b_max,
                dur: (ele.dataset['dur']) ? Math.max(0, Number(ele.dataset['dur'])) : this.DEFAULT_SETTINGS.dur,
                func: (ele.dataset['func']) ? ele.dataset['func'].toLowerCase() : this.DEFAULT_SETTINGS.func,
                target: (ele.dataset['target']) ? ele.dataset['target'].toLowerCase() : this.DEFAULT_SETTINGS.target,
            }

            ele.style.transitionProperty = this.#target_to_prop(settings.target)
            ele.style.transitionDuration = `${settings.dur}s`
            ele.style.transitionTimingFunction = settings.func

            ele.addEventListener('transitionend', () => {
                this.#colorize(ele, settings)
            })

            this.#colorize(ele, settings)
        })
    }


    #colorize(ele: HTMLElement, settings: ElementSettings): void
    {
        ele.style.setProperty(this.#target_to_prop(settings.target), `rgb(${ElColorfader.#random_int(settings.r_min, settings.r_max)} ${ElColorfader.#random_int(settings.g_min, settings.g_max)} ${ElColorfader.#random_int(settings.b_min, settings.b_max)})`)
    }


    #target_to_prop(target: string): string
    {
        if (target == 'text') {
            return 'color'
        }
        else if (target == 'background') {
            return 'background-color'
        }
        else if (target == 'border') {
            return 'border-color'
        }
        else {
            console.warn(`invalid target '${target}', falling back to '${this.DEFAULT_SETTINGS.target}'`)
            return 'color'
        }
    }


    static #random_int(min: number, max: number): number
    {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1) + min)
    }


    static #clamp_number(num: number, min: number, max: number): number
    {
        return Math.max(min, Math.min(num, max))
    }
}
