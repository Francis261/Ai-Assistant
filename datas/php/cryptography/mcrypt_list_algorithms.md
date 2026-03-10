# mcrypt_list_algorithms

Source: https://devdocs.io/php/function.mcrypt-list-algorithms

(PHP 4 >= 4.0.2, PHP 5, PHP 7 < 7.2.0, PECL mcrypt >= 1.0.0)

mcrypt_list_algorithms — Gets an array of all supported ciphers

This function has been DEPRECATED as of PHP 7.1.0 and REMOVED as of PHP 7.2.0. Relying on this function is highly discouraged.

### Description

```
mcrypt_list_algorithms(string $lib_dir = ini_get("mcrypt.algorithms_dir")): array
```

Gets the list of all supported algorithms in the lib_dir parameter.

### Parameters

Specifies the directory where all algorithms are located. If not specified, the value of the mcrypt.algorithms_dir php.ini directive is used.

### Return Values

Returns an array with all the supported algorithms.

### Examples

Example #1 mcrypt_list_algorithms() Example

```
<?php
$algorithms = mcrypt_list_algorithms();
print_r($algorithms);
?>
```

The above example will output something similar to:

```
Array
(
    [0] => cast-128
    [1] => gost
    [2] => rijndael-128
    [3] => twofish
    [4] => arcfour
    [5] => cast-256
    [6] => loki97
    [7] => rijndael-192
    [8] => saferplus
    [9] => wake
    [10] => blowfish-compat
    [11] => des
    [12] => rijndael-256
    [13] => serpent
    [14] => xtea
    [15] => blowfish
    [16] => enigma
    [17] => rc2
    [18] => tripledes
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mcrypt-list-algorithms.php
