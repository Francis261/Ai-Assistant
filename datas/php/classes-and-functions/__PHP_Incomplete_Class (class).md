# The __PHP_Incomplete_Class class

Source: https://devdocs.io/php/class.php-incomplete-class

## Introduction

(PHP 4 >=4.0.1, PHP 5, PHP 7, PHP 8)

Created by unserialize() when trying to unserialize an undefined class or a class that is not listed in the allowed_classes of unserialize()'s options array.

Prior to PHP 7.2.0, using is_object() on the __PHP_Incomplete_Class class would return false. As of PHP 7.2.0, true will be returned.

## Class synopsis

This class has no default properties or methods. When created by unserialize(), in addition to all unserialized properties and values the object will have a __PHP_Incomplete_Class_Name property which will contain the name of the unserialized class.

## Changelog

## Examples

Example #1 Created by unserialize()

```
<?php

class MyClass
{
    public string $property = "myValue";
}

$myObject = new MyClass;

$foo = serialize($myObject);

// unserializes all objects into __PHP_Incomplete_Class objects
$disallowed = unserialize($foo, ["allowed_classes" => false]);

var_dump($disallowed);

// unserializes all objects into __PHP_Incomplete_Class objects except those of MyClass2 and MyClass3
$disallowed2 = unserialize($foo, ["allowed_classes" => ["MyClass2", "MyClass3"]]);

var_dump($disallowed2);

// unserializes undefined class into __PHP_Incomplete_Class object
$undefinedClass = unserialize('O:16:"MyUndefinedClass":0:{}');

var_dump($undefinedClass);
```

The above example will output:

```

object(__PHP_Incomplete_Class)#2 (2) {
  ["__PHP_Incomplete_Class_Name"]=>
  string(7) "MyClass"
  ["property"]=>
  string(7) "myValue"
}
object(__PHP_Incomplete_Class)#3 (2) {
  ["__PHP_Incomplete_Class_Name"]=>
  string(7) "MyClass"
  ["property"]=>
  string(7) "myValue"
}
object(__PHP_Incomplete_Class)#4 (1) {
  ["__PHP_Incomplete_Class_Name"]=>
  string(16) "MyUndefinedClass"
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.php-incomplete-class.php
