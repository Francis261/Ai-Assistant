# Phar::getVersion

Source: https://devdocs.io/php/phar.getversion

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.0.0)

Phar::getVersion — Return version info of Phar archive

### Description

```
public Phar::getVersion(): string
```

Returns the API version of an opened Phar archive.

### Parameters

### Return Values

The opened archive's API version. This is not to be confused with the API version that the loaded phar extension will use to create new phars. Each Phar archive has the API version hard-coded into its manifest. See Phar file format documentation for more information.

### See Also

- Phar::apiVersion() - Returns the api version

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.getversion.php
