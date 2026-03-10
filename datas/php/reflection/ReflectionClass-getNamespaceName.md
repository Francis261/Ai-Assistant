# ReflectionClass::getNamespaceName

Source: https://devdocs.io/php/reflectionclass.getnamespacename

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

ReflectionClass::getNamespaceName — Gets namespace name

### Description

```
public ReflectionClass::getNamespaceName(): string
```

Gets the namespace name.

### Parameters

This function has no parameters.

### Return Values

The namespace name.

### Examples

Example #1 ReflectionClass::getNamespaceName() example

```
<?php
namespace A\B;

class Foo { }

$class = new \ReflectionClass('stdClass');

var_dump($class->inNamespace());
var_dump($class->getName());
var_dump($class->getNamespaceName());
var_dump($class->getShortName());

$class = new \ReflectionClass('A\\B\\Foo');

var_dump($class->inNamespace());
var_dump($class->getName());
var_dump($class->getNamespaceName());
var_dump($class->getShortName());
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

- ReflectionClass::getParentClass() - Gets parent class
- namespaces

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.getnamespacename.php
