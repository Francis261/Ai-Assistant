# mhash_get_hash_name

Source: https://devdocs.io/php/function.mhash-get-hash-name

(PHP 4, PHP 5, PHP 7, PHP 8)

mhash_get_hash_name — Gets the name of the specified hash

This function has been DEPRECATED as of PHP 8.1.0. Relying on this function is highly discouraged.

### Description

```
#[\Deprecated] 
 mhash_get_hash_name(int $algo): string|false
```

Gets the name of the specified algo.

### Parameters

The hash ID. One of the MHASH_hashname constants.

### Return Values

Returns the name of the hash or false, if the hash does not exist.

### Changelog

### Examples

Example #1 mhash_get_hash_name() Example

```
<?php

echo mhash_get_hash_name(MHASH_MD5); // MD5

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mhash-get-hash-name.php
