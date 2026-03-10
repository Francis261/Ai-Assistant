# QuickHashIntHash::saveToString

Source: https://devdocs.io/php/quickhashinthash.savetostring

(PECL quickhash >= Unknown)

QuickHashIntHash::saveToString — This method returns a serialized version of the hash

### Description

```
public QuickHashIntHash::saveToString(): string
```

This method returns a serialized version of the hash in the same format that QuickHashIntHash::loadFromString() can read.

### Parameters

This function has no parameters.

### Return Values

This method returns a string containing a serialized format of the hash. Each element is stored as a four byte value in the Endianness that the current system uses.

### Examples

Example #1 QuickHashIntHash::saveToString() example

```
<?php
$hash = new QuickHashIntHash( 1024 );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->add( 4, 34 ) );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->add( 4, 55 ) );

var_dump( $hash->saveToString() );
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/quickhashinthash.savetostring.php
