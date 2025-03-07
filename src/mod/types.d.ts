// -----------------------------------------------
// Clock

type Olay_Clock_Conf = {
    type: string
    format: string
    updaterate: number
    precision: number
}

type Olay_Clock_UI = {
    mod: HTMLElement
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
    mod: HTMLElement
}


// -----------------------------------------------
// Countdu

type Olay_Countdu_Conf = {
    type: string
    number_start: number
    number_end: number
    number_reached_message: string
    time_end: string
    time_format: string
    time_reached_message: string
    countingspeed: number
}

type Olay_Countdu_UI = {
    mod: HTMLElement
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
    mod: HTMLElement
    description: HTMLElement
    current: HTMLElement
    target: HTMLElement
    unit: HTMLElement
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
    mod: HTMLElement
}


// -----------------------------------------------
// Rotator

type Olay_Rotator_Conf = {
    updaterate: number
    items: string
    shuffle: boolean
}

type Olay_Rotator_UI = {
    mod: HTMLElement
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
    mod: HTMLElement
}
