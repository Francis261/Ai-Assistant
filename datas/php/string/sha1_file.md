# sha1_file

Source: https://devdocs.io/php/function.sha1-file

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

sha1_file — Calculate the sha1 hash of a file

### Description

```
sha1_file(string $filename, bool $binary = false): string|false
```

Calculates the sha1 hash of the file specified by filename using the » US Secure Hash Algorithm 1, and returns that hash. The hash is a 40-character hexadecimal number.

### Parameters

The filename of the file to hash.

When true, returns the digest in raw binary format with a length of 20.

### Return Values

Returns a string on success, false otherwise.

### Examples

Example #1 sha1_file() example

```
<?php
foreach (glob('/examples/*.xml') as $ent)
{
    if (is_dir($ent)) {
        continue;
    }

    echo $ent . ' (SHA1: ' . sha1_file($ent) . ')', PHP_EOL;
}
?>
```

### See Also

- hash_file() - Generate a hash value using the contents of a given file
- hash_init() - Initialize an incremental hashing context
- sha1() - Calculate the sha1 hash of a string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sha1-file.php
