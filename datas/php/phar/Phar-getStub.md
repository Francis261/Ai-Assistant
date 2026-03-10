# Phar::getStub

Source: https://devdocs.io/php/phar.getstub

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.0.0)

Phar::getStub — Return the PHP loader or bootstrap stub of a Phar archive

### Description

```
public Phar::getStub(): string
```

Phar archives contain a bootstrap loader, or stub written in PHP that is executed when the archive is executed in PHP either via include:

```
<?php
include 'myphar.phar';
?>
```

```
php myphar.phar
```

### Parameters

This function has no parameters.

### Return Values

Returns a string containing the contents of the bootstrap loader (stub) of the current Phar archive.

### Errors/Exceptions

Throws RuntimeException if it is not possible to read the stub from the Phar archive.

### Examples

Example #1 A Phar::getStub() example

```
<?php
$p = new Phar('/path/to/my.phar', 0, 'my.phar');
echo $p->getStub();
echo "==NEXT==\n";
$p->setStub("<?php
function __autoload($class)
{
    include 'phar://' . str_replace('_', '/', $class);
}
Phar::mapPhar('myphar.phar');
include 'phar://myphar.phar/startup.php';
__HALT_COMPILER(); ?>");
echo $p->getStub();
?>
```

The above example will output:

```
<?php __HALT_COMPILER(); ?>
==NEXT==
<?php
function __autoload($class)
{
    include 'phar://' . str_replace('_', '/', $class);
}
Phar::mapPhar('myphar.phar');
include 'phar://myphar.phar/startup.php';
__HALT_COMPILER(); ?>
```

### See Also

- Phar::setStub() - Used to set the PHP loader or bootstrap stub of a Phar archive
- Phar::createDefaultStub() - Create a phar-file format specific stub

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.getstub.php
