<script type="module">
    import { fetchJSON } from './lib/fetchJSON.js';


    MODCONF.updateRate = Math.max(1, MODCONF.updateRate);
    let queue = [];


    update();

    if (
        MODCONF.rotator &&
        (
            MODCONF.type == 'followerList' ||
            MODCONF.type == 'subscriberList' ||
            MODCONF.type == 'bitleader' ||
            MODCONF.type == 'chatterList' ||
            MODCONF.type == 'bannedList' ||
            MODCONF.type == 'emoteList'
        )
    ) {
        MODOUTPUT.innerHTML = `${MODCONF.type} rotator loading...`;
        setInterval(() => {
            if (queue.length <= 1) {
                update();
            }
            MODOUTPUT.innerHTML = queue.splice(0, 1);
        }, MODCONF.rotatorSpeed);
    }
    else {
        let intervalID = setInterval(() => {
            update();
        }, MODCONF.updateRate);
    }


    async function update() {
        let cacheData = null;
        let output = null;

        if (MODCONF.type == 'streamTitle') {
            cacheData = await fetchJSON(`./mod/twitch/cache/channel.json`);
            output = cacheData.title;
        }

        if (MODCONF.type == 'streamCategory') {
            cacheData = await fetchJSON('./mod/twitch/cache/channel.json');
            output = cacheData.game_name;
        }

        if (MODCONF.type == 'streamTagList') {
            cacheData = await fetchJSON('./mod/twitch/cache/channel.json');
            output = cacheData.tags.join(MODCONF.sep)
        }

        if (MODCONF.type == 'streamViewerCount') {
            cacheData = await fetchJSON('./mod/twitch/cache/stream.json');
            if (!cacheData.started_at) {
                output = `0`
            }
            else {
                output = `${cacheData.viewer_count}`
            }
        }

        if (MODCONF.type == 'followerCount') {
            cacheData = await fetchJSON('./mod/twitch/cache/follower.json');
            output = `${cacheData.length}`;
        }

        if (MODCONF.type == 'subscriberCount') {
            cacheData = await fetchJSON('./mod/twitch/cache/subscriber.json');
            output = `${cacheData.length}`;
        }

        if (MODCONF.type == 'profileImage') {
            cacheData = await fetchJSON('./mod/twitch/cache/user.json');
            output = `<img src="${cacheData.profile_image_url}">`;
        }

        if (MODCONF.type == 'followerList') {
            cacheData = await fetchJSON('./mod/twitch/cache/follower.json');
            let users = [];
            cacheData.forEach(v => {
                users.push(v.from_name);
            });
            if (!MODCONF.rotator) {
                users = users.join(MODCONF.sep);
                output = users;
            }
            else {
                if (queue.length == 0) {
                    queue = [...users];
                }
            }
        }

        if (MODCONF.type == 'subscriberList') {
            cacheData = await fetchJSON('./mod/twitch/cache/subscriber.json');
            let users = [];
            cacheData.forEach(v => {
                users.push(v.user_name);
            });
            if (!MODCONF.rotator) {
                users = users.join(MODCONF.sep);
                output = users;
            }
            else {
                if (queue.length == 0) {
                    queue = [...users];
                }
            }
        }

        if (MODCONF.type == 'bitleader') {
            cacheData = await fetchJSON('./mod/twitch/cache/bitleader.json');
            let users = [];
            cacheData.forEach(v => {
                let t = MODCONF.format;
                t = t.replace('{rank}', v.rank);
                t = t.replace('{score}', v.score);
                t = t.replace('{user}', v.user_name);
                users.push(t);
            });
            if (!MODCONF.rotator) {
                users = users.join(MODCONF.sep);
                output = users;
            }
            else {
                if (queue.length == 0) {
                    queue = [...users];
                }
            }
        }

        if (MODCONF.type == 'chatterCount') {
            cacheData = await fetchJSON('./mod/twitch/cache/chatter.json');
            output = `${cacheData.length}`;
        }

        if (MODCONF.type == 'chatterList') {
            cacheData = await fetchJSON('./mod/twitch/cache/chatter.json');
            let users = [];
            cacheData.forEach(v => {
                users.push(v.user_name);
            });
            if (!MODCONF.rotator) {
                users = users.join(MODCONF.sep);
                output = users;
            }
            else {
                if (queue.length == 0) {
                    queue = [...users];
                }
            }
        }

        if (MODCONF.type == 'bannedCount') {
            cacheData = await fetchJSON('./mod/twitch/cache/banned.json');
            output = `${cacheData.length}`;
        }

        if (MODCONF.type == 'bannedList') {
            cacheData = await fetchJSON('./mod/twitch/cache/banned.json');
            let users = [];
            cacheData.forEach(v => {
                users.push(v.user_login);
            });
            if (!MODCONF.rotator) {
                users = users.join(MODCONF.sep);
                output = users;
            }
            else {
                if (queue.length == 0) {
                    queue = [...users];
                }
            }
        }

        if (MODCONF.type == 'goal') {
            cacheData = await fetchJSON('./mod/twitch/cache/goal.json');
            output = `${cacheData.current_amount}${MODCONF.sep}${cacheData.target_amount}`;
        }

        if (MODCONF.type == 'emoteList') {
            cacheData = await fetchJSON('./mod/twitch/cache/emote.json');
            let emotes = [];
            cacheData.forEach(v => {
                emotes.push(`
                    <div class="emote">
                        <div class="img"><img src="${v.image_url}"></div>
                        <div class="name">${v.name}</div>
                    </div>`);
            });
            if (!MODCONF.rotator) {
                emotes = emotes.join('');
                output = emotes;
            }
            else {
                if (queue.length == 0) {
                    queue = [...emotes];
                }
            }
        }

        if (output) {
            MODOUTPUT.innerHTML = output;
        }
    }
</script>
