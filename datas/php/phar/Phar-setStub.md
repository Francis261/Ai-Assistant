# Phar::setStub

Source: https://devdocs.io/php/phar.setstub

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.0.0)

Phar::setStub — Used to set the PHP loader or bootstrap stub of a Phar archive

### Description

```
public Phar::setStub(resource|string $stub, int $length = -1): bool
```

Note:

This method requires the php.ini setting phar.readonly to be set to 0 in order to work for Phar objects. Otherwise, a PharException will be thrown.

This method is used to add a PHP bootstrap loader stub to a new Phar archive, or to replace the loader stub in an existing Phar archive.

The loader stub for a Phar archive is used whenever an archive is included directly as in this example:

```
<?php
include 'myphar.phar';
?>
```

The loader is not accessed when including a file through the phar stream wrapper like so:

```
<?php
include 'phar://myphar.phar/somefile.php';
?>
```

### Parameters

A string or an open stream handle to use as the executable stub for this phar archive.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

UnexpectedValueException is thrown if phar.readonly is enabled in php.ini. PharException is thrown if any problems are encountered flushing changes to disk.

### Changelog

### Examples

Example #1 A Phar::setStub() example

```
<?php
try {
    $p = new Phar(dirname(__FILE__) . '/brandnewphar.phar', 0, 'brandnewphar.phar');
    $p['a.php'] = '<?php var_dump("Hello");';
    $p->setStub('<?php var_dump("First"); Phar::mapPhar("brandnewphar.phar"); __HALT_COMPILER(); ?>');
    include 'phar://brandnewphar.phar/a.php';
    var_dump($p->getStub());
    $p['b.php'] = '<?php var_dump("World");';
    $p->setStub('<?php var_dump("Second"); Phar::mapPhar("brandnewphar.phar"); __HALT_COMPILER(); ?>');
    include 'phar://brandnewphar.phar/b.php';
    var_dump($p->getStub());
} catch (Exception $e) {
    echo 'Write operations failed on brandnewphar.phar: ', $e;
}
?>
```

The above example will output:

```
string(5) "Hello"
string(82) "<?php var_dump("First"); Phar::mapPhar("brandnewphar.phar"); __HALT_COMPILER(); ?>"
string(5) "World"
string(83) "<?php var_dump("Second"); Phar::mapPhar("brandnewphar.phar"); __HALT_COMPILER(); ?>"
```

### See Also

- Phar::getStub() - Return the PHP loader or bootstrap stub of a Phar archive
- Phar::createDefaultStub() - Create a phar-file format specific stub

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.setstub.php
