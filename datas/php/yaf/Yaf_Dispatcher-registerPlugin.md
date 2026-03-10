# Yaf_Dispatcher::registerPlugin

Source: https://devdocs.io/php/yaf-dispatcher.registerplugin

(Yaf >=1.0.0)

Yaf_Dispatcher::registerPlugin — Register a plugin

### Description

```
public Yaf_Dispatcher::registerPlugin(Yaf_Plugin_Abstract $plugin): Yaf_Dispatcher
```

Register a plugin(see Yaf_Plugin_Abstract). Generally, we register plugins in Bootstrap(see Yaf_Bootstrap_Abstract).

### Parameters

### Return Values

### Examples

Example #1 Yaf_Dispatcher::registerPlugin() example

```
<?php
class Bootstrap extends Yaf_Bootstrap_Abstract {
  public function _initPlugin(Yaf_Dispatcher $dispatcher) {
    /**
    * Yaf assumes plugin scripts under [application.directory] .  "/plugins" 
    * for this case, it will be:
    * [application.directory] . "/plugins/" . "User" . [application.ext]
    */ 
    $user = new UserPlugin();
    $dispatcher->registerPlugin($user);
  }
}
?>
```

### See Also

- Yaf_Plugin_Abstract

- Yaf_Bootstrap_Abstract

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-dispatcher.registerplugin.php
