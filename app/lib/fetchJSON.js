'use strict';

export async function fetchJSON(url) {
    return fetch(url).then((response) => response.json());
}
