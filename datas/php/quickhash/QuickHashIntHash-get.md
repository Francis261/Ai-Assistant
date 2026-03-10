# QuickHashIntHash::get

Source: https://devdocs.io/php/quickhashinthash.get

(PECL quickhash >= Unknown)

QuickHashIntHash::get — This method retrieves a value from the hash by its key

### Description

```
public QuickHashIntHash::get(int $key): int
```

This method retrieves a value from the hash by its key.

### Parameters

The key of the entry to retrieve.

### Return Values

The value if the key exists, or null if the key wasn't part of the hash.

### Examples

Example #1 QuickHashIntHash::get() example

```
<?php
$hash = new QuickHashIntHash( 8 );
var_dump( $hash->get( 1 ) );

var_dump( $hash->add( 2 ) );
var_dump( $hash->get( 2 ) );

var_dump( $hash->add( 3, 5 ) );
var_dump( $hash->get( 3 ) );
?>
```

The above example will output something similar to:

```
bool(false)
bool(true)
int(1)
bool(true)
int(5)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/quickhashinthash.get.php
