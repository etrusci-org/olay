export const OLAY_USER_AGENT: string = `olay/${new Date().getFullYear()}`
export const OLAY_COLOR: string = '#D9269D'


export class Olay
{
    urlparams: URLSearchParams


    constructor()
    {
        this.urlparams = new URL(document.location.href).searchParams

        console.group('%c-=[ Olay | https://github.com/etrusci-org/olay ]=-', `font-size: 200%; color: ${OLAY_COLOR};`)
        console.log(`%c${this.constructor.name}`, `font-size: 150%; color: ${OLAY_COLOR};`)
        console.debug(this)

        document.title = this.constructor.name.replace('_', ' | ')
    }
}
