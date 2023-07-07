export const modConf = {
    /**
    * numbers update rate in milliseconds.
    * 1000 milliseconds = 1 second.
    */
    updaterate: '1000',


    /**
    * output type.
    * available types:
    * - random
    * - countup
    * - countdown
    */
    type: 'random',

    /**
    * start and end range of the numbers.
    * if type is set to random, random numbers in this range will be picked.
    * if type is set to countup or countdown, numbers will go up or down in this range.
    * if type is set to countup or countdown, end can be set to 'none' to count forever.
    */
    start: '0',
    end: '1000',

    /**
    * whether to replace numbers with characters.
    */
    repnum: 'false',

    /**
    * the character map to use for repnum.
    * 1 - 5.
    * see replaceNumsWithChars() in app/lib/olay.js for map contents.
    */
    repmap: '1',
}
