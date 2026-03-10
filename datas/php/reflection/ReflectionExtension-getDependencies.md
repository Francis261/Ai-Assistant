# ReflectionExtension::getDependencies

Source: https://devdocs.io/php/reflectionextension.getdependencies

(PHP 5 >= 5.1.3, PHP 7, PHP 8)

ReflectionExtension::getDependencies — Gets dependencies

### Description

```
public ReflectionExtension::getDependencies(): array
```

Gets dependencies, by listing both required and conflicting dependencies.

### Parameters

This function has no parameters.

### Return Values

An associative array with dependencies as keys and either Required, Optional or Conflicts as the values.

### Examples

Example #1 ReflectionExtension::getDependencies() example

```
<?php
$dom = new ReflectionExtension('dom');

print_r($dom->getDependencies());
?>
```

The above example will output something similar to:

```
Array
(
    [libxml] => Required
    [domxml] => Conflicts
)
```

### See Also

- ReflectionClass::getVersion()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionextension.getdependencies.php
