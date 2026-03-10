# ReflectionClass::getExtensionName

Source: https://devdocs.io/php/reflectionclass.getextensionname

(PHP 5, PHP 7, PHP 8)

ReflectionClass::getExtensionName — Gets the name of the extension which defined the class

### Description

```
public ReflectionClass::getExtensionName(): string|false
```

Gets the name of the extension which defined the class.

### Parameters

This function has no parameters.

### Return Values

The name of the extension which defined the class, or false for user-defined classes.

### Examples

Example #1 Basic usage of ReflectionClass::getExtensionName()

```
<?php
$class = new ReflectionClass('ReflectionClass');
$extension = $class->getExtensionName();
var_dump($extension);
?>
```

The above example will output:

```
string(10) "Reflection"
```

### See Also

- ReflectionClass::getExtension() - Gets a ReflectionExtension object for the extension which defined the class

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.getextensionname.php
