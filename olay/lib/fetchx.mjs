export async function fetchx(type, url, options = {}) {
    const response = await fetch(url, options);
    switch (type) {
        case 'json': return await response.json();
        case 'text': return await response.text();
        case 'blob': return await response.blob();
    }
}
