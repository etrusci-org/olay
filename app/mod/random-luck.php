<script type="module">
    import { isLucky } from 'https://cdn.jsdelivr.net/gh/etrusci-org/nifty@main/javascript/isLucky.min.js';

    const modConf = <?php print(json_encode($this->modConf)); ?>;
    const outputElement = document.querySelector('.output');

    function update() {
        outputElement.innerHTML = `${(!isLucky(0.5)) ? 'L=0' : 'L=1'}`;
        console.log('update on', Date.now());
    }

    update();

    setInterval(() => {
        update();
    }, modConf.updateEvery);
</script>
