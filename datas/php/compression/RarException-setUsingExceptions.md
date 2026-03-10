# RarException::setUsingExceptions

Source: https://devdocs.io/php/rarexception.setusingexceptions

(PECL rar >= 2.0.0)

RarException::setUsingExceptions — Activate and deactivate error handling with exceptions

### Description

```
public static RarException::setUsingExceptions(bool $using_exceptions): void
```

If and only if the argument is true, then, instead of emitting warnings and returning a special value indicating error when the UnRAR library encounters an error, an exception of type RarException will be thrown.

Exceptions will also be thrown for the following errors, which occur outside the library (their error code will be -1):

- attempting some operations on a closed RarArchive object or a RarEntry object relative to the first;
- attempting to get an entry that does not exist with RarArchive::getEntry().

### Parameters

Should be true to activate exception throwing, false to deactivate (the default).

### Return Values

No value is returned.

### Examples

Example #1 RarException::setUsingExceptions() example

```
<?php
var_dump(RarException::isUsingExceptions());
$arch = RarArchive::open("does_not_exist.rar");
var_dump($arch);

RarException::setUsingExceptions(true);
var_dump(RarException::isUsingExceptions());
$arch = RarArchive::open("does_not_exist.rar");
var_dump($arch); //not reached
?>
```

The above example will output something similar to:

```
bool(false)

Warning: RarArchive::open(): Failed to open does_not_exist.rar: ERAR_EOPEN (file open error) in C:\php_rar\trunk\tests\test.php on line 3
bool(false)
bool(true)

Fatal error: Uncaught exception 'RarException' with message 'unRAR internal error: Failed to open does_not_exist.rar: ERAR_EOPEN (file open error)' in C:\php_rar\trunk\tests\test.php:8
Stack trace:
#0 C:\php_rar\trunk\tests\test.php(8): RarArchive::open('does_not_exist....')
#1 {main}
  thrown in C:\php_rar\trunk\tests\test.php on line 8
```

### See Also

- RarException::isUsingExceptions() - Check whether error handling with exceptions is in use

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/rarexception.setusingexceptions.php
