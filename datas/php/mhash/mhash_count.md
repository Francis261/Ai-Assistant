# mhash_count

Source: https://devdocs.io/php/function.mhash-count

(PHP 4, PHP 5, PHP 7, PHP 8)

mhash_count — Gets the highest available hash ID

This function has been DEPRECATED as of PHP 8.1.0. Relying on this function is highly discouraged.

### Description

```
#[\Deprecated] 
 mhash_count(): int
```

Gets the highest available hash ID.

### Parameters

This function has no parameters.

### Return Values

Returns the highest available hash ID. Hashes are numbered from 0 to this hash ID.

### Changelog

### Examples

Example #1 Traversing all hashes

```
<?php

$nr = mhash_count();

for ($i = 0; $i <= $nr; $i++) {
    echo sprintf("The blocksize of %s is %d\n",
        mhash_get_hash_name($i),
        mhash_get_block_size($i));
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.mhash-count.php
