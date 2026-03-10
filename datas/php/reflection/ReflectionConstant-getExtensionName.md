# ReflectionConstant::getExtensionName

Source: https://devdocs.io/php/reflectionconstant.getextensionname

(PHP 8 >= 8.5.0)

ReflectionConstant::getExtensionName — Gets name of the defining extension

### Description

```
public ReflectionConstant::getExtensionName(): string|false
```

Gets the name of the extension which defined the constant.

### Parameters

This function has no parameters.

### Return Values

The name of the extension which defined the constant, or false for user-defined constants.

### Examples

Example #1 Basic usage of ReflectionConstant::getExtensionName()

```
<?php
var_dump((new ReflectionConstant('SQLITE3_TEXT'))->getExtensionName());
?>
```

The above example will output:

```
string(7) "sqlite3"
```

### See Also

- ReflectionConstant::getExtension() - Gets ReflectionExtension of the defining extension

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionconstant.getextensionname.php
