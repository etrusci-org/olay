<script type="module">
    var queue = [];


    update();
    let intervalID = setInterval(() => {
        update();
    }, MODCONF.updateRate);


    function update() {
        if (queue.length == 0) {
            queue = [...MODCONF.items.split('|')];
            if (MODCONF.shuffle) {
                fys(queue);
            }
        }

        MODOUTPUT.innerHTML = queue.splice(0, 1);
    }
</script>
