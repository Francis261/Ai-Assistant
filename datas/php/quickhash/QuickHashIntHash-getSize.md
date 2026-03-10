# QuickHashIntHash::getSize

Source: https://devdocs.io/php/quickhashinthash.getsize

(PECL quickhash >= Unknown)

QuickHashIntHash::getSize — Returns the number of elements in the hash

### Description

```
public QuickHashIntHash::getSize(): int
```

Returns the number of elements in the hash.

### Parameters

This function has no parameters.

### Return Values

The number of elements in the hash.

### Examples

Example #1 QuickHashIntHash::getSize() example

```
<?php
$hash = new QuickHashIntHash( 8 );
var_dump( $hash->add( 2 ) );
var_dump( $hash->add( 3, 5 ) );
var_dump( $hash->getSize() );
?>
```

The above example will output something similar to:

```
bool(true)
bool(true)
int(2)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/quickhashinthash.getsize.php
