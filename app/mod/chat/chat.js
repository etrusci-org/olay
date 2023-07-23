export class Mod extends ModBase
{
    channels = []
    ignore = []
    client = null


    onInit()
    {
        this.outputElement.innerHTML = 'loading chat...'

        for (const item of this.conf.channels.split('|')) {
            const value = item.trim()
            if (value) {
                this.channels.push(value)
            }
        }

        for (const item of this.conf.ignore.split('|')) {
            const value = item.trim()
            if (value) {
                this.ignore.push(value)
            }
        }

        this.client = new tmi.Client({
            channels: this.channels,
            options: {
                joinInterval: parseInt(this.conf.joininterval),
            }
        })

        this.client.connect()

        this.client.on('message', (channel, tags, message, self) => {
            this.onMessage(channel, tags, message, self)
        })

        this.outputElement.innerHTML = ''
    }


    onMessage(channel, tags, message, self)
    {
        if (self) {
            return
        }

        if (this.ignore.includes(tags['username'])) {
            return
        }

        message = removeHTMLTags(message)

        if (!message) {
            return
        }

        message = injectTwitchEmotes(tags['emotes'], this.conf.emotetheme, message)

        let timestamp = humanTimestamp(this.conf.timestampformat)

        if (this.conf.repnum == 'true') {
            timestamp = replaceNumsWithChars(timestamp, this.conf.repmap)
        }

        let user = tags['display-name']

        const messageHTML = `
            <div class="chatline id-${tags['id']}${(tags['first-msg']) ? ' first' : ''}">
                <span class="timestamp">${timestamp}</span>
                <span class="channel">${channel}</span>
                <span class="user"${(this.conf.usercolor && tags['color']) ? ` style="color:${tags['color']};"` : ''}>${user}</span>
                <span class="message">${message}</span>
            </div>
        `

        this.outputElement.innerHTML = (this.conf.addto == 'top') ? messageHTML + this.outputElement.innerHTML : this.outputElement.innerHTML + messageHTML

        const limit = Math.max(1, parseInt(this.conf.limit))
        const dump = this.outputElement.querySelectorAll('.chatline')
        if (dump.length > limit) {
            this.outputElement.removeChild((this.conf.addto == 'top') ? dump[dump.length - 1] : dump[0])
        }

        if (this.conf.removeafter != 'never') {
            setTimeout(() => {
                const dump = this.outputElement.querySelector(`.chatline.id-${tags['id']}`)
                if (dump) {
                    this.outputElement.removeChild(dump)
                }
            }, this.conf.removeafter);
        }

        if (this.conf.autoscroll == 'true') {
            window.scrollTo(0, (this.conf.addto == 'top') ? 0 : this.outputElement.scrollHeight)
        }
    }
}
