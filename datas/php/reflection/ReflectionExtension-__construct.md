# ReflectionExtension::__construct

Source: https://devdocs.io/php/reflectionextension.construct

(PHP 5, PHP 7, PHP 8)

ReflectionExtension::__construct — Constructs a ReflectionExtension

### Description

Construct a ReflectionExtension object.

### Parameters

Name of the extension.

### Errors/Exceptions

Throws ReflectionException if the extension to reflect does not exist.

### Examples

Example #1 ReflectionExtension example

```
<?php
$ext = new ReflectionExtension('Reflection');

printf('Extension: %s (version: %s)', $ext->getName(), $ext->getVersion());
?>
```

The above example will output something similar to:

```
Extension: Reflection (version: 8.3.17)
```

### See Also

- ReflectionExtension::info() - Print extension info
- Constructors

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionextension.construct.php
