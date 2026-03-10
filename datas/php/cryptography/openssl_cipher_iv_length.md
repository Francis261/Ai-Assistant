# openssl_cipher_iv_length

Source: https://devdocs.io/php/function.openssl-cipher-iv-length

(PHP 5 >= 5.3.3, PHP 7, PHP 8)

openssl_cipher_iv_length — Gets the cipher iv length

### Description

```
openssl_cipher_iv_length(string $cipher_algo): int|false
```

Gets the cipher initialization vector (iv) length.

### Parameters

The cipher method, see openssl_get_cipher_methods() for a list of potential values.

### Return Values

Returns the cipher length on success, or false on failure.

### Errors/Exceptions

Emits an E_WARNING level error when the cipher algorithm is unknown.

### Examples

Example #1 openssl_cipher_iv_length() example

```
<?php
$method = 'AES-128-CBC';
$ivlen = openssl_cipher_iv_length($method);

echo $ivlen;
?>
```

The above example will output something similar to:

```
16
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-cipher-iv-length.php
