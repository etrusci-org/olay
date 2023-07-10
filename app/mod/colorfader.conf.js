export const modConf = {
    /**
    * delay before fading to next color in seconds.
    */
    delay: '0',

    /**
    * fade to next color duration in seconds.
    */
    duration: '30',

    /**
    * fade timing function to use.
    * available functions:
    * - ease
    * - linear
    * - ease-in
    * - ease-out
    * - ease-in-out
    */
    function: 'linear',

    /**
    * whether to use randomized colors or the values from the colors list below.
    * true or false.
    */
    random: 'true',

    /**
    * if random is set to false, color values from this list will be used.
    * any valid css color value should work. e.g. hex, rgb, hsl, etc.
    * start each item with |.
    * use backticks (`) here so you can span it over multiple lines (better readability).
    * you can also put it on one line like so: '|#ff0000|#00ff00|#0000ff'.
    * color picker: https://duckduckgo.com/?t=ffab&q=color+picker&ia=answer
    */
    list: `
        |#ff0000
        |#00ff00
        |#0000ff
    `,

    /**
    * whether to shuffle the colors list.
    * true or false.
    */
    shuffle: 'false',
}
