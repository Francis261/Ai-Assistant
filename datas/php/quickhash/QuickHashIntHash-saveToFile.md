# QuickHashIntHash::saveToFile

Source: https://devdocs.io/php/quickhashinthash.savetofile

(PECL quickhash >= Unknown)

QuickHashIntHash::saveToFile — This method stores an in-memory hash to disk

### Description

```
public QuickHashIntHash::saveToFile(string $filename): void
```

This method stores an existing hash to a file on disk, in the same format that QuickHashIntHash::loadFromFile() can read.

### Parameters

The filename of the file to store the hash in.

### Return Values

No value is returned.

### Examples

Example #1 QuickHashIntHash::saveToFile() example

```
<?php
$hash = new QuickHashIntHash( 1024 );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->add( 4, 43 ) );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->add( 4, 52 ) );

$hash->saveToFile( '/tmp/test.hash' );
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/quickhashinthash.savetofile.php
