export class ElFloaterLoader
{
    static #DEFAULT: {
        ELE_SELECTOR: string
        CON_SELECTOR: string
    } = {
        ELE_SELECTOR: '.elfloater',
        CON_SELECTOR: '#elfloater-container',
    }


    constructor(ele_selector?: string, con_selector?: string)
    {
        if (!ele_selector) ele_selector = ElFloaterLoader.#DEFAULT.ELE_SELECTOR
        if (!con_selector) con_selector = ElFloaterLoader.#DEFAULT.CON_SELECTOR

        const con = document.querySelector(con_selector)

        if (!(con instanceof HTMLElement)) {
            console.warn(`Container element '${con_selector} not found.`)
            return
        }

        console.debug(`[ElFloaterLoader] ele_selector=${ele_selector} con_selector=${con_selector}`)

        document.querySelectorAll(ele_selector).forEach(ele => {
            if (!(ele instanceof HTMLElement)) return

            new ElFloaterElement(ele, con)
        })
    }
}


export class ElFloaterElement
{
    static #DEFAULT: {
        ELE_VEL_X: number
        ELE_VEL_Y: number
        ELE_FLIP_X: boolean
        ELE_FLIP_Y: boolean
        ELE_SCALE_X: number
        ELE_SCALE_Y: number
        ELE_RANDOM_COLOR: boolean
        ELE_RANDOM_COLOR_RGB_MIN: number
        ELE_RANDOM_COLOR_RGB_MAX: number
    } = {
        ELE_VEL_X: 0.5,
        ELE_VEL_Y: 0.5,
        ELE_FLIP_X: false,
        ELE_FLIP_Y: false,
        ELE_SCALE_X: 1,
        ELE_SCALE_Y: 1,
        ELE_RANDOM_COLOR: false,
        ELE_RANDOM_COLOR_RGB_MIN: 0,
        ELE_RANDOM_COLOR_RGB_MAX: 255,
    }

    #fps: number = 60

    #con: HTMLElement
    #con_w!: number
    #con_h!: number

    #ele: HTMLElement
    #ele_w: number
    #ele_h: number
    #ele_pos_x: number
    #ele_pos_y: number
    #ele_vel_x: number
    #ele_vel_y: number
    #ele_flip_x: boolean
    #ele_flip_y: boolean
    #ele_scale_x: number
    #ele_scale_y: number
    #ele_random_color: boolean
    #ele_random_color_rgb_min: number
    #ele_random_color_rgb_max: number

    #raf: {
        previous_time: number
        frame_interval: number
        elapsed_time_multiplier: number
        elapsed_time: number
    }


    constructor(ele: HTMLElement, con: HTMLElement)
    {
        this.#con = con

        this.#set_con_size()
        this.#watch_con_size()

        ele.style.display = 'inline-block'
        ele.style.position = 'absolute'

        const ele_rect: DOMRect = ele.getBoundingClientRect()

        this.#ele = ele

        this.#ele_w = ele_rect.width
        this.#ele_h = ele_rect.height

        const max_pos_x: number = (this.#con_w * .9) - this.#ele_w
        const max_pos_y: number = (this.#con_h * .9) - this.#ele_h

        this.#ele_pos_x = (ele.dataset['posX']) ? ElFloaterUtil.clamp_number(Number(ele.dataset['posX']), 0, max_pos_x) : ElFloaterUtil.random_int(0, max_pos_x)
        this.#ele_pos_y = (ele.dataset['posY']) ? ElFloaterUtil.clamp_number(Number(ele.dataset['posY']), 0, max_pos_y) : ElFloaterUtil.random_int(0, max_pos_y)

        this.#ele_vel_x = (ele.dataset['velX']) ? Number(ele.dataset['velX']) : ElFloaterElement.#DEFAULT.ELE_VEL_X
        this.#ele_vel_y = (ele.dataset['velY']) ? Number(ele.dataset['velY']) : ElFloaterElement.#DEFAULT.ELE_VEL_Y

        this.#ele_flip_x = (String(ele.dataset['flipX']).toLowerCase() === 'true') ? true : ElFloaterElement.#DEFAULT.ELE_FLIP_X
        this.#ele_flip_y = (String(ele.dataset['flipY']).toLowerCase() === 'true') ? true : ElFloaterElement.#DEFAULT.ELE_FLIP_Y

        this.#ele_scale_x = ElFloaterElement.#DEFAULT.ELE_SCALE_X
        this.#ele_scale_y = ElFloaterElement.#DEFAULT.ELE_SCALE_Y

        this.#ele_random_color = (String(ele.dataset['randomColor']).toLowerCase() === 'true') ? true : ElFloaterElement.#DEFAULT.ELE_RANDOM_COLOR

        this.#ele_random_color_rgb_min = ElFloaterElement.#DEFAULT.ELE_RANDOM_COLOR_RGB_MIN
        this.#ele_random_color_rgb_max = ElFloaterElement.#DEFAULT.ELE_RANDOM_COLOR_RGB_MAX

        this.#raf = {
            previous_time: performance.now(),
            frame_interval: 1_000 / this.#fps,
            elapsed_time_multiplier: 1,
            elapsed_time: 0,
        }

        console.debug('[ElFloaterElement]', this)

        this.#move_ele()
        this.#float()
    }


    #set_con_size(): void
    {
        const con_rect: DOMRect = this.#con.getBoundingClientRect()

        this.#con_w = con_rect.width
        this.#con_h = con_rect.height
    }


    #watch_con_size(): void
    {
        let delay: number | undefined

        const O: ResizeObserver = new ResizeObserver(() => {
            clearTimeout(delay)
            delay = setTimeout(() => this.#set_con_size(), 500)
        })

        O.observe(this.#con)
    }


    #float(): void
    {
        const tick = (timestamp: number = 0): void => {
            this.#raf.elapsed_time = timestamp - this.#raf.previous_time
            this.#raf.elapsed_time_multiplier = this.#raf.elapsed_time / this.#raf.frame_interval

            this.#move_ele()
            this.#handle_ele_collision()
            this.#set_next_ele_position()

            this.#raf.previous_time = timestamp

            window.requestAnimationFrame(tick)
        }

        tick(0)
    }


    #move_ele(): void
    {
        this.#ele.style.setProperty('transform', `translate(${this.#ele_pos_x}px, ${this.#ele_pos_y}px) scale(${this.#ele_scale_x}, ${this.#ele_scale_y})`)
    }


    #set_next_ele_position(): void
    {
        this.#ele_pos_x += this.#ele_vel_x * this.#raf.elapsed_time_multiplier
        this.#ele_pos_y += this.#ele_vel_y * this.#raf.elapsed_time_multiplier
    }


    #handle_ele_collision(): void
    {
        if (this.#ele_pos_x + this.#ele_w >= this.#con_w) {
            this.#ele_pos_x = this.#con_w - this.#ele_w
            this.#ele_vel_x = -this.#ele_vel_x
            if (this.#ele_flip_x) this.#flip_ele('x')
            if (this.#ele_random_color) this.#randomize_ele_text_color()
        }
        else if (this.#ele_pos_x <= 0) {
            this.#ele_pos_x = 0
            this.#ele_vel_x = -this.#ele_vel_x
            if (this.#ele_flip_x) this.#restore_flipped_ele('x')
            if (this.#ele_random_color) this.#randomize_ele_text_color()
        }

        if (this.#ele_pos_y + this.#ele_h >= this.#con_h) {
            this.#ele_pos_y = this.#con_h - this.#ele_h
            this.#ele_vel_y = -this.#ele_vel_y
            if (this.#ele_flip_y) this.#flip_ele('y')
            if (this.#ele_random_color) this.#randomize_ele_text_color()
        }
        else if (this.#ele_pos_y <= 0) {
            this.#ele_pos_y = 0
            this.#ele_vel_y = -this.#ele_vel_y
            if (this.#ele_flip_y) this.#restore_flipped_ele('y')
            if (this.#ele_random_color) this.#randomize_ele_text_color()
        }
    }


    #flip_ele(axis: 'x'|'y'): void
    {
        if (axis == 'x') this.#ele_scale_x = -1
        if (axis == 'y') this.#ele_scale_y = -1
    }


    #restore_flipped_ele(axis: 'x'|'y'): void
    {
        if (axis == 'x') this.#ele_scale_x = 1
        if (axis == 'y') this.#ele_scale_y = 1
    }


    #randomize_ele_text_color(): void
    {
        this.#ele.style.color = `rgb(${ElFloaterUtil.random_int(this.#ele_random_color_rgb_min, this.#ele_random_color_rgb_max)} ${ElFloaterUtil.random_int(this.#ele_random_color_rgb_min, this.#ele_random_color_rgb_max)} ${ElFloaterUtil.random_int(this.#ele_random_color_rgb_min, this.#ele_random_color_rgb_max)})`
    }
}


export class ElFloaterUtil
{
    static random_int(min: number, max: number): number
    {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min)
    }


    static clamp_number(num: number, min: number, max: number): number
    {
        return Math.max(min, Math.min(num, max))
    }
}
