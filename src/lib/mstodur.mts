export function mstodur(ms: number, padsec: boolean = false, unit_letters: boolean = false): string
{
    const sec: number = Math.max(0, Math.floor(ms / 1_000))

    let dur: string = ''

    const d: number = Math.floor(sec / 86_400)
    const h: number = Math.floor(sec % 86_400 / 3_600)
    const m: number = Math.floor(sec % 3_600 / 60)
    const s: number = Math.floor(sec % 60)

    if (d > 0) {
        dur += (unit_letters) ? `${d}d ` : `${d}:`
    }

    if (d || h > 0) {
        dur += (unit_letters) ? `${h}h ` : `${h}:`
    }

    if (d || h || m > 0) {
        dur += (unit_letters) ? `${m}m ` : `${m}:`
    }

    // dur += `${(!padsec) ? s : String(s).padStart(2, '0')}`
    const secs: string = `${(!padsec) ? s : String(s).padStart(2, '0')}`

    dur += (unit_letters) ? `${secs}s ` : secs

    return dur
}
