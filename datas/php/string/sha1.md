# sha1

Source: https://devdocs.io/php/function.sha1

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

sha1 — Calculate the sha1 hash of a string

It is not recommended to use this function to secure passwords, due to the fast nature of this hashing algorithm. See the Password Hashing FAQ for details and best practices.

### Description

```
sha1(string $string, bool $binary = false): string
```

Calculates the sha1 hash of string using the » US Secure Hash Algorithm 1.

### Parameters

The input string.

If the optional binary is set to true, then the sha1 digest is instead returned in raw binary format with a length of 20, otherwise the returned value is a 40-character hexadecimal number.

### Return Values

Returns the sha1 hash as a string.

### Examples

Example #1 A sha1() example

```
<?php
$str = 'apple';

if (sha1($str) === 'd0be2dc421be4fcd0172e5afceea3970e2f3d940') {
    echo "Would you like a green or red apple?";
}
?>
```

### See Also

- hash() - Generate a hash value (message digest)
- password_hash() - Creates a password hash

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sha1.php
