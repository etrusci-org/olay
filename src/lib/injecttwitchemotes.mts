export function injecttwitchemotes(message: string, emotes: {[key: string]: any} = {}, theme: string = 'light', size: string = 'large'): string
{
    if (!emotes) {
        return message
    }

    switch (size) {
        case 'large':
            size = '3.0'
            break

        case 'medium':
            size = '2.0'
            break

        case 'small':
            size = '1.0'
            break
    }

    let output = message.split('')

    for (const id in emotes) {
        for (const key in emotes[id]) {
            let pos = emotes[id][key]
            pos = pos.split('-')
            pos = [parseInt(pos[0]), parseInt(pos[1])]
            let length = pos[1] - pos[0]
            let empty = Array.apply(null, new Array(length + 1)).map(function() { return '' })
            output = output.slice(0, pos[0]).concat(empty).concat(output.slice(pos[1] + 1, output.length))
            output.splice(pos[0], 1, `<img class="emote" src="https://static-cdn.jtvnw.net/emoticons/v2/${id}/default/${theme}/${size}">`)
        }
    }

    return output.join('')
}
