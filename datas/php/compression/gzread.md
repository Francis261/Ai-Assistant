# gzread

Source: https://devdocs.io/php/function.gzread

(PHP 4, PHP 5, PHP 7, PHP 8)

gzread — Binary-safe gz-file read

### Description

```
gzread(resource $stream, int $length): string|false
```

gzread() reads up to length bytes from the given gz-file pointer. Reading stops when length (uncompressed) bytes have been read or EOF is reached, whichever comes first.

### Parameters

The gz-file pointer. It must be valid, and must point to a file successfully opened by gzopen().

The number of bytes to read.

### Return Values

The data that have been read, or false on failure.

### Changelog

### Examples

Example #1 gzread() example

```
<?php
// get contents of a gz-file into a string
$filename = "/usr/local/something.txt.gz";
$zd = gzopen($filename, "r");
$contents = gzread($zd, 10000);
gzclose($zd);
?>
```

### See Also

- gzwrite() - Binary-safe gz-file write
- gzopen() - Open gz-file
- gzgets() - Get line from file pointer
- gzgetss() - Get line from gz-file pointer and strip HTML tags
- gzfile() - Read entire gz-file into an array
- gzpassthru() - Output all remaining data on a gz-file pointer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gzread.php
