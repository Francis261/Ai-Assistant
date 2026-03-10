# ReflectionClass::getConstant

Source: https://devdocs.io/php/reflectionclass.getconstant

(PHP 5, PHP 7, PHP 8)

ReflectionClass::getConstant — Gets defined constant

### Description

```
public ReflectionClass::getConstant(string $name): mixed
```

Gets the defined constant.

### Parameters

The name of the class constant to get.

### Return Values

Value of the constant with the name name. Returns false if the constant was not found in the class.

### Examples

Example #1 Usage of ReflectionClass::getConstant()

```
<?php

class Example {
    const C1 = false;
    const C2 = 'I am a constant';
}

$reflection = new ReflectionClass('Example');

var_dump($reflection->getConstant('C1'));
var_dump($reflection->getConstant('C2'));
var_dump($reflection->getConstant('C3'));
?>
```

The above example will output:

```
bool(false)
string(15) "I am a constant"
bool(false)
```

### See Also

- ReflectionClass::getConstants() - Gets constants

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.getconstant.php
