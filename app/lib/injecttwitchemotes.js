function injectTwitchEmotes(message, emotes = [], theme = 'light', size = 'large')
{
    if (!emotes) {
        return message
    }

    if (size == 'large') {
        size = '3.0'
    }
    else if (size == 'medium') {
        size = '2.0'
    }
    else if (size == 'small') {
        size = '1.0'
    }
    else {
        size = '3.0'
    }

    let dump = message.split('')

    for (const id in emotes) {
        for (const key in emotes[id]) {
            let pos = emotes[id][key]
            pos = pos.split('-')
            pos = [parseInt(pos[0]), parseInt(pos[1])]
            let length = pos[1] - pos[0]
            let empty = Array.apply(null, new Array(length + 1)).map(function() { return '' })
            dump = dump.slice(0, pos[0]).concat(empty).concat(dump.slice(pos[1] + 1, dump.length))
            dump.splice(pos[0], 1, `<img class="emote" src="https://static-cdn.jtvnw.net/emoticons/v2/${id}/default/${theme}/${size}">`)
        }
    }

    return dump.join('')
}
