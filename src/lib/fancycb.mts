export function fancycb(): string
{
    let cb: string = ''

    for (const n of String(Math.round(Date.now() / 1000)).split('')) {
        cb += String.fromCharCode(Number(n) + 97)
    }

    return cb
}
