import { OLAY_USER_AGENT } from './olay.mjs';
export async function fetchjson(url) {
    return fetch(url, { cache: 'no-store', headers: { 'user-agent': OLAY_USER_AGENT } }).then((response) => response.json());
}
