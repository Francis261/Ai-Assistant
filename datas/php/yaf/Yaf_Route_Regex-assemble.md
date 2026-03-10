# Yaf_Route_Regex::assemble

Source: https://devdocs.io/php/yaf-route-regex.assemble

(Yaf >=2.3.0)

Yaf_Route_Regex::assemble — Assemble a url

### Description

```
public Yaf_Route_Regex::assemble(array $info, array $query = ?): ?string
```

Assemble a url.

### Parameters

### Return Values

Returns string on success or null on failure.

### Examples

Example #1 Yaf_Route_Regex::assemble()example

```
<?php

$router = new Yaf_Router();

$route  = new Yaf_Route_Regex(
            "#^/product/([^/]+)/([^/])+#",
            array(
                'controller' => "product",  //route to product controller,
                ),
            array(),
            array(),
            '/:m/:c/:a'
        );

$router->addRoute("regex", $route);

var_dump($router->getRoute('regex')->assemble(
            array(
                ':m' => 'module',
                ':c' => 'controller',
                ':a' => 'action'
                ),
            array(
                'tkey1' => 'tval1',
                'tkey2' =>
                'tval2'
                )
            )
        );
```

The above example will output something similar to:

```
string(49) "/module/controller/action?tkey1=tval1&tkey2=tval2"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-route-regex.assemble.php
