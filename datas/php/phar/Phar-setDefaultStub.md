# Phar::setDefaultStub

Source: https://devdocs.io/php/phar.setdefaultstub

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

Phar::setDefaultStub — Used to set the PHP loader or bootstrap stub of a Phar archive to the default loader

### Description

```
public Phar::setDefaultStub(?string $index = null, ?string $webIndex = null): true
```

Note:

This method requires the php.ini setting phar.readonly to be set to 0 in order to work for Phar objects. Otherwise, a PharException will be thrown.

This method is a convenience method that combines the functionality of Phar::createDefaultStub() and Phar::setStub().

### Parameters

Relative path within the phar archive to run if accessed on the command-line

Relative path within the phar archive to run if accessed through a web browser

### Return Values

Always returns true.

### Errors/Exceptions

UnexpectedValueException is thrown if phar.readonly is enabled in php.ini. PharException is thrown if any problems are encountered flushing changes to disk.

### Changelog

### Examples

Example #1 A Phar::setDefaultStub() example

```
<?php
try {
    $phar = new Phar('myphar.phar');
    $phar->setDefaultStub('cli.php', 'web/index.php');
    // this is the same as:
    // $phar->setStub($phar->createDefaultStub('cli.php', 'web/index.php'));
} catch (Exception $e) {
    // handle errors
}
?>
```

### See Also

- Phar::setStub() - Used to set the PHP loader or bootstrap stub of a Phar archive
- Phar::createDefaultStub() - Create a phar-file format specific stub

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.setdefaultstub.php
