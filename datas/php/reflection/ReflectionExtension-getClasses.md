# ReflectionExtension::getClasses

Source: https://devdocs.io/php/reflectionextension.getclasses

(PHP 5, PHP 7, PHP 8)

ReflectionExtension::getClasses — Gets classes

### Description

```
public ReflectionExtension::getClasses(): array
```

Gets a list of classes from an extension.

### Parameters

This function has no parameters.

### Return Values

An array of ReflectionClass objects, one for each class within the extension. If no classes are defined, an empty array is returned.

### Examples

Example #1 ReflectionExtension::getClasses() example

```
<?php
$ext = new ReflectionExtension('XMLWriter');
var_dump($ext->getClasses());
?>
```

The above example will output something similar to:

```
array(1) {
  ["XMLWriter"]=>
  object(ReflectionClass)#2 (1) {
    ["name"]=>
    string(9) "XMLWriter"
  }
}
```

### See Also

- ReflectionExtension::getClassNames() - Gets class names

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionextension.getclasses.php
