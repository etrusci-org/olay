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

        if (this.conf.emotes == 'true') {
            message = injectTwitchEmotes(message, tags['emotes'], this.conf.emotetheme, this.conf.emotesize)
        }

        let timestamp = humanTimestamp(this.conf.timestampformat)

        if (this.conf.repnum == 'true') {
            timestamp = replaceNumsWithChars(timestamp, this.conf.repmap)
        }

        let badges = ''

        if (this.conf.badgebroadcaster != 'none' && tags['username'] == channel.substring(1)) {
            badges = `<span class="broadcaster">${this.conf.badgebroadcaster}</span>`
        }
        else {
            if (this.conf.badgemoderator != 'none' && tags['user-type'] == 'mod') {
                badges = `<span class="moderator">${this.conf.badgemoderator}</span>`
            }

            if (tags['badges']) {
                if (this.conf.badgevip != 'none' && Object.keys(tags['badges']).includes('vip')) {
                    badges += `<span class="vip">${this.conf.badgevip}</span>`
                }

                if (this.conf.badgesubscriber != 'none' && Object.keys(tags['badges']).includes('subscriber')) {
                    badges += `<span class="subscriber">${this.conf.badgesubscriber}</span>`
                }

                if (this.conf.badgesubgifter != 'none' && Object.keys(tags['badges']).includes('sub-gifter')) {
                    badges += `<span class="subgifter">${this.conf.badgesubgifter}</span>`
                }

                if (this.conf.badgebits != 'none' && Object.keys(tags['badges']).includes('bits')) {
                    badges += `<span class="bits">${this.conf.badgebits}</span>`
                }
            }
        }

        let user = tags['display-name']

        const messageHTML = `
            <div class="chatline ${channel.substring(1)} id-${tags['id']}${(tags['first-msg']) ? ' first' : ''}">
                <span class="timestamp">${timestamp}</span>
                <span class="channel">${channel}</span>
                <span class="badges">${badges}</span>
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
