# Yaf_Route_Map::assemble

Source: https://devdocs.io/php/yaf-route-map.assemble

(Yaf >=2.3.0)

Yaf_Route_Map::assemble — Assemble a url

### Description

```
public Yaf_Route_Map::assemble(array $info, array $query = ?): string
```

Assemble a url.

### Parameters

### Return Values

Returns string on success or null on failure.

### Errors/Exceptions

May throw Yaf_Exception_TypeError.

### Examples

Example #1 Yaf_Route_Map::assemble()example

```
<?php

$router = new Yaf_Router();

$route  = new Yaf_Route_Map();

$router->addRoute("map", $route);

var_dump($router->getRoute('map')->assemble(
                        array(
                                ':c' => 'foo_bar'
                        ),
                        array(
                                'tkey1' => 'tval1',
                                'tkey2' => 'tval2'
                        )
                   )
);

$route = new Yaf_Route_Map(true, '_');
$router->addRoute("map", $route);

var_dump($router->getRoute('map')->assemble(
                        array(
                                ':a' => 'foo_bar'
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
string(%d) "/foo/bar?tkey1=tval1&tkey2=tval2"
string(%d) "/foo/bar/_/tkey1/tval1/tkey2/tval2"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-route-map.assemble.php
