export const OLAY_GITHUB_URL: string = 'https://github.com/etrusci-org/olay'
export const OLAY_USER_AGENT: string = `Olay/3 +${OLAY_GITHUB_URL}`
export const OLAY_COLOR: string = '#D9269D'


export class Olay
{
    urlparams: URLSearchParams


    constructor()
    {
        this.urlparams = new URL(document.location.href).searchParams

        console.group(`%c-=[ Olay | ${OLAY_GITHUB_URL} ]=-`, `font-size: 200%; color: ${OLAY_COLOR};`)
        console.log(`%c${this.constructor.name}`, `font-size: 150%; color: ${OLAY_COLOR};`)
        console.debug(this)

        document.title = `Olay | ${this.constructor.name.replace('Olay_', '').toLowerCase()}`
    }
}
