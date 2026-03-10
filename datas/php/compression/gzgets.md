# gzgets

Source: https://devdocs.io/php/function.gzgets

(PHP 4, PHP 5, PHP 7, PHP 8)

gzgets — Get line from file pointer

### Description

```
gzgets(resource $stream, ?int $length = null): string|false
```

Gets a (uncompressed) string of up to length - 1 bytes read from the given file pointer. Reading ends when length - 1 bytes have been read, on a newline, or on EOF (whichever comes first).

### Parameters

The gz-file pointer. It must be valid, and must point to a file successfully opened by gzopen().

The length of data to get.

### Return Values

The uncompressed string, or false on error.

### Changelog

### Examples

Example #1 gzgets() example

```
<?php
$handle = gzopen('somefile.gz', 'r');
while (!gzeof($handle)) {
   $buffer = gzgets($handle, 4096);
   echo $buffer;
}
gzclose($handle);
?>
```

### See Also

- gzopen() - Open gz-file
- gzgetc() - Get character from gz-file pointer
- gzwrite() - Binary-safe gz-file write

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gzgets.php
