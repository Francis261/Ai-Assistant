# QuickHashIntHash::set

Source: https://devdocs.io/php/quickhashinthash.set

(PECL quickhash >= Unknown)

QuickHashIntHash::set — This method updates an entry in the hash with a new value, or adds a new one if the entry doesn't exist

### Description

```
public QuickHashIntHash::set(int $key, int $value): bool
```

This method tries to update an entry with a new value. In case the entry did not yet exist, it will instead add a new entry. It returns whether the entry was added or update. If there are duplicate keys, only the first found element will get an updated value. Use QuickHashIntHash::CHECK_FOR_DUPES during hash creation to prevent duplicate keys from being part of the hash.

### Parameters

The key of the entry to add or update.

The new value to set the entry with.

### Return Values

2 if the entry was found and updated, 1 if the entry was newly added or 0 if there was an error.

### Examples

Example #1 QuickHashIntHash::set() example

```
<?php
$hash = new QuickHashIntHash( 1024 );

echo "Set->Add\n";
var_dump( $hash->get( 46692 ) );
var_dump( $hash->set( 46692, 16091 ) );
var_dump( $hash->get( 46692 ) );

echo "Set->Update\n";
var_dump( $hash->set( 46692, 29906 ) );
var_dump( $hash->get( 46692 ) );
?>
```

The above example will output something similar to:

```
bool(false)
int(2)
int(16091)
Set->Update
int(1)
int(29906)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/quickhashinthash.set.php
