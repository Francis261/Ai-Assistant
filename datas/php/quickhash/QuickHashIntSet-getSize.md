# QuickHashIntSet::getSize

Source: https://devdocs.io/php/quickhashintset.getsize

(PECL quickhash >= Unknown)

QuickHashIntSet::getSize — Returns the number of elements in the set

### Description

```
publicQuickHashIntSet::getSize(): int
```

Returns the number of elements in the set.

### Parameters

This function has no parameters.

### Return Values

The number of elements in the set.

### Examples

Example #1 QuickHashIntSet::getSize() example

```
<?php
$set = new QuickHashIntSet( 8 );
var_dump( $set->add( 2 ) );
var_dump( $set->add( 3 ) );
var_dump( $set->getSize() );
?>
```

The above example will output something similar to:

```
bool(true)
bool(true)
int(2)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/quickhashintset.getsize.php
