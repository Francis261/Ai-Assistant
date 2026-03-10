# QuickHashIntStringHash::delete

Source: https://devdocs.io/php/quickhashintstringhash.delete

(PECL quickhash >= Unknown)

QuickHashIntStringHash::delete — This method deletes an entry from the hash

### Description

```
public QuickHashIntStringHash::delete(int $key): bool
```

This method deletes an entry from the hash, and returns whether the entry was deleted or not. Associated memory structures will not be freed immediately, but rather when the hash itself is freed.

Elements can not be deleted when the hash is used in an iterator. The method will not throw an exception, but simply return false like would happen with any other deletion failure.

### Parameters

The key of the entry to delete.

### Return Values

true when the entry was deleted, and false if the entry was not deleted.

### Examples

Example #1 QuickHashIntStringHash::delete() example

```
<?php
$hash = new QuickHashIntStringHash( 1024 );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->add( 4, "five" ) );
var_dump( $hash->delete( 4 ) );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->delete( 4 ) );
?>
```

The above example will output something similar to:

```
bool(false)
bool(true)
bool(true)
bool(false)
bool(false)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/quickhashintstringhash.delete.php
