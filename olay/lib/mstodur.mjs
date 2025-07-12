export function mstodur(ms, padsec = false, unit_letters = false) {
    const sec = Math.max(0, Math.floor(ms / 1_000));
    let dur = '';
    const d = Math.floor(sec / 86_400);
    const h = Math.floor(sec % 86_400 / 3_600);
    const m = Math.floor(sec % 3_600 / 60);
    const s = Math.floor(sec % 60);
    if (d > 0) {
        dur += (unit_letters) ? `${d}d ` : `${d}:`;
    }
    if (d || h > 0) {
        dur += (unit_letters) ? `${h}h ` : `${h}:`;
    }
    if (d || h || m > 0) {
        dur += (unit_letters) ? `${m}m ` : `${m}:`;
    }
    // dur += `${(!padsec) ? s : String(s).padStart(2, '0')}`
    const secs = `${(!padsec) ? s : String(s).padStart(2, '0')}`;
    dur += (unit_letters) ? `${secs}s ` : secs;
    return dur;
}
