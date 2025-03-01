export const OLAY_USER_AGENT = `olay/${new Date().getFullYear()}`;


export class Olay
{
    urlparams: URLSearchParams


    constructor()
    {
        this.urlparams = new URL(document.location.href).searchParams

        const c: string = '#D9269D'
        console.group('%c-=[ Olay | https://github.com/etrusci-org/olay ]=-', `font-size: 200%; color: ${c};`)
        console.log(`%c${this.constructor.name}`, `font-size: 150%; color: ${c};`)
        console.debug(this)

        document.title = this.constructor.name.replace('_', ' | ')
    }
}
