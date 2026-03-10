# QuickHashIntSet::saveToFile

Source: https://devdocs.io/php/quickhashintset.savetofile

(PECL quickhash >= Unknown)

QuickHashIntSet::saveToFile — This method stores an in-memory set to disk

### Description

```
public QuickHashIntSet::saveToFile(string $filename): void
```

This method stores an existing set to a file on disk, in the same format that QuickHashIntSet::loadFromFile() can read.

### Parameters

The filename of the file to store the hash in.

### Return Values

No value is returned.

### Examples

Example #1 QuickHashIntSet::saveToFile() example

```
<?php
$set = new QuickHashIntSet( 1024 );
var_dump( $set->exists( 4 ) );
var_dump( $set->add( 4 ) );
var_dump( $set->exists( 4 ) );
var_dump( $set->add( 4 ) );

$set->saveToFile( '/tmp/test.set' );
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/quickhashintset.savetofile.php
