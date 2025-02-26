import { Olay } from '../../lib/olay.mjs';
import { striphtml } from '../../lib/striphtml.mjs';
export class Olay_TwitchChat extends Olay {
    conf = {
        channels: []
    };
    ui = {
        mod: document.querySelector('#mod'),
    };
    TwitchClient;
    constructor() {
        super();
        for (const [k, v] of this.urlparams.entries()) {
            switch (k) {
                case 'channels':
                    for (const channel of v.split('|')) {
                        const value = channel.trim();
                        if (value) {
                            this.conf.channels.push(value);
                        }
                    }
                    break;
                default:
                    console.warn(`skipping unknown parameter "${k}" with value "${v}"`);
            }
        }
        if (this.conf.channels.length == 0) {
            this.ui.mod.innerHTML = 'no channels selected';
            return;
        }
        // @ts-ignore: the tmi client is there, promise! (see src/mod/chat/body.html)
        this.TwitchClient = new tmi.Client({
            channels: this.conf.channels,
            options: {}
        });
        setTimeout(async () => {
            this.ui.mod.innerHTML = 'connecting ...';
            await this.TwitchClient.connect();
            this.TwitchClient.on('message', (channel, tags, message, self) => {
                this.on_message(channel, tags, message, self);
            });
            this.ui.mod.innerHTML = `connected to ${this.conf.channels}`;
            setTimeout(() => {
                this.ui.mod.innerHTML = '';
            }, 3_000);
        }, 3_000);
    }
    on_message(channel, tags, message, self) {
        if (self) {
            return;
        }
        message = striphtml(message);
        if (!message) {
            return;
        }
        console.log('--- incoming message ---');
        console.log('channel', channel);
        console.log('tags', tags);
        console.log('message', message);
        console.log('self', self);
        this.ui.mod.innerHTML += `<div>${tags['display-name']}: ${message}</div>`;
        const dump = this.ui.mod.querySelectorAll('div');
        if (dump.length > 100) {
            if (!dump[0])
                return;
            this.ui.mod.removeChild(dump[0]);
        }
        window.scrollTo(0, this.ui.mod.scrollHeight);
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
