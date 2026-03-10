# Phar::unlinkArchive

Source: https://devdocs.io/php/phar.unlinkarchive

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

Phar::unlinkArchive — Completely remove a phar archive from disk and from memory

### Description

```
final public static Phar::unlinkArchive(string $filename): true
```

Removes a phar archive from disk and memory.

### Parameters

The path on disk to the phar archive.

### Return Values

Always returns true.

### Errors/Exceptions

PharException is thrown if there are any open file pointers to the phar archive, or any existing Phar, PharData, or PharFileInfo objects referring to the phar archive.

### Examples

Example #1 A Phar::unlinkArchive() example

```
<?php
// simple usage
Phar::unlinkArchive('/path/to/my.phar');

// more common example:
$p = new Phar('my.phar');
$fp = fopen('phar://my.phar/file.txt', 'r');
// this creates 'my.phar.gz'
$gp = $p->compress(Phar::GZ);
// remove all references to the archive
unset($p);
fclose($fp);
// now remove all traces of the archive
Phar::unlinkArchive('my.phar');
?>
```

### See Also

- Phar::delete() - Delete a file within a phar archive
- Phar::offsetUnset() - Remove a file from a phar

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.unlinkarchive.php
