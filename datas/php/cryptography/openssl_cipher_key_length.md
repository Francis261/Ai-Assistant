# openssl_cipher_key_length

Source: https://devdocs.io/php/function.openssl-cipher-key-length

(PHP 8 >= 8.2.0)

openssl_cipher_key_length — Gets the cipher key length

### Description

```
openssl_cipher_key_length(string $cipher_algo): int|false
```

Gets the cipher key length.

### Parameters

The cipher method, see openssl_get_cipher_methods() for a list of potential values.

### Return Values

Returns the cipher length on success, or false on failure.

### Errors/Exceptions

Emits an E_WARNING level error when the cipher algorithm is unknown.

### Examples

Example #1 openssl_cipher_key_length() example

```
<?php
$method = 'AES-128-CBC';

var_dump(openssl_cipher_key_length($method));
?>
```

The above example will output something similar to:

```
int(16)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.openssl-cipher-key-length.php
