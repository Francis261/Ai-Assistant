# ReflectionExtension::getName

Source: https://devdocs.io/php/reflectionextension.getname

(PHP 5, PHP 7, PHP 8)

ReflectionExtension::getName — Gets extension name

### Description

```
public ReflectionExtension::getName(): string
```

Gets the extensions name.

### Parameters

This function has no parameters.

### Return Values

The extensions name.

### Examples

Example #1 ReflectionExtension::getName() example

```
<?php
$ext = new ReflectionExtension('mysqli');
var_dump($ext->getName());
?>
```

The above example will output something similar to:

```
string(6) "mysqli"
```

### See Also

- ReflectionExtension::getClassNames() - Gets class names

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionextension.getname.php
