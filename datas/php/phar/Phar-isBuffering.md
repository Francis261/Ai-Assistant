# Phar::isBuffering

Source: https://devdocs.io/php/phar.isbuffering

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 1.0.0)

Phar::isBuffering — Used to determine whether Phar write operations are being buffered, or are flushing directly to disk

### Description

```
public Phar::isBuffering(): bool
```

This method can be used to determine whether a Phar will save changes to disk immediately, or whether a call to Phar::stopBuffering() is needed to enable saving changes.

Phar write buffering is per-archive, buffering active for the foo.phar Phar archive does not affect changes to the bar.phar Phar archive.

### Parameters

This function has no parameters.

### Return Values

Returns true if the write operations are being buffer, false otherwise.

### Examples

Example #1 A Phar::isBuffering() example

```
<?php
$p = new Phar(dirname(__FILE__) . '/brandnewphar.phar', 0, 'brandnewphar.phar');
$p2 = new Phar('existingphar.phar');
$p['file1.txt'] = 'hi';
var_dump($p->isBuffering());
var_dump($p2->isBuffering());
?>
=2=
<?php
$p->startBuffering();
var_dump($p->isBuffering());
var_dump($p2->isBuffering());
$p->stopBuffering();
?>
=3=
<?php
var_dump($p->isBuffering());
var_dump($p2->isBuffering());
?>
```

The above example will output:

```
bool(false)
bool(false)
=2=
bool(true)
bool(false)
=3=
bool(false)
bool(false)
```

### See Also

- Phar::startBuffering() - Start buffering Phar write operations, do not modify the Phar object on disk
- Phar::stopBuffering() - Stop buffering write requests to the Phar archive, and save changes to disk

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.isbuffering.php
