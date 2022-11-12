<?php
class Olay {
    protected array $conf;
    protected string $mod;
    protected array $modConf;
    protected string $modConfJSON;


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

            // url query param overrides
            if (in_array($k, array_keys($_GET))) {
                // numbers
                if (is_numeric($_GET[$k])) {
                    // TODO: assign correct types, e.g. float AND int - works for now ;)
                    $this->modConf[$k] = (float) $_GET[$k];
                }
                // booleans
                else if ($_GET[$k] == 'true') {
                    $this->modConf[$k] = (bool) $_GET[$k];
                }
                // simple key:value pairs
                else {
                    $this->modConf[$k] = $_GET[$k];
                }
            }
        }

        $this->modConfJSON = json_encode($this->modConf, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT | JSON_THROW_ON_ERROR);
    }


    public function renderModule(): void {
        include __DIR__.'/../tpl/header.php';
        include __DIR__.'/../tpl/content.php';
        include __DIR__.'/../mod/'.$this->mod.'.php';
        include __DIR__.'/../tpl/footer.php';
    }
}
