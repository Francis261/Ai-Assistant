# QuickHashStringIntHash::get

Source: https://devdocs.io/php/quickhashstringinthash.get

(No version information available, might only be in Git)

QuickHashStringIntHash::get — This method retrieves a value from the hash by its key

### Description

```
public QuickHashStringIntHash::get(string $key): mixed
```

This method retrieves a value from the hash by its key.

### Parameters

The key of the entry to retrieve.

### Return Values

The value if the key exists, or null if the key wasn't part of the hash.

### Examples

Example #1 QuickHashStringIntHash::get() example

```
<?php
$hash = new QuickHashStringIntHash( 8 );
var_dump( $hash->get( "one" ) );

var_dump( $hash->add( "two", 2 ) );
var_dump( $hash->get( "two" ) );
?>
```

The above example will output something similar to:

```
bool(false)
bool(true)
int(2)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/quickhashstringinthash.get.php
