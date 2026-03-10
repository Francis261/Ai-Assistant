# Yaf_Dispatcher::throwException

Source: https://devdocs.io/php/yaf-dispatcher.throwexception

(Yaf >=1.0.0)

Yaf_Dispatcher::throwException — Switch on/off exception throwing

### Description

```
public Yaf_Dispatcher::throwException(bool $flag = ?): Yaf_Dispatcher
```

Switch on/off exception throwing while unexpected error occurring. When this is on, Yaf will throwing exceptions instead of triggering catchable errors.

You can also use application.dispatcher.throwException to achieve the same purpose.

### Parameters

bool

### Return Values

### Examples

Example #1 Yaf_Dispatcher::throwexception() example

```
<?php

$config = array(
    'application' => array(
        'directory' => dirname(__FILE__),
    ),
);
$app = new Yaf_Application($config);

$app->getDispatcher()->throwException(true);

try {
    $app->run();
} catch (Yaf_Exception $e) {
    var_dump($e->getMessage());
}
?>
```

The above example will output something similar to:

```
string(59) "Could not find controller script /tmp/controllers/Index.php"
```

Example #2 Yaf_Dispatcher::throwexception()example

```
<?php

$config = array(
    'application' => array(
        'directory' => dirname(__FILE__),
    ),
);
$app = new Yaf_Application($config);

$app->getDispatcher()->throwException(false);

$app->run();
?>
```

The above example will output something similar to:

```
PHP Catchable fatal error:  Yaf_Application::run(): Could not find controller script /tmp/controllers/Index.php in /tmp/1.php on line 12
```

### See Also

- Yaf_Dispatcher::catchException() - Switch on/off exception catching
- Yaf_Exception

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-dispatcher.throwexception.php
