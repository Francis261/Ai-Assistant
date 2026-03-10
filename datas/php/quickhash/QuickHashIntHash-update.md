# QuickHashIntHash::update

Source: https://devdocs.io/php/quickhashinthash.update

(PECL quickhash >= Unknown)

QuickHashIntHash::update — This method updates an entry in the hash with a new value

### Description

```
public QuickHashIntHash::update(int $key, int $value): bool
```

This method updates an entry with a new value, and returns whether the entry was update. If there are duplicate keys, only the first found element will get an updated value. Use QuickHashIntHash::CHECK_FOR_DUPES during hash creation to prevent duplicate keys from being part of the hash.

### Parameters

The key of the entry to update.

The new value to update the entry with.

### Return Values

true when the entry was found and updated, and false if the entry was not part of the hash already.

### Examples

Example #1 QuickHashIntHash::update() example

```
<?php
$hash = new QuickHashIntHash( 1024 );

var_dump( $hash->add( 141421, 173205 ) );
var_dump( $hash->update( 141421, 223606 ) );
var_dump( $hash->get( 141421 ) );
?>
```

The above example will output something similar to:

```
bool(true)
bool(true)
int(223606)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/quickhashinthash.update.php
