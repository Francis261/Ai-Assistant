# Phar::apiVersion

Source: https://devdocs.io/php/phar.apiversion

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.0.0)

Phar::apiVersion — Returns the api version

### Description

```
final public static Phar::apiVersion(): string
```

Return the API version of the phar file format that will be used when creating phars. The Phar extension supports reading API version 1.0.0 or newer. API version 1.1.0 is required for SHA-256 and SHA-512 hash, and API version 1.1.1 is required to store empty directories.

### Parameters

### Return Values

The API version string as in "1.0.0".

### Examples

Example #1 A Phar::apiVersion() example

```
<?php
echo Phar::apiVersion();
?>
```

The above example will output:

```
1.1.1
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.apiversion.php
