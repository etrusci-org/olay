import { fancycb } from './fancycb.mjs';
export const OLAY_GITHUB_URL = 'https://github.com/etrusci-org/olay';
export const OLAY_USER_AGENT = `Olay/3 +${OLAY_GITHUB_URL}`;
export const OLAY_COLOR = '#D9269D';
export class Olay {
    urlparams;
    constructor() {
        this.urlparams = new URL(document.location.href).searchParams;
        if (this.urlparams.has('theme')) {
            const theme = this.urlparams.get('theme')?.trim();
            if (theme) {
                const themecss = document.createElement('link');
                themecss.setAttribute('rel', 'stylesheet');
                themecss.setAttribute('href', `../../theme/${theme}.css?b=${fancycb()}`);
                document.head.append(themecss);
            }
        }
        console.group(`%c-=[ Olay | ${OLAY_GITHUB_URL} ]=-`, `font-size: 200%; color: ${OLAY_COLOR};`);
        console.log(`%c${this.constructor.name}`, `font-size: 150%; color: ${OLAY_COLOR};`);
        console.debug(this);
        document.title = `Olay | ${this.constructor.name.replace('Olay_', '').toLowerCase()}`;
    }
}
