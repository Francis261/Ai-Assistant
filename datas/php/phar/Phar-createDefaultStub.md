# Phar::createDefaultStub

Source: https://devdocs.io/php/phar.createdefaultstub

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

Phar::createDefaultStub — Create a phar-file format specific stub

### Description

```
final public static Phar::createDefaultStub(?string $index = null, ?string $webIndex = null): string
```

This method is intended for creation of phar-file format-specific stubs, and is not intended for use with tar- or zip-based phar archives.

Phar archives contain a bootstrap loader, or stub written in PHP that is executed when the archive is executed in PHP either via include:

```
<?php
include 'myphar.phar';
?>
```

```
php myphar.phar
```

This method provides a simple and easy method to create a stub that will run a startup file from the phar archive. In addition, different files can be specified for running the phar archive from the command line versus through a web server. The loader stub also calls Phar::interceptFileFuncs() to allow easy bundling of a PHP application that accesses the file system. If the phar extension is not present, the loader stub will extract the phar archive to a temporary directory and then operate on the files. A shutdown function erases the temporary files on exit.

### Parameters

Relative path within the phar archive to run if accessed on the command-line

Relative path within the phar archive to run if accessed through a web browser

### Return Values

Returns a string containing the contents of a customized bootstrap loader (stub) that allows the created Phar archive to work with or without the Phar extension enabled.

### Errors/Exceptions

Throws UnexpectedValueException if either parameter is longer than 400 bytes.

### Changelog

### Examples

Example #1 A Phar::createDefaultStub() example

```
<?php
try {
    $phar = new Phar('myphar.phar');
    $phar->setStub($phar->createDefaultStub('cli.php', 'web/index.php'));
} catch (Exception $e) {
    // handle errors
}
?>
```

### See Also

- Phar::setStub() - Used to set the PHP loader or bootstrap stub of a Phar archive
- Phar::getStub() - Return the PHP loader or bootstrap stub of a Phar archive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.createdefaultstub.php
