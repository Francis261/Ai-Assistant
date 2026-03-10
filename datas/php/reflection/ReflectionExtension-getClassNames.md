# ReflectionExtension::getClassNames

Source: https://devdocs.io/php/reflectionextension.getclassnames

(PHP 5, PHP 7, PHP 8)

ReflectionExtension::getClassNames — Gets class names

### Description

```
public ReflectionExtension::getClassNames(): array
```

Gets a listing of class names as defined in the extension.

### Parameters

This function has no parameters.

### Return Values

An array of class names, as defined in the extension. If no classes are defined, an empty array is returned.

### Examples

Example #1 ReflectionExtension::getClassNames() example

```
<?php
$ext = new ReflectionExtension('XMLWriter');
var_dump($ext->getClassNames());
?>
```

The above example will output something similar to:

```
array(1) {
  [0]=>
  string(9) "XMLWriter"
}
```

### See Also

- ReflectionExtension::getClasses() - Gets classes
- ReflectionExtension::getName() - Gets extension name

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionextension.getclassnames.php
