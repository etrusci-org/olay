export const conf = {
    // clock update interval in milliseconds.
    // 1000 milliseconds = 1 second.
    updateInterval: 1_000,

    // clock type.
    // available types:
    // - human = human readable
    // - robot = unixtime stamp
    clockType: 'human',

    // output template, only applies if clockType is set to 'human'.
    // html can be used, e.g. <br> for line breaks.
    // available placeholders:
    // - {year}
    // - {month}
    // - {day}
    // - {hour}
    // - {minute}
    // - {second}
    // - {millisecond}
    // - {timezoneOffset}
    formatTemplate: '{year}-{month}-{day}<br>{hour}:{minute}:{second}'
}
