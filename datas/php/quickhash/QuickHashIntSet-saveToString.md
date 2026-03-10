# QuickHashIntSet::saveToString

Source: https://devdocs.io/php/quickhashintset.savetostring

(PECL quickhash >= Unknown)

QuickHashIntSet::saveToString — This method returns a serialized version of the set

### Description

```
public QuickHashIntSet::saveToString(): string
```

This method returns a serialized version of the set in the same format that QuickHashIntSet::loadFromString() can read.

### Parameters

This function has no parameters.

### Return Values

This method returns a string containing a serialized format of the set. Each element is stored as a four byte value in the Endianness that the current system uses.

### Examples

Example #1 QuickHashIntSet::saveToString() example

```
<?php
$set = new QuickHashIntSet( 1024 );
var_dump( $set->exists( 4 ) );
var_dump( $set->add( 4 ) );
var_dump( $set->exists( 4 ) );
var_dump( $set->add( 4 ) );

var_dump( $set->saveToString() );
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/quickhashintset.savetostring.php
