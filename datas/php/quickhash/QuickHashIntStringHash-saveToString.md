# QuickHashIntStringHash::saveToString

Source: https://devdocs.io/php/quickhashintstringhash.savetostring

(PECL quickhash >= Unknown)

QuickHashIntStringHash::saveToString — This method returns a serialized version of the hash

### Description

```
public QuickHashIntStringHash::saveToString(): string
```

This method returns a serialized version of the hash in the same format that QuickHashIntStringHash::loadFromString() can read.

### Parameters

This function has no parameters.

### Return Values

This method returns a string containing a serialized format of the hash. Each element is stored as a four byte value in the Endianness that the current system uses.

### Examples

Example #1 QuickHashIntStringHash::saveToString() example

```
<?php
$hash = new QuickHashIntStringHash( 1024 );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->add( 4, "thirty four" ) );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->add( 5, "fifty five" ) );

var_dump( $hash->saveToString() );
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/quickhashintstringhash.savetostring.php
