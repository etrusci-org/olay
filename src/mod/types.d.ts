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
    disabletyping: boolean
    format: string
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
