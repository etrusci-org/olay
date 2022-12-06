<script type="module">
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
            cacheData = await getCacheData('channel');
            output = cacheData.title;
        }

        if (MODCONF.type == 'streamCategory') {
            cacheData = await getCacheData('channel');
            output = cacheData.game_name;
        }

        if (MODCONF.type == 'followerCount') {
            cacheData = await getCacheData('follower');
            output = cacheData.length;
        }

        if (MODCONF.type == 'subscriberCount') {
            cacheData = await getCacheData('subscriber');
            output = cacheData.length;
        }

        if (MODCONF.type == 'profileImage') {
            cacheData = await getCacheData('user');
            output = `<img src="${cacheData.profile_image_url}">`;
        }

        if (MODCONF.type == 'followerList') {
            cacheData = await getCacheData('follower');
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
            cacheData = await getCacheData('subscriber');
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
            cacheData = await getCacheData('bitsleader');
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


    async function getCacheData(handle) {
        return fetch(`${MODCONF.worker.cacheDir}/${handle}.json`).then((response) => response.json());
    }
</script>
