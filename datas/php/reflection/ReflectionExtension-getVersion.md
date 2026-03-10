# ReflectionExtension::getVersion

Source: https://devdocs.io/php/reflectionextension.getversion

(PHP 5, PHP 7, PHP 8)

ReflectionExtension::getVersion — Gets extension version

### Description

```
public ReflectionExtension::getVersion(): ?string
```

Gets the version of the extension.

### Parameters

This function has no parameters.

### Return Values

The version of the extension, or null if the extension has no version.

### Examples

Example #1 ReflectionExtension::getVersion() example

```
<?php
$ext = new ReflectionExtension('mysqli');
var_dump($ext->getVersion());
?>
```

The above example will output something similar to:

```
string(3) "0.1"
```

### See Also

- ReflectionExtension::info() - Print extension info

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionextension.getversion.php
