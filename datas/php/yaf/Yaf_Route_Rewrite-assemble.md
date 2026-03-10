# Yaf_Route_Rewrite::assemble

Source: https://devdocs.io/php/yaf-route-rewrite.assemble

(Yaf >=2.3.0)

Yaf_Route_Rewrite::assemble — Assemble a url

### Description

```
public Yaf_Route_Rewrite::assemble(array $info, array $query = ?): string
```

Assemble a url.

### Parameters

### Return Values

Returns string.

### Examples

Example #1 Yaf_Route_Rewrite::assemble()example

```
router = new Yaf_Router();

$route  = new Yaf_Route_Rewrite(
                "/product/:name/:id/*",
                array(
                        'controller' => "product",
                ),
                array()
);

$router->addRoute("rewrite", $route);

var_dump($router->getRoute('rewrite')->assemble(
                        array(
                                ':name' => 'foo',
                                ':id' => 'bar',
                                ':tmpkey1' => 'tmpval1'
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
string(57) "/product/foo/bar/tmpkey1/tmpval1/?tkey1=tval1&tkey2=tval2"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-route-rewrite.assemble.php
