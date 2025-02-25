export function humantime(format = '{year}-{month}-{day} {hour}:{minute}:{second}.{millisecond} {timezoneOffset}') {
    const dt = new Date();
    let timestamp = format;
    timestamp = timestamp.replace('{year}', String(dt.getFullYear()));
    timestamp = timestamp.replace('{month}', String(dt.getMonth() + 1).padStart(2, '0'));
    timestamp = timestamp.replace('{day}', String(dt.getDate()).padStart(2, '0'));
    timestamp = timestamp.replace('{hour}', String(dt.getHours()).padStart(2, '0'));
    timestamp = timestamp.replace('{minute}', String(dt.getMinutes()).padStart(2, '0'));
    timestamp = timestamp.replace('{second}', String(dt.getSeconds()).padStart(2, '0'));
    timestamp = timestamp.replace('{millisecond}', String(dt.getMilliseconds()).padEnd(3, '0'));
    timestamp = timestamp.replace('{timezoneOffset}', `UTC${String(dt.getTimezoneOffset() / 60)}`);
    return timestamp;
}
