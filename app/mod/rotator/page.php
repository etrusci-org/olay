<script type="module">
    import { fyShuffle } from 'https://cdn.jsdelivr.net/gh/etrusci-org/nifty@main/javascript/fyShuffle.min.js';


    MODCONF.updateRate = Math.max(1, MODCONF.updateRate);
    var queue = [];


    update();
    let intervalID = setInterval(() => {
        update();
    }, MODCONF.updateRate);


    function update() {
        if (queue.length == 0) {
            queue = [...MODCONF.items.split('|')];
            if (MODCONF.shuffle) {
                queue = fyShuffle(queue);
            }
        }

        MODOUTPUT.innerHTML = queue.splice(0, 1);
    }
</script>
