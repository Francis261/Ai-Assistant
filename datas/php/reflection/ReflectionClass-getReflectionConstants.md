# ReflectionClass::getReflectionConstants

Source: https://devdocs.io/php/reflectionclass.getreflectionconstants

(PHP 7 >= 7.1.0, PHP 8)

ReflectionClass::getReflectionConstants — Gets class constants

### Description

```
public ReflectionClass::getReflectionConstants(?int $filter = null): array
```

Retrieves reflected constants.

### Parameters

The optional filter, for filtering desired constant visibilities. It's configured using the ReflectionClassConstant constants, and defaults to all constant visibilities.

### Return Values

An array of ReflectionClassConstant objects.

### Changelog

### Examples

Example #1 Basic ReflectionClass::getReflectionConstants() example

```
<?php
class Foo {
    public    const FOO  = 1;
    protected const BAR  = 2;
    private   const BAZ  = 3;
}

$foo = new Foo();

$reflect = new ReflectionClass($foo);
$consts  = $reflect->getReflectionConstants();

foreach ($consts as $const) {
    print $const->getName() . "\n";
}

var_dump($consts);

?>
```

The above example will output something similar to:

```
FOO
BAR
BAZ
array(3) {
  [0]=>
  object(ReflectionClassConstant)#3 (2) {
    ["name"]=>
    string(3) "FOO"
    ["class"]=>
    string(3) "Foo"
  }
  [1]=>
  object(ReflectionClassConstant)#4 (2) {
    ["name"]=>
    string(3) "BAR"
    ["class"]=>
    string(3) "Foo"
  }
  [2]=>
  object(ReflectionClassConstant)#5 (2) {
    ["name"]=>
    string(3) "BAZ"
    ["class"]=>
    string(3) "Foo"
  }
}
```

### See Also

- ReflectionClass::getReflectionConstant() - Gets a ReflectionClassConstant for a class's constant
- ReflectionClassConstant

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.getreflectionconstants.php
