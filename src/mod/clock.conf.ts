export const conf = {
    // clock update interval in seconds
    updateInterval: 1_000,

    // output template, available placeholders:
    // {year}
    // {month}
    // {day}
    // {hour}
    // {minute}
    // {second}
    // {timezoneOffset}
    formatTemplate: `{year}-{month}-{day} {hour}:{minute}:{second}`,
}
