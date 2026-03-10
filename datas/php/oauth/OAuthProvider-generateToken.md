# OAuthProvider::generateToken

Source: https://devdocs.io/php/oauthprovider.generatetoken

(PECL OAuth >= 1.0.0)

OAuthProvider::generateToken — Generate a random token

### Description

```
final public static OAuthProvider::generateToken(int $size, bool $strong = false): string
```

Generates a string of pseudo-random bytes.

### Parameters

The desired token length, in terms of bytes.

Setting to true means /dev/random will be used for entropy, as otherwise the non-blocking /dev/urandom is used. This parameter is ignored on Windows.

### Return Values

The generated token, as a string of bytes.

### Errors/Exceptions

If the strong parameter is true, then an E_WARNING level error will be emitted when the fallback rand() implementation is used to fill the remaining random bytes (e.g., when not enough random data was found, initially).

### Examples

Example #1 OAuthProvider::generateToken() example

```
<?php
$p = new OAuthProvider();

$t = $p->generateToken(4);

echo strlen($t),  PHP_EOL;
echo bin2hex($t), PHP_EOL;

?>
```

The above example will output something similar to:

```
4
b6a82c27
```

### Notes

Note:

When not enough random data is available to the system, this function will fill the remaining random bytes using the internal PHP rand() implementation.

### See Also

- openssl_random_pseudo_bytes() - Generate a pseudo-random string of bytes
- mcrypt_create_iv() - Creates an initialization vector (IV) from a random source

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/oauthprovider.generatetoken.php
