export const OLAY_USER_AGENT = `olay/${new Date().getFullYear()}`;


export class Olay
{
    urlparams: URLSearchParams


    constructor()
    {
        this.urlparams = new URL(document.location.href).searchParams

        const c: string = '#00adb9'
        console.group('%c-=[ Olay | https://github.com/etrusci-org/olay ]=-', `font-size: 200%; color: ${c};`)
        console.debug(`%c${this.constructor.name}`, `font-size: 150%; color: #00adb9;`)
        console.debug(this)
    }
}
