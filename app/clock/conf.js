export const modConf = {
    /*
    clock update rate in milliseconds.
    1000 milliseconds = 1 second.
    */
    updateRate: 1_000,

    /*
    clock type.
    available types:
    - human = human readable
    - unix = unixtime stamp
    - unixms = unixtime stamp with milliseconds
    */
    type: 'human',

    /*
    output template, only applies if clockType is set to 'human'.
    html can be used, e.g. <br> for line breaks.
    available placeholders:
    - {year}
    - {month}
    - {day}
    - {hour}
    - {minute}
    - {second}
    - {millisecond}
    - {timezoneOffset}

    Full example: {year}-{month}-{day}<br>{hour}:{minute}:{second}.{millisecond}<br>{timezoneOffset}
    */
    humanFormat: '{year}-{month}-{day} {hour}:{minute}:{second}',
}
