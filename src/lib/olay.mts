export const OLAY_USER_AGENT = `olay/${new Date().getFullYear()}`;


export class Olay
{
    urlparams: URLSearchParams


    constructor()
    {
        console.group('-=[ Olay | https://github.com/etrusci-org/olay ]=-')

        this.urlparams = new URL(document.location.href).searchParams

        console.debug(this.constructor.name, this)
    }
}
