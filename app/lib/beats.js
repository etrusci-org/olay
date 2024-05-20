function beatsNow()
{
    const now = new Date()
    const h = now.getUTCHours() < 23 ? now.getUTCHours() + 1 : 0
    const m = now.getUTCMinutes()
    const s = now.getUTCSeconds()
    const now_b = (((h * 3600) + (m * 60) + s) / 86.4).toFixed(2)
    return now_b
}
