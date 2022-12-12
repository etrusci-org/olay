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
            MODCONF.type == 'bitsleader'
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

        if (MODCONF.type == 'followerCount') {
            cacheData = await fetchJSON('./mod/twitch/cache/follower.json');
            output = cacheData.length;
        }

        if (MODCONF.type == 'subscriberCount') {
            cacheData = await fetchJSON('./mod/twitch/cache/subscriber.json');
            output = cacheData.length;
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

        if (MODCONF.type == 'bitsleader') {
            cacheData = await fetchJSON('./mod/twitch/cache/bitsleader.json');
            let users = [];
            cacheData.forEach(v => {
                users.push(`${v.rank}. (${v.score}) ${v.user_name}`);
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

        if (output) {
            MODOUTPUT.innerHTML = output;
        }
    }
</script>
