<?php


class Olay {
    protected array $conf;
    protected string $mod;
    protected array $modConf;


    public function __construct(array $conf) {
        $this->conf = $conf;

        if (
            !isset($_GET['module']) ||
            empty(trim($_GET['module'])) ||
            !in_array($_GET['module'], array_keys($this->conf['module']))
        ) {
            print('[boo] none or invalid module selected - see <a href="https://github.com/etrusci-org/olay/blob/main/README.md">README</a>');
            exit(1);
        }

        $this->mod = $_GET['module'];

        foreach ($this->conf['module'][$this->mod] as $k => $v) {
            // set defaults
            if (!is_array($v)) {
                $this->modConf[$k] = $v;
            }
            else {
                $this->modConf[$k] = $v[0];
            }
            // overrides
            if (in_array($k, array_keys($_GET))) {
                if (ctype_digit($_GET[$k])) {
                    $this->modConf[$k] = (int) $_GET[$k];
                }
                else if ($_GET[$k] == 'true') {
                    $this->modConf[$k] = (bool) $_GET[$k];
                }
                else {
                    $this->modConf[$k] = $_GET[$k];
                }
            }
        }
    }


    public function renderModule(): void {
        include __DIR__.'/../tpl/header.php';
        include __DIR__.'/../tpl/content.php';
        include __DIR__.'/../mod/'.$this->mod.'.php';
        include __DIR__.'/../tpl/footer.php';
    }
}
