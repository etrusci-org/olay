export function sectodur(ms: number, padsec: boolean = false): string
{
    const sec: number = Math.max(0, Math.floor(ms / 1_000))

    let dur: string = ''

    const d = Math.floor(sec / 86_400)
    const h = Math.floor(sec % 86_400 / 3_600)
    const m = Math.floor(sec % 3_600 / 60)
    const s = Math.floor(sec % 60)

    if (d > 0) {
        dur += `${d}:`
    }

    if (d || h > 0) {
        dur += `${h}:`
    }

    if (d || h || m > 0) {
        dur += `${m}:`
    }

    dur += `${(!padsec) ? s : String(s).padStart(2, '0')}`

    return dur
}
