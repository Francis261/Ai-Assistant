# QuickHashIntStringHash::saveToFile

Source: https://devdocs.io/php/quickhashintstringhash.savetofile

(PECL quickhash >= Unknown)

QuickHashIntStringHash::saveToFile — This method stores an in-memory hash to disk

### Description

```
public QuickHashIntStringHash::saveToFile(string $filename): void
```

This method stores an existing hash to a file on disk, in the same format that loadFromFile() can read.

### Parameters

The filename of the file to store the hash in.

### Return Values

No value is returned.

### Examples

Example #1 QuickHashIntStringHash::saveToFile() example

```
<?php
$hash = new QuickHashIntStringHash( 1024 );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->add( 4, "forty three" ) );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->add( 4, "fifty two" ) );

$hash->saveToFile( '/tmp/test.string.hash' );
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/quickhashintstringhash.savetofile.php
