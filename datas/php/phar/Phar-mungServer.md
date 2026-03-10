# Phar::mungServer

Source: https://devdocs.io/php/phar.mungserver

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

Phar::mungServer — Defines a list of up to 4 $_SERVER variables that should be modified for execution

### Description

```
final public static Phar::mungServer(array $variables): void
```

Phar::mungServer() should only be called within the stub of a phar archive.

Defines a list of up to 4 $_SERVER variables that should be modified for execution. Variables that can be modified to remove traces of phar execution are REQUEST_URI, PHP_SELF, SCRIPT_NAME and SCRIPT_FILENAME.

On its own, this method does nothing. Only when combined with Phar::webPhar() does it take effect, and only when the requested file is a PHP file to be parsed. Note that the PATH_INFO and PATH_TRANSLATED variables are always modified.

The original values of variables that are modified are stored in the SERVER array with PHAR_ prepended, so for instance SCRIPT_NAME would be saved as PHAR_SCRIPT_NAME.

### Parameters

An array of any of the strings REQUEST_URI, PHP_SELF, SCRIPT_NAME and SCRIPT_FILENAME. Other values trigger an exception, and Phar::mungServer() is case-sensitive.

### Return Values

No return.

### Errors/Exceptions

Throws UnexpectedValueException if any problems are found with the passed in data.

### Examples

Example #1 A Phar::mungServer() example

```
<?php
// example stub
Phar::mungServer(array('REQUEST_URI'));
Phar::webPhar();
__HALT_COMPILER();
?>
```

### See Also

- Phar::webPhar() - Routes a request from a web browser to an internal file within the phar archive
- Phar::setStub() - Used to set the PHP loader or bootstrap stub of a Phar archive

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.mungserver.php
