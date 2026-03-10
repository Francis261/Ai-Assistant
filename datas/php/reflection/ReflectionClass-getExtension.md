# ReflectionClass::getExtension

Source: https://devdocs.io/php/reflectionclass.getextension

(PHP 5, PHP 7, PHP 8)

ReflectionClass::getExtension — Gets a ReflectionExtension object for the extension which defined the class

### Description

```
public ReflectionClass::getExtension(): ?ReflectionExtension
```

Gets a ReflectionExtension object for the extension which defined the class.

### Parameters

This function has no parameters.

### Return Values

A ReflectionExtension object representing the extension which defined the class, or null for user-defined classes.

### Examples

Example #1 Basic usage of ReflectionClass::getExtension()

```
<?php
$class = new ReflectionClass('ReflectionClass');
$extension = $class->getExtension();
var_dump($extension);
?>
```

The above example will output:

```
object(ReflectionExtension)#2 (1) {
  ["name"]=>
  string(10) "Reflection"
}
```

### See Also

- ReflectionClass::getExtensionName() - Gets the name of the extension which defined the class

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.getextension.php
