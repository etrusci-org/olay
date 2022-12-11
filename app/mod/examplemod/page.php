<script type="module">
    // do stuff on init...

    // ...make sure updateRate is > 0
    MODCONF.updateRate = Math.max(1, MODCONF.updateRate);

    // ...or censor for fun
    if (MODCONF.message == 'badword') {
        MODCONF.message = 'censored';
    }

    // initial update on page load
    update();

    // continuous update
    // you can stop this with clearInterval(intervalID)
    let intervalID = setInterval(() => {
        update();
    }, MODCONF.updateRate);

    // the update function
    function update() {
        MODOUTPUT.innerHTML = `${MODCONF.message} | updateRate=${MODCONF.updateRate} | random number of the moment: ${Math.random()}`;
    }
</script>
