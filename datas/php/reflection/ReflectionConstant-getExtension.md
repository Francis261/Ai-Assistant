# ReflectionConstant::getExtension

Source: https://devdocs.io/php/reflectionconstant.getextension

(PHP 8 >= 8.5.0)

ReflectionConstant::getExtension — Gets ReflectionExtension of the defining extension

### Description

```
public ReflectionConstant::getExtension(): ?ReflectionExtension
```

Gets a ReflectionExtension object for the extension which defined the constant.

### Parameters

This function has no parameters.

### Return Values

A ReflectionExtension object representing the extension which defined the constant, or null for user-defined constants.

### Examples

Example #1 Basic usage of ReflectionConstant::getExtension()

```
<?php
var_dump((new ReflectionConstant('SQLITE3_TEXT'))->getExtension());
?>
```

The above example will output:

```
object(ReflectionExtension)#2 (1) {
  ["name"]=>
  string(7) "sqlite3"
}
```

### See Also

- ReflectionConstant::getExtensionName() - Gets name of the defining extension

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionconstant.getextension.php
