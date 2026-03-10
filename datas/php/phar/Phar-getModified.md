# Phar::getModified

Source: https://devdocs.io/php/phar.getmodified

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.0.0)

Phar::getModified — Return whether phar was modified

### Description

```
public Phar::getModified(): bool
```

This method can be used to determine whether a phar has either had an internal file deleted, or contents of a file changed in some way.

### Parameters

No parameters.

### Return Values

true if the phar has been modified since opened, false if not.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.getmodified.php
