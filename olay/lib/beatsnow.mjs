export function beatsnow(precision = 2, format = '@{beats}') {
    const now = new Date();
    let today_seconds = 0;
    today_seconds += ((now.getUTCHours() < 23 ? now.getUTCHours() + 1 : 0) * 3_600);
    today_seconds += (now.getUTCMinutes() * 60);
    today_seconds += now.getUTCSeconds();
    return format.replace('{beats}', (today_seconds / 86.4).toFixed(precision));
}
