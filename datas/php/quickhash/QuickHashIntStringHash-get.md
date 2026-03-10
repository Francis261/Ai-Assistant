# QuickHashIntStringHash::get

Source: https://devdocs.io/php/quickhashintstringhash.get

(PECL quickhash >= Unknown)

QuickHashIntStringHash::get — This method retrieves a value from the hash by its key

### Description

```
public QuickHashIntStringHash::get(int $key): mixed
```

This method retrieves a value from the hash by its key.

### Parameters

The key of the entry to retrieve.

### Return Values

The value if the key exists, or null if the key wasn't part of the hash.

### Examples

Example #1 QuickHashIntStringHash::get() example

```
<?php
$hash = new QuickHashIntStringHash( 8 );
var_dump( $hash->get( 1 ) );

var_dump( $hash->add( 2, "two" ) );
var_dump( $hash->get( 2 ) );

var_dump( $hash->add( 3, 5 ) );
var_dump( $hash->get( 3 ) );
?>
```

The above example will output something similar to:

```
bool(false)
bool(true)
string(3) "two"
bool(true)
string(1) "5"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/quickhashintstringhash.get.php
