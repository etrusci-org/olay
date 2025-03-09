// -----------------------------------------------
// Clock

type Olay_Clock_Conf = {
    type: string
    format: string
    updaterate: number
    decimals: number
}

type Olay_Clock_UI = {
    mod: HTMLDivElement
}


// -----------------------------------------------
// Colorfader

type Olay_Colorfader_Conf = {
    duration: number
    func: string
    r_min: number
    r_max: number
    g_min: number
    g_max: number
    b_min: number
    b_max: number
}

type Olay_Colorfader_UI = {
    mod: HTMLDivElement
}


// -----------------------------------------------
// Countdu

type Olay_Countdu_Conf = {
    type: string
    number_start: number
    number_end: number
    time_end: string
    time_format: string
    countingspeed: number
    end_message: string
}

type Olay_Countdu_UI = {
    mod: HTMLDivElement
}


// -----------------------------------------------
// Dnmap

type Olay_Dnmap_Conf = {
    type: string
    updaterate: number
}

type Olay_Dnmap_UI = {
    mod: HTMLDivElement
    img: HTMLImageElement
}


// -----------------------------------------------
// Floater

type Olay_Floater_Conf = {
    text: string
    pos_x: number
    pos_y: number
    vel_x: number
    vel_y: number
    flip_x: boolean
    flip_y: boolean
    colorchange: boolean
}

type Olay_Floater_UI = {
    mod: HTMLDivElement
    floater: HTMLDivElement
}


// -----------------------------------------------
// Goal

type Olay_Goal_Conf = {
    description: string
    current: number | string
    target: number | string
    unit: string
}

type Olay_Goal_UI = {
    mod: HTMLDivElement
    description: HTMLDivElement
    current: HTMLDivElement
    target: HTMLDivElement
    unit: HTMLDivElement
}


// -----------------------------------------------
// Quotes

type Olay_Quotes_Conf = {
    updaterate: number
    typingspeed: number
    format_quote: string
    format_author: string
    endpoint: string
}

type Olay_Quotes_UI = {
    mod: HTMLDivElement
    quote: HTMLDivElement
    author: HTMLDivElement
}


// -----------------------------------------------
// Rotator

type Olay_Rotator_Conf = {
    updaterate: number
    items: string
    shuffle: boolean
}

type Olay_Rotator_UI = {
    mod: HTMLDivElement
}


// -----------------------------------------------
// Soho

type Olay_Soho_Conf = {
    camera: string
    updaterate: number
}

type Olay_Soho_UI = {
    mod: HTMLDivElement
    img: HTMLImageElement
}


// -----------------------------------------------
// TwitchChat

type Olay_TwitchChat_Conf = {
    channels: string[]
    ignore: string[]
    limit: number
    removeafter: number
    timeformat: string
    usercolor: boolean
    emotes: boolean
    emotestheme: string
    emotessize: string
}

type Olay_TwitchChat_UI = {
    mod: HTMLDivElement
}
