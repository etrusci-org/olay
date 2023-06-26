<script type="module">
    import { fetchJSON } from './lib/fetchJSON.js';


    MODCONF.updateRate = Math.max(60000, MODCONF.updateRate);


    update();


    let intervalID = setInterval(() => {
        update();
    }, MODCONF.updateRate);


    async function update() {
        let apiMethod = null
        let apiURL = null
        let apiData = null

        if (MODCONF.type == 'stats') {
            apiMethod = 'user.getInfo';
            apiURL = `http://ws.audioscrobbler.com/2.0/?format=json&method=${apiMethod}&user=${MODCONF.apiUser}&api_key=${MODCONF.apiKey}`;
            apiData = await fetchJSON(apiURL);

            if (apiData.error || !apiData.user) {
                console.error('error while fetching api data:', apiData);
                return;
            }

            MODOUTPUT.innerHTML = `
            Plays: ${apiData.user.playcount}<br>
            Artists: ${apiData.user.artist_count}<br>
            Tracks: ${apiData.user.track_count}<br>
            Albums: ${apiData.user.album_count}`;
        }

        if (MODCONF.type == 'recent') {
            apiMethod = 'user.getRecentTracks';
            apiURL = `http://ws.audioscrobbler.com/2.0/?format=json&method=${apiMethod}&api_key=${MODCONF.apiKey}&user=${MODCONF.apiUser}&limit=${MODCONF.apiLimit}`;
            apiData = await fetchJSON(apiURL);

            if (apiData.error || !apiData.recenttracks) {
                console.error('error while fetching api data:', apiData);
                return;
            }

            MODOUTPUT.innerHTML = ``;
            apiData.recenttracks.track.forEach(v => {
                MODOUTPUT.innerHTML += `${v.artist['#text']} - ${v.name}<br>`;
            });
        }
    }
</script>
