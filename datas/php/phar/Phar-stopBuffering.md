# Phar::stopBuffering

Source: https://devdocs.io/php/phar.stopbuffering

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.0.0)

Phar::stopBuffering — Stop buffering write requests to the Phar archive, and save changes to disk

### Description

```
public Phar::stopBuffering(): void
```

Phar::stopBuffering() is used in conjunction with the Phar::startBuffering() method. Phar::startBuffering() can provide a significant performance boost when creating or modifying a Phar archive with a large number of files. Ordinarily, every time a file within a Phar archive is created or modified in any way, the entire Phar archive will be recreated with the changes. In this way, the archive will be up-to-date with the activity performed on it.

However, this can be unnecessary when simply creating a new Phar archive, when it would make more sense to write the entire archive out at once. Similarly, it is often necessary to make a series of changes and to ensure that they all are possible before making any changes on disk, similar to the relational database concept of transactions. The Phar::startBuffering()/Phar::stopBuffering() pair of methods is provided for this purpose.

Phar write buffering is per-archive, buffering active for the foo.phar Phar archive does not affect changes to the bar.phar Phar archive.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Errors/Exceptions

PharException is thrown if any problems are encountered flushing changes to disk.

### Examples

Example #1 A Phar::stopBuffering() example

```
<?php
$p = new Phar(dirname(__FILE__) . '/brandnewphar.phar', 0, 'brandnewphar.phar');
$p['file1.txt'] = 'hi';
$p->startBuffering();
var_dump($p->getStub());
$p->setStub("<?php
function __autoload(\$class)
{
    include 'phar://brandnewphar.phar/' . str_replace('_', '/', \$class) . '.php';
}
Phar::mapPhar('brandnewphar.phar');
include 'phar://brandnewphar.phar/startup.php';
__HALT_COMPILER();");
$p->stopBuffering();
var_dump($p->getStub());
?>
```

The above example will output:

```
string(24) "<?php __HALT_COMPILER();"
string(195) "<?php
function __autoload($class)
{
    include 'phar://' . str_replace('_', '/', $class);
}
Phar::mapPhar('brandnewphar.phar');
include 'phar://brandnewphar.phar/startup.php';
__HALT_COMPILER();"
```

### See Also

- Phar::startBuffering() - Start buffering Phar write operations, do not modify the Phar object on disk
- Phar::isBuffering() - Used to determine whether Phar write operations are being buffered, or are flushing directly to disk

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.stopbuffering.php
