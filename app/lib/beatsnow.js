function beatsNow()
{
    const now = new Date()
    return ((((now.getUTCHours() < 23 ? now.getUTCHours() + 1 : 0) * 3600) + (now.getUTCMinutes() * 60) + now.getUTCSeconds()) / 86.4).toFixed(2)
}
