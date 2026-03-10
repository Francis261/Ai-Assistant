# mhash_get_block_size

Source: https://devdocs.io/php/function.mhash-get-block-size

(PHP 4, PHP 5, PHP 7, PHP 8)

mhash_get_block_size — Gets the block size of the specified hash

This function has been DEPRECATED as of PHP 8.1.0. Relying on this function is highly discouraged.

### Description

```
#[\Deprecated] 
 mhash_get_block_size(int $algo): int|false
```

Gets the size of a block of the specified algo.

### Parameters

The hash ID. One of the MHASH_hashname constants.

### Return Values

Returns the size in bytes or false, if the algo does not exist.

### Changelog

### Examples

Example #1 mhash_get_block_size() Example

```
<?php

echo mhash_get_block_size(MHASH_MD5); // 16

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mhash-get-block-size.php
