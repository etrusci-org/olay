<?php var_dump($this->modConf); ?>

<script type="module">
    import { getRandomInteger } from 'https://cdn.jsdelivr.net/gh/etrusci-org/nifty@main/javascript/getRandomInteger.min.js';
    import { isPrime } from 'https://cdn.jsdelivr.net/gh/etrusci-org/nifty@main/javascript/isPrime.min.js';
    import { padNum } from 'https://cdn.jsdelivr.net/gh/etrusci-org/nifty@main/javascript/padNum.min.js';

    const modConf = <?php print(json_encode($this->modConf)); ?>;
    const outputElement = document.querySelector('.output');

    function update() {
        let n = getRandomInteger(modConf.rangeStart, modConf.rangeEnd);

        let ns = `${n}`;
        if (modConf.pad) {
            ns = padNum(n, `${modConf.rangeEnd}`.length, '0');
        }

        if (modConf.format == 'simple') {
            outputElement.innerHTML = ns;
        }

        if (modConf.format == 'label') {
            let p = isPrime(n);
            outputElement.innerHTML = (p) ? `${ns}=P` : `${ns}=N`;
        }
    }

    update();

    setInterval(() => {
        update();
    }, modConf.updateEvery);
</script>
