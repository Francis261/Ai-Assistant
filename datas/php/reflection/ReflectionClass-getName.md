# ReflectionClass::getName

Source: https://devdocs.io/php/reflectionclass.getname

(PHP 5, PHP 7, PHP 8)

ReflectionClass::getName — Gets class name

### Description

```
public ReflectionClass::getName(): string
```

Gets the class name.

### Parameters

This function has no parameters.

### Return Values

The class name.

### Examples

Example #1 ReflectionClass::getName() example

```
<?php
namespace A\B;

class Foo { }

$function = new \ReflectionClass('stdClass');

var_dump($function->inNamespace());
var_dump($function->getName());
var_dump($function->getNamespaceName());
var_dump($function->getShortName());

$function = new \ReflectionClass('A\\B\\Foo');

var_dump($function->inNamespace());
var_dump($function->getName());
var_dump($function->getNamespaceName());
var_dump($function->getShortName());
?>
```

The above example will output:

```
bool(false)
string(8) "stdClass"
string(0) ""
string(8) "stdClass"

bool(true)
string(7) "A\B\Foo"
string(3) "A\B"
string(3) "Foo"
```

### See Also

- ReflectionClass::getNamespaceName() - Gets namespace name

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.getname.php
