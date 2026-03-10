# Phar::running

Source: https://devdocs.io/php/phar.running

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL phar >= 2.0.0)

Phar::running — Returns the full path on disk or full phar URL to the currently executing Phar archive

### Description

```
final public static Phar::running(bool $returnPhar = true): string
```

Returns the full path to the running phar archive. This is intended for use much like the __FILE__ magic constant, and only has effect inside an executing phar archive.

Inside the stub of an archive, Phar::running() returns "". Simply use __FILE__ to access the current running phar inside a stub.

### Parameters

If false, the full path on disk to the phar archive is returned. If true, a full phar URL is returned.

### Return Values

Returns the filename if valid, empty string otherwise.

### Examples

Example #1 A Phar::running() example

For the following example, assume the phar archive is located at /path/to/phar/my.phar.

```
<?php
$a = Phar::running(); // $a is "phar:///path/to/my.phar"
$b = Phar::running(false); // $b is "/path/to/my.phar"
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/phar.running.php
