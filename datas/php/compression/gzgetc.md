# gzgetc

Source: https://devdocs.io/php/function.gzgetc

(PHP 4, PHP 5, PHP 7, PHP 8)

gzgetc — Get character from gz-file pointer

### Description

```
gzgetc(resource $stream): string|false
```

Returns a string containing a single (uncompressed) character read from the given gz-file pointer.

### Parameters

The gz-file pointer. It must be valid, and must point to a file successfully opened by gzopen().

### Return Values

The uncompressed character or false on EOF (unlike gzeof()).

### Examples

Example #1 gzgetc() example

```
<?php
$gz = gzopen('somefile.gz', 'r');
while (!gzeof($gz)) {
  echo gzgetc($gz);
}
gzclose($gz);
?>
```

### See Also

- gzopen() - Open gz-file
- gzgets() - Get line from file pointer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gzgetc.php
