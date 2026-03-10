# mcrypt_get_cipher_name

Source: https://devdocs.io/php/function.mcrypt-get-cipher-name

(PHP 4, PHP 5, PHP 7 < 7.2.0, PECL mcrypt >= 1.0.0)

mcrypt_get_cipher_name — Gets the name of the specified cipher

This function has been DEPRECATED as of PHP 7.1.0 and REMOVED as of PHP 7.2.0. Relying on this function is highly discouraged.

### Description

```
mcrypt_get_cipher_name(int $cipher): string
```

```
mcrypt_get_cipher_name(string $cipher): string
```

mcrypt_get_cipher_name() is used to get the name of the specified cipher.

mcrypt_get_cipher_name() takes the cipher number as an argument (libmcrypt 2.2.x) or takes the cipher name as an argument (libmcrypt 2.4.x or higher) and returns the name of the cipher or false, if the cipher does not exist.

### Parameters

One of the MCRYPT_ciphername constants, or the name of the algorithm as string.

### Return Values

This function returns the name of the cipher or false if the cipher does not exist.

### Examples

Example #1 mcrypt_get_cipher_name() Example

```
<?php
   $cipher = MCRYPT_TripleDES;

   echo mcrypt_get_cipher_name($cipher);
?>
```

The above example will output:

```
3DES
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mcrypt-get-cipher-name.php
