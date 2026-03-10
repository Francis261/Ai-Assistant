# Yaf_Route_Supervar::assemble

Source: https://devdocs.io/php/yaf-route-supervar.assemble

(Yaf >=2.3.0)

Yaf_Route_Supervar::assemble — Assemble a url

### Description

```
public Yaf_Route_Supervar::assemble(array $info, array $query = ?): string
```

Assemble a url.

### Parameters

### Return Values

Returns a string.

### Errors/Exceptions

Throws Yaf_Exception_TypeError if info keys ':c' and ':a' are not set.

### Examples

Example #1 Yaf_Route_Supervar::assemble() example

```
<?php

$router = new Yaf_Router();

$route  = new Yaf_Route_Supervar('r');

$router->addRoute("supervar", $route);

var_dump($router->getRoute('supervar')->assemble(
        array(
              ':a' => 'yafaction',
              'tkey' => 'tval',
              ':c' => 'yafcontroller',
              ':m' => 'yafmodule'
        ),
        array(
              'tkey1' => 'tval1',
              'tkey2' => 'tval2'
        )
));

try {
var_dump($router->getRoute('supervar')->assemble(
        array(
              ':a' => 'yafaction',
              'tkey' => 'tval',
              ':m' => 'yafmodule'
        ),
        array(
              'tkey1' => 'tval1',
              'tkey2' => 'tval2',
              1 => array(),
        )
));
} catch (Exception $e) {
    var_dump($e->getMessage());
}
```

The above example will output something similar to:

```
string(%d) "?r=/yafmodule/yafcontroller/yafaction&tkey1=tval1&tkey2=tval2"
string(%d) "You need to specify the controller by ':c'"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-route-supervar.assemble.php
