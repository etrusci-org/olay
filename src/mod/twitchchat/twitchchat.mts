import { Olay } from '../../lib/olay.mjs'
import { striphtml } from '../../lib/striphtml.mjs'
import { humantime } from '../../lib/humantime.mjs'
import { injecttwitchemotes } from '../../lib/injecttwitchemotes.mjs'
import { beatsnow } from '../../lib/beatsnow.mjs'


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
        mod: document.querySelector('.mod') as HTMLElement,
    }

    valid_emotesthemes: string[] = ['light', 'dark']
    messages_counter: number = 0
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

        this.ui.mod.innerHTML = 'initializing chat client ...'

        // @ts-ignore: the tmi client is there, promise! (see src/mod/twitchchat/body.html)
        this.TwitchClient = new tmi.Client({
            channels: this.conf.channels,
            options: {}
        })

        this.ui.mod.innerHTML = `joining ${this.conf.channels.join(', ')} ...`

        setTimeout(async () => {
            await this.TwitchClient.connect().catch(console.error)

            this.TwitchClient.on('message', (channel: string, tags: {[key: string]: any}, message: string, self: boolean) => {
                this.on_message(channel, tags, message, self)
            })

            this.ui.mod.innerHTML = ''
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

        this.messages_counter += 1

        const user_color_css: string = (this.conf.usercolor && tags['color']) ? ` style="color: ${tags['color']};"` : ''
        const timestamp: string = (!this.conf.timeformat.includes('{beats}')) ? humantime(this.conf.timeformat) : beatsnow(2)
        // MAYBE: make it possible to have a custom format for beats too

        const chatline: HTMLElement = document.createElement('div')
        chatline.classList.add('chatline')
        chatline.dataset['id'] = tags['id'] || ''
        chatline.innerHTML = `
            <div class="counter">${this.messages_counter}</div>
            <div class="channel">${channel}</div>
            <div class="time">${timestamp}</div>
            <div class="user" ${user_color_css}>${tags['display-name']}</div>
            <div class="message">${message}</div>
        `

        this.ui.mod.append(chatline)

        const dump: NodeListOf<HTMLDivElement> = this.ui.mod.querySelectorAll('.chatline')

        if (dump.length > this.conf.limit) {
            if (!dump[0]) {
                return
            }

            this.ui.mod.removeChild(dump[0])
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









/* tags object

message = test :)
{
    "badge-info": {
        "subscriber": "28"
    },
    "badges": {
        "broadcaster": "1",
        "subscriber": "0"
    },
    "client-nonce": "cb2e83191e3ccf1a6c5397c8014a517c",
    "color": "#9ACD32",
    "display-name": "SPARTALIEN",
    "emotes": {
        "1": [
            "5-6"
        ]
    },
    "first-msg": false,
    "flags": null,
    "id": "c2ea8fc8-ee93-415e-9bb0-c4a963fdba10",
    "mod": false,
    "returning-chatter": false,
    "room-id": "540195916",
    "subscriber": true,
    "tmi-sent-ts": "1740575059873",
    "turbo": false,
    "user-id": "540195916",
    "user-type": null,
    "emotes-raw": "1:5-6",
    "badge-info-raw": "subscriber/28",
    "badges-raw": "broadcaster/1,subscriber/0",
    "username": "spartalien",
    "message-type": "chat"
}

---

message = :)
{
    "badge-info": {
        "subscriber": "28"
    },
    "badges": {
        "broadcaster": "1",
        "subscriber": "0"
    },
    "client-nonce": "c4a827db318e295422618c5f81655fcd",
    "color": "#9ACD32",
    "display-name": "SPARTALIEN",
    "emote-only": true,
    "emotes": {
        "1": [
            "0-1"
        ]
    },
    "first-msg": false,
    "flags": null,
    "id": "1205a800-a92c-4bf1-98db-09ac81a67d7e",
    "mod": false,
    "returning-chatter": false,
    "room-id": "540195916",
    "subscriber": true,
    "tmi-sent-ts": "1740575215663",
    "turbo": false,
    "user-id": "540195916",
    "user-type": null,
    "emotes-raw": "1:0-1",
    "badge-info-raw": "subscriber/28",
    "badges-raw": "broadcaster/1,subscriber/0",
    "username": "spartalien",
    "message-type": "chat"
}




*/
