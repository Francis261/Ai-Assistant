# Yaf_Application::bootstrap

Source: https://devdocs.io/php/yaf-application.bootstrap

(Yaf >=1.0.0)

Yaf_Application::bootstrap — Call bootstrap

### Description

```
public Yaf_Application::bootstrap(Yaf_Bootstrap_Abstract $bootstrap = ?): void
```

Run a Bootstrap, all the methods defined in the Bootstrap and named with prefix "_init" will be called according to their declaration order, if the parameter bootstrap is not supplied, Yaf will look for a Bootstrap under application.directory.

### Parameters

A Yaf_Bootstrap_Abstract instance

### Return Values

Yaf_Application instance

### Examples

Example #1 A Bootstrap example

```
<?php
/**
 * This file should be under the APPLICATION_PATH . "/application/"(which was defined in the config passed to Yaf_Application).
 * and named Bootstrap.php,  so the Yaf_Application can find it 
 */
class Bootstrap extends Yaf_Bootstrap_Abstract {
    function _initConfig(Yaf_Dispatcher $dispatcher) {
        echo "1st called\n";
    }

    function _initPlugin($dispatcher) {
        echo "2nd called\n";
    }
}
?>
```

Example #2 Yaf_Application::bootstrap()example

```
<?php

defined('APPLICATION_PATH') // APPLICATION_PATH will be used in the ini config file
    || define('APPLICATION_PATH', __DIR__);

$application = new Yaf_Application(APPLICATION_PATH.'/conf/application.ini');
$application->bootstrap();
?>
```

The above example will output something similar to:

```
1st called
2nd called
```

### See Also

- Yaf_Bootstrap_Abstract

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-application.bootstrap.php
