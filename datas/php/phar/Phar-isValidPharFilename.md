# Phar::isValidPharFilename

Source: https://devdocs.io/php/phar.isvalidpharfilename

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.2.0)

Phar::isValidPharFilename — Returns whether the given filename is a valid phar filename

### Description

```
final public static Phar::isValidPharFilename(string $filename, bool $executable = true): bool
```

Returns whether the given filename is a valid phar filename that will be recognized as a phar archive by the phar extension. This can be used to test a name without having to instantiate a phar archive and catch the inevitable Exception that will be thrown if an invalid name is specified.

### Parameters

The name or full path to a phar archive not yet created

This parameter determines whether the filename should be treated as a phar executable archive, or a data non-executable archive

### Return Values

Returns true if the filename is valid, false if not.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.isvalidpharfilename.php
