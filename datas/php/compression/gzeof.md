# gzeof

Source: https://devdocs.io/php/function.gzeof

(PHP 4, PHP 5, PHP 7, PHP 8)

gzeof — Test for EOF on a gz-file pointer

### Description

```
gzeof(resource $stream): bool
```

Tests the given GZ file pointer for EOF.

### Parameters

The gz-file pointer. It must be valid, and must point to a file successfully opened by gzopen().

### Return Values

Returns true if the gz-file pointer is at EOF or an error occurs; otherwise returns false.

### Examples

Example #1 gzeof() example

```
<?php
$gz = gzopen('somefile.gz', 'r');
while (!gzeof($gz)) {
  echo gzgetc($gz);
}
gzclose($gz);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gzeof.php
