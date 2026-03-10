# ReflectionExtension::isPersistent

Source: https://devdocs.io/php/reflectionextension.ispersistent

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

ReflectionExtension::isPersistent — Returns whether this extension is persistent

### Description

```
public ReflectionExtension::isPersistent(): bool
```

Check whether the extension is persistent.

An extension is persistent when it is loaded using php.ini. An extension is temporary, not persistent, when it is loaded with dl().

### Parameters

This function has no parameters.

### Return Values

Returns true for extensions loaded by extension, false otherwise.

### See Also

- ReflectionExtension::isTemporary() - Returns whether this extension is temporary

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionextension.ispersistent.php
