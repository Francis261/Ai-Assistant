# password_get_info

Source: https://devdocs.io/php/function.password-get-info

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

password_get_info — Returns information about the given hash

### Description

```
password_get_info(string $hash): array
```

When passed in a valid hash created by an algorithm supported by password_hash(), this function will return an array of information about that hash.

### Parameters

A hash created by password_hash().

### Return Values

Returns an associative array with three elements:

- algo, which will match a password algorithm constant
- algoName, which has the human readable name of the algorithm
- options, which includes the options provided when calling password_hash()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.password-get-info.php
