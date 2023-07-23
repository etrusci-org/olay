function injectTwitchEmotes(emotes, theme, message)
{
    if (!emotes) {
        return message
    }

    let dump = message.split('')

    for (const i in emotes) {
        const e = emotes[i]

        for (const j in e) {
            let pos = e[j]
            pos = pos.split('-')
            pos = [parseInt(pos[0]), parseInt(pos[1])]
            let length = pos[1] - pos[0]
            let empty = Array.apply(null, new Array(length + 1)).map(function() { return '' })
            dump = dump.slice(0, pos[0]).concat(empty).concat(dump.slice(pos[1] + 1, dump.length))
            dump.splice(pos[0], 1, `<img class="emote" src="https://static-cdn.jtvnw.net/emoticons/v2/${i}/default/${theme}/3.0">`)
        }
    }

    return dump.join('')
}
