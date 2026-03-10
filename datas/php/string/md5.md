# md5

Source: https://devdocs.io/php/function.md5

(PHP 4, PHP 5, PHP 7, PHP 8)

md5 — Calculate the md5 hash of a string

It is not recommended to use this function to secure passwords, due to the fast nature of this hashing algorithm. See the Password Hashing FAQ for details and best practices.

### Description

```
md5(string $string, bool $binary = false): string
```

Calculates the MD5 hash of string using the » RSA Data Security, Inc. MD5 Message-Digest Algorithm, and returns that hash.

### Parameters

The string.

If the optional binary is set to true, then the md5 digest is instead returned in raw binary format with a length of 16.

### Return Values

Returns the hash as a 32-character hexadecimal number.

### Examples

Example #1 A md5() example

```
<?php
$str = 'apple';

if (md5($str) === '1f3870be274f6c49b3e31a0c6728957f') {
    echo "Would you like a green or red apple?";
}
?>
```

### See Also

- hash() - Generate a hash value (message digest)
- password_hash() - Creates a password hash

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.md5.php
