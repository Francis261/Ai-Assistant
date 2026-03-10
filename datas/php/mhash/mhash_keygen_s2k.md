# mhash_keygen_s2k

Source: https://devdocs.io/php/function.mhash-keygen-s2k

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

mhash_keygen_s2k — Generates a key

This function has been DEPRECATED as of PHP 8.1.0. Relying on this function is highly discouraged.

### Description

```
#[\Deprecated] 
 mhash_keygen_s2k(
 int $algo,
 string $password,
 string $salt,
 int $length
): string|false
```

Generates a key according to the given algo, using an user provided password.

This is the Salted S2K algorithm as specified in the OpenPGP document (» RFC 2440).

Keep in mind that user supplied passwords are not really suitable to be used as keys in cryptographic algorithms, since users normally choose keys they can write on keyboard. These passwords use only 6 to 7 bits per character (or less). It is highly recommended to use some kind of transformation (like this function) to the user supplied key.

### Parameters

The hash ID used to create the key. One of the MHASH_hashname constants.

An user supplied password.

Must be different and random enough for every key you generate in order to create different keys. Because salt must be known when you check the keys, it is a good idea to append the key to it. Salt has a fixed length of 8 bytes and will be padded with zeros if you supply less bytes.

The key length, in bytes.

### Return Values

Returns the generated key as a string, or false on error.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mhash-keygen-s2k.php
