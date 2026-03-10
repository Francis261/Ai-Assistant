# QuickHashStringIntHash::saveToFile

Source: https://devdocs.io/php/quickhashstringinthash.savetofile

(No version information available, might only be in Git)

QuickHashStringIntHash::saveToFile — This method stores an in-memory hash to disk

### Description

```
public QuickHashStringIntHash::saveToFile(string $filename): void
```

This method stores an existing hash to a file on disk, in the same format that loadFromFile() can read.

### Parameters

The filename of the file to store the hash in.

### Return Values

No value is returned.

### Examples

Example #1 QuickHashStringIntHash::saveToFile() example

```
<?php
$hash = new QuickHashStringIntHash( 1024 );
var_dump( $hash->add( "forty three", 42 ) );
var_dump( $hash->add( "fifty two", 52 ) );

$hash->saveToFile( '/tmp/test.hash.string' );
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/quickhashstringinthash.savetofile.php
