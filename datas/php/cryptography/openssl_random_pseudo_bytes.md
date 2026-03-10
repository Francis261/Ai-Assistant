# openssl_random_pseudo_bytes

Source: https://devdocs.io/php/function.openssl-random-pseudo-bytes

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

openssl_random_pseudo_bytes — Generate a pseudo-random string of bytes

### Description

```
openssl_random_pseudo_bytes(int $length, bool &$strong_result = null): string
```

Generates a string of pseudo-random bytes, with the number of bytes determined by the length parameter.

It also indicates if a cryptographically strong algorithm was used to produce the pseudo-random bytes, and does this via the optional strong_result parameter. It's rare for this to be false, but some systems may be broken or old.

### Parameters

The length of the desired string of bytes. Must be a positive integer less than or equal to 2147483647. PHP will try to cast this parameter to a non-null integer to use it.

If passed into the function, this will hold a bool value that determines if the algorithm used was "cryptographically strong", e.g., safe for usage with GPG, passwords, etc. true if it did, otherwise false

### Return Values

Returns the generated string of bytes.

### Errors/Exceptions

openssl_random_pseudo_bytes() throws an Exception on failure.

### Changelog

### Examples

Example #1 openssl_random_pseudo_bytes() example

```
<?php
for ($i = 1; $i <= 4; $i++) {
    $bytes = openssl_random_pseudo_bytes($i, $cstrong);
    $hex   = bin2hex($bytes);

    echo "Lengths: Bytes: $i and Hex: " . strlen($hex) . PHP_EOL;
    var_dump($hex);
    var_dump($cstrong);
    echo PHP_EOL;
}
?>
```

The above example will output something similar to:

```
Lengths: Bytes: 1 and Hex: 2
string(2) "42"
bool(true)

Lengths: Bytes: 2 and Hex: 4
string(4) "dc6e"
bool(true)

Lengths: Bytes: 3 and Hex: 6
string(6) "288591"
bool(true)

Lengths: Bytes: 4 and Hex: 8
string(8) "ab86d144"
bool(true)
```

### See Also

- random_bytes() - Get cryptographically secure random bytes
- bin2hex() - Convert binary data into hexadecimal representation
- crypt() - One-way string hashing
- random_int() - Get a cryptographically secure, uniformly selected integer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-random-pseudo-bytes.php
