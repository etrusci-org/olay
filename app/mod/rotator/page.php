<script type="module">
    import { fyShuffle } from 'https://cdn.jsdelivr.net/gh/etrusci-org/nifty@main/javascript/fyShuffle.min.js';
    import { fetchJSON } from './lib/fetchJSON.js';


    MODCONF.updateRate = Math.max(1, MODCONF.updateRate);
    let queue = [];


    update();
    let intervalID = setInterval(() => {
        update();
    }, MODCONF.updateRate);


    async function update() {
        if (queue.length == 0) {
            if (!MODCONF.itemsFromFile) {
                queue = [...MODCONF.items.split('|')];
            }
            else {
                queue = await fetchJSON(MODCONF.itemsFile);
            }

            if (MODCONF.shuffle) {
                queue = fyShuffle(queue);
            }
        }

        let item = queue.splice(0, 1)[0];

        if (!MODCONF.itemsFromFile) {
            MODOUTPUT.innerHTML = item;
        }
        else {
            MODOUTPUT.innerHTML = `
            <div class="img"><img src="${item.img}" alt="rotator item image"></div>
            <div class="txt">${item.txt}</div>`;
        }
    }
</script>
