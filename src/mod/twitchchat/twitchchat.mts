import { Olay } from '../../lib/olay.mjs'
import { striphtml } from '../../lib/striphtml.mjs'
import { humantime } from '../../lib/humantime.mjs'
import { injecttwitchemotes } from '../../lib/injecttwitchemotes.mjs'
import { beatsnow } from '../../lib/beatsnow.mjs'
import { mstodur } from '../../lib/mstodur.mjs'


export class Olay_TwitchChat extends Olay
{
    conf: Olay_TwitchChat_Conf = {
        channels: [],
        ignore: [],
        limit: 100,
        removeafter: 0,
        timeformat: '{hour}:{minute}:{second}',
        usercolor: false,
        emotes: false,
        emotestheme: 'light',
        emotessize: 'medium',
    }

    ui: Olay_TwitchChat_UI = {
        mod: document.querySelector('.mod') as HTMLDivElement,
        chat: document.querySelector('.mod .chat') as HTMLDivElement,
        stats: document.querySelector('.mod .stats') as HTMLDivElement,
        stats_messages: document.querySelector('.mod .stats .messages') as HTMLSpanElement,
        stats_chatters: document.querySelector('.mod .stats .chatters') as HTMLSpanElement,
        stats_duration: document.querySelector('.mod .stats .duration') as HTMLSpanElement,
    }

    valid_emotesthemes: string[] = ['light', 'dark']
    stats_messages: number = 0
    stats_chatters: number = 0
    // seen_chatters: string[] = []
    seen_chatters: {[key: string]: number} = {}
    tracking_stats_since: number = 0
    TwitchClient: any


    constructor()
    {
        super()

        for (let [k, v] of this.urlparams.entries()) {
            v = v.trim()

            switch (k) {
                case 'channels':
                    for (let channel of v.split('|')) {
                        channel = channel.trim()
                        if (channel) {
                            this.conf.channels.push(channel)
                        }
                    }
                    break

                case 'ignore':
                    for (let user of v.split('|')) {
                        user = user.trim()
                        if (user) {
                            this.conf.ignore.push(user)
                        }
                    }
                    break

                case 'limit':
                    this.conf.limit = Math.max(1, Number(v || this.conf.limit))
                    break

                case 'removeafter':
                    this.conf.removeafter = Math.max(0, Number(v || this.conf.removeafter))
                    break

                case 'timeformat':
                    this.conf.timeformat = v || this.conf.timeformat
                    break

                case 'usercolor':
                    this.conf.usercolor = (v === 'true') ? true : false
                    break

                case 'emotes':
                    this.conf.emotes = (v === 'true') ? true : false
                    break

                case 'emotestheme':
                    this.conf.emotestheme = (this.valid_emotesthemes.includes(v)) ? v : this.conf.emotestheme
                    break

                case 'emotessize':
                    this.conf.emotessize = v || this.conf.emotessize
                    break

                default:
                    console.warn(`skipping unknown parameter "${k}" with value "${v}"`)
            }
        }

        if (this.conf.channels.length == 0) {
            this.ui.mod.innerHTML = 'no channels selected'
            return
        }

        this.ui.chat.innerHTML = 'initializing chat client ...'

        // @ts-ignore: the tmi client is there, promise! (see src/mod/twitchchat/body.html)
        this.TwitchClient = new tmi.Client({
            channels: this.conf.channels,
            options: {}
        })

        this.ui.chat.innerHTML = `joining ${this.conf.channels.join(', ')} ...`
        this.ui.stats_messages.innerHTML = '0'
        this.ui.stats_chatters.innerHTML = '0'
        this.ui.stats_duration.innerHTML = '0'

        setTimeout(async () => {
            await this.TwitchClient.connect().catch(console.error)

            this.TwitchClient.on('message', (channel: string, tags: {[key: string]: any}, message: string, self: boolean) => {
                this.on_message(channel, tags, message, self)
            })

            this.ui.chat.innerHTML = ''

            this.tracking_stats_since = Date.now()

            setInterval(() => {
                this.ui.stats_duration.innerHTML = mstodur(Date.now() - this.tracking_stats_since)
            }, 500)
        }, 3_000)
    }

    on_message(channel: string, tags: {[key: string]: any}, message: string, self: boolean): void
    {
        if (self) {
            return
        }

        if (this.conf.ignore.includes(tags['username'])) {
            console.debug(`[ignore] ${tags['username']}: ${message}`)
            return
        }

        message = striphtml(message)

        if (!message) {
            return
        }

        if (this.conf.emotes) {
            message = injecttwitchemotes(message, tags['emotes'], this.conf.emotestheme, this.conf.emotessize)
        }

        this.stats_messages += 1
        this.seen_chatters[tags['display-name']] = (this.seen_chatters[tags['display-name']] || 0) + 1
        this.stats_chatters = Object.keys(this.seen_chatters).length
        console.debug(this.stats_chatters, this.seen_chatters)

        const user_color_css: string = (this.conf.usercolor && tags['color']) ? ` style="color: ${tags['color']};"` : ''
        const timestamp: string = (!this.conf.timeformat.includes('{beats}')) ? humantime(this.conf.timeformat) : beatsnow(2, this.conf.timeformat)

        const chatline: HTMLDivElement = document.createElement('div')
        chatline.classList.add('chatline')
        chatline.dataset['id'] = tags['id'] || ''
        chatline.innerHTML = `
            <span class="channel">${channel}</span>
            <span class="time">${timestamp}</span>
            <span class="user" ${user_color_css}>${tags['display-name']}</span>
            <span class="message">${message}</span>
        `

        this.ui.chat.append(chatline)

        this.ui.stats_messages.innerHTML = String(this.stats_messages)
        this.ui.stats_chatters.innerHTML = String(this.stats_chatters)
        this.ui.stats_duration.innerHTML = mstodur(Date.now() - this.tracking_stats_since)

        const dump: NodeListOf<HTMLDivElement> = this.ui.chat.querySelectorAll('.chatline')
        if (dump.length > this.conf.limit) {
            if (!dump[0]) {
                return
            }
            this.ui.chat.removeChild(dump[0])
        }

        if (this.conf.removeafter > 0) {
            setTimeout(() => {
                if (!chatline) {
                    return
                }
                chatline.remove()
            }, this.conf.removeafter * 1_000)
        }

        window.scrollTo(0, this.ui.mod.scrollHeight)
    }
}
