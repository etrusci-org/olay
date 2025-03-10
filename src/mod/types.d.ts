// -----------------------------------------------
// clock

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
// colorfader

type Olay_Colorfader_Conf = {
    duration: number
    func: string
    rmin: number
    rmax: number
    gmin: number
    gmax: number
    bmin: number
    bmax: number
}

type Olay_Colorfader_UI = {
    mod: HTMLDivElement
}


// -----------------------------------------------
// countdu

type Olay_Countdu_Conf = {
    type: string
    startnumber: number
    endnumber: number
    endtime: string
    countingspeed: number
    endmessage: string
}

type Olay_Countdu_UI = {
    mod: HTMLDivElement
}


// -----------------------------------------------
// dnmap

type Olay_Dnmap_Conf = {
    type: string
    updaterate: number
}

type Olay_Dnmap_UI = {
    mod: HTMLDivElement
    map: HTMLImageElement
}


// -----------------------------------------------
// floater

type Olay_Floater_Conf = {
    text: string
    posx: number
    posy: number
    velx: number
    vely: number
    flipx: boolean
    flipy: boolean
    changecolor: boolean
}

type Olay_Floater_UI = {
    mod: HTMLDivElement
    floater: HTMLDivElement
}


// -----------------------------------------------
// goal

type Olay_Goal_Conf = {
    description: string
    current: number | string
    target: number | string
    unit: string
}

type Olay_Goal_UI = {
    mod: HTMLDivElement
    description: HTMLDivElement
    current: HTMLSpanElement
    target: HTMLSpanElement
    unit: HTMLSpanElement
}


// -----------------------------------------------
// quotes

type Olay_Quotes_Conf = {
    updaterate: number
    typingspeed: number
    quoteformat: string
    authorformat: string
    endpoint: string
}

type Olay_Quotes_UI = {
    mod: HTMLDivElement
    quote: HTMLDivElement
    author: HTMLDivElement
}


// -----------------------------------------------
// rotator

type Olay_Rotator_Conf = {
    updaterate: number
    items: string
    random: boolean
}

type Olay_Rotator_UI = {
    mod: HTMLDivElement
}


// -----------------------------------------------
// soho

type Olay_Soho_Conf = {
    camera: string
    updaterate: number
}

type Olay_Soho_UI = {
    mod: HTMLDivElement
    sun: HTMLImageElement
}


// -----------------------------------------------
// twitchchat

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
