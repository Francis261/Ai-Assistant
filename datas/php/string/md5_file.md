# md5_file

Source: https://devdocs.io/php/function.md5-file

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

md5_file — Calculates the md5 hash of a given file

### Description

```
md5_file(string $filename, bool $binary = false): string|false
```

Calculates the MD5 hash of the file specified by the filename parameter using the » RSA Data Security, Inc. MD5 Message-Digest Algorithm, and returns that hash. The hash is a 32-character hexadecimal number.

### Parameters

The filename

When true, returns the digest in raw binary format with a length of 16.

### Return Values

Returns a string on success, false otherwise.

### Examples

Example #1 Usage example of md5_file()

```
<?php
$file = '/examples/book.xml';

echo 'MD5 file hash of ' . $file . ': ' . md5_file($file);
?>
```

### See Also

- hash_file() - Generate a hash value using the contents of a given file
- hash_init() - Initialize an incremental hashing context
- md5() - Calculate the md5 hash of a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.md5-file.php
