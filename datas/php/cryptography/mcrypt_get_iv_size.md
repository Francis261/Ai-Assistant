# mcrypt_get_iv_size

Source: https://devdocs.io/php/function.mcrypt-get-iv-size

(PHP 4 >= 4.0.2, PHP 5, PHP 7 < 7.2.0, PECL mcrypt >= 1.0.0)

mcrypt_get_iv_size — Returns the size of the IV belonging to a specific cipher/mode combination

This function has been DEPRECATED as of PHP 7.1.0 and REMOVED as of PHP 7.2.0. Relying on this function is highly discouraged.

### Description

```
mcrypt_get_iv_size(string $cipher, string $mode): int
```

Gets the size of the IV belonging to a specific cipher/mode combination.

It is more useful to use the mcrypt_enc_get_iv_size() function as this uses the resource returned by mcrypt_module_open().

### Parameters

One of the MCRYPT_ciphername constants, or the name of the algorithm as string.

One of the MCRYPT_MODE_modename constants, or one of the following strings: "ecb", "cbc", "cfb", "ofb", "nofb" or "stream".

The IV is ignored in ECB mode as this mode does not require it. You will need to have the same IV (think: starting point) both at encryption and decryption stages, otherwise your encryption will fail.

### Return Values

Returns the size of the Initialization Vector (IV) in bytes. On error the function returns false. If the IV is ignored in the specified cipher/mode combination zero is returned.

### Examples

Example #1 mcrypt_get_iv_size() Example

```
<?php
    echo mcrypt_get_iv_size(MCRYPT_CAST_256, MCRYPT_MODE_CFB) . "\n";

    echo mcrypt_get_iv_size('des', 'ecb') . "\n";
?>
```

### See Also

- mcrypt_get_block_size() - Gets the block size of the specified cipher
- mcrypt_enc_get_iv_size() - Returns the size of the IV of the opened algorithm
- mcrypt_create_iv() - Creates an initialization vector (IV) from a random source

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mcrypt-get-iv-size.php
