# QuickHashStringIntHash::delete

Source: https://devdocs.io/php/quickhashstringinthash.delete

(No version information available, might only be in Git)

QuickHashStringIntHash::delete — This method deletes an entry from the hash

### Description

```
public QuickHashStringIntHash::delete(string $key): bool
```

This method deletes an entry from the hash, and returns whether the entry was deleted or not. Associated memory structures will not be freed immediately, but rather when the hash itself is freed.

Elements can not be deleted when the hash is used in an iterator. The method will not throw an exception, but simply return false like would happen with any other deletion failure.

### Parameters

The key of the entry to delete.

### Return Values

true when the entry was deleted, and false if the entry was not deleted.

### Examples

Example #1 QuickHashStringIntHash::delete() example

```
<?php
$hash = new QuickHashStringIntHash( 1024 );
var_dump( $hash->exists( 'four' ) );
var_dump( $hash->add( 'four', 5 ) );
var_dump( $hash->get( 'four' ) );
var_dump( $hash->delete( 'four' ) );
var_dump( $hash->exists( 'four' ) );
var_dump( $hash->get( 'four' ) );
var_dump( $hash->delete( 'four' ) );
?>
```

The above example will output something similar to:

```
bool(false)
bool(true)
int(5)
bool(true)
bool(false)
bool(false)
bool(false)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/quickhashstringinthash.delete.php
