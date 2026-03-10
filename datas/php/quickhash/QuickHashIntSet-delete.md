# QuickHashIntSet::delete

Source: https://devdocs.io/php/quickhashintset.delete

(PECL quickhash >= Unknown)

QuickHashIntSet::delete — This method deletes an entry from the set

### Description

```
public QuickHashIntSet::delete(int $key): bool
```

This method deletes an entry from the set, and returns whether the entry was deleted or not. Associated memory structures will not be freed immediately, but rather when the set itself is freed.

### Parameters

The key of the entry to delete.

### Return Values

true when the entry was deleted, and false if the entry was not deleted.

### Examples

Example #1 QuickHashIntSet::delete() example

```
<?php
$set = new QuickHashIntSet( 1024 );
var_dump( $set->exists( 4 ) );
var_dump( $set->add( 4 ) );
var_dump( $set->delete( 4 ) );
var_dump( $set->exists( 4 ) );
var_dump( $set->delete( 4 ) );
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
 https://www.php.net/manual/en/quickhashintset.delete.php
