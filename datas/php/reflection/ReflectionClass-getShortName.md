# ReflectionClass::getShortName

Source: https://devdocs.io/php/reflectionclass.getshortname

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

ReflectionClass::getShortName — Gets short name

### Description

```
public ReflectionClass::getShortName(): string
```

Gets the short name of the class, the part without the namespace.

### Parameters

This function has no parameters.

### Return Values

The class short name.

### Examples

Example #1 ReflectionClass::getShortName() example

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

- ReflectionClass::getName() - Gets class name

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.getshortname.php
