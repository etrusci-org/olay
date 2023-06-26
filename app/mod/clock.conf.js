export const conf = {
    // clock update interval in milliseconds.
    // 1000 milliseconds = 1 second.
    updateInterval: 1000,
    // clock type.
    // available types:
    // human
    // robot
    clockType: 'human',
    // output template, only applies if clockType is set to 'human'.
    // available placeholders:
    // {year}
    // {month}
    // {day}
    // {hour}
    // {minute}
    // {second}
    // {millisecond}
    // {timezoneOffset}
    formatTemplate: '{year}-{month}-{day}<br>{hour}:{minute}:{second}'
};
