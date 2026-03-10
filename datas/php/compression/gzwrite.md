# gzwrite

Source: https://devdocs.io/php/function.gzwrite

(PHP 4, PHP 5, PHP 7, PHP 8)

gzwrite — Binary-safe gz-file write

### Description

```
gzwrite(resource $stream, string $data, ?int $length = null): int|false
```

gzwrite() writes the contents of data to the given gz-file.

### Parameters

The gz-file pointer. It must be valid, and must point to a file successfully opened by gzopen().

The string to write.

The number of uncompressed bytes to write. If supplied, writing will stop after length (uncompressed) bytes have been written or the end of data is reached, whichever comes first.

### Return Values

Returns the number of (uncompressed) bytes written to the given gz-file stream, or false on failure.

### Changelog

### Examples

Example #1 gzwrite() example

```
<?php
$string = 'Some information to compress';
$gz = gzopen('somefile.gz','w9');
gzwrite($gz, $string);
gzclose($gz);
?>
```

### See Also

- gzread() - Binary-safe gz-file read
- gzopen() - Open gz-file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.gzwrite.php
