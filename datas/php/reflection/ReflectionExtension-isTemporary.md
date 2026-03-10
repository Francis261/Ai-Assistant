# ReflectionExtension::isTemporary

Source: https://devdocs.io/php/reflectionextension.istemporary

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

ReflectionExtension::isTemporary — Returns whether this extension is temporary

### Description

```
public ReflectionExtension::isTemporary(): bool
```

Check whether the extension is temporary.

An extension is temporary when it is loaded with dl().

### Parameters

This function has no parameters.

### Return Values

Returns true for extensions loaded by dl(), false otherwise.

### See Also

- ReflectionExtension::isPersistent() - Returns whether this extension is persistent

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionextension.istemporary.php
