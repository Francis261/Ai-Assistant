# QuickHashStringIntHash::saveToString

Source: https://devdocs.io/php/quickhashstringinthash.savetostring

(No version information available, might only be in Git)

QuickHashStringIntHash::saveToString — This method returns a serialized version of the hash

### Description

```
public QuickHashStringIntHash::saveToString(): string
```

This method returns a serialized version of the hash in the same format that QuickHashStringIntHash::loadFromString() can read.

### Parameters

This function has no parameters.

### Return Values

This method returns a serialized format of an existing hash, in the same format that QuickHashStringIntHash::loadFromString() can read.

### Examples

Example #1 QuickHashStringIntHash::saveToString() example

```
<?php
$hash = new QuickHashStringIntHash( 1024 );
var_dump( $hash->add( "forty three", 42 ) );
var_dump( $hash->add( "fifty two", 52 ) );

var_dump( $hash->saveToString() );
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/quickhashstringinthash.savetostring.php
