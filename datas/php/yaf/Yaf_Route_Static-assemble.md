# Yaf_Route_Static::assemble

Source: https://devdocs.io/php/yaf-route-static.assemble

(Yaf >=2.3.0)

Yaf_Route_Static::assemble — Assemble a url

### Description

```
public Yaf_Route_Static::assemble(array $info, array $query = ?): string
```

Assemble a url.

### Parameters

### Return Values

Returns a string.

### Errors/Exceptions

Throws Yaf_Exception_TypeError if info keys ':c' and ':a' are not set.

### Examples

Example #1 Yaf_Route_Static::assemble()example

```
<?php

$router = new Yaf_Router();

$route  = new Yaf_Route_Static();

$router->addRoute("static", $route);

var_dump($router->getRoute('static')->assemble(
            array(
                ':a' => 'yafaction',
                'tkey' => 'tval',
                ':c' => 'yafcontroller',
                ':m' => 'yafmodule'
            ),
        )
);

var_dump($router->getRoute('static')->assemble(
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
        )
);
```

The above example will output something similar to:

```
string(%d) "/yafmodule/yafcontroller/yafaction"
string(%d) "/yafmodule/yafcontroller/yafaction?tkey1=tval1&tkey2=tval2"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-route-static.assemble.php
