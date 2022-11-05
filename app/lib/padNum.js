/**
 * Pad the start of a number with a specific amount of characters.
 *
 * @param {number} num  Number to be padded.
 * @param {number} width  Desired maximum length of the returned string.
 * @param {string} filler  Character to be used for padding.
 * @returns {string}  Padded number.
 */
export function padNum(num, width = 2, filler = '0') {
    let str = num.toString();
    if (str.length >= width) {
        return str;
    }
    return filler.repeat(width - str.length) + str;
};
