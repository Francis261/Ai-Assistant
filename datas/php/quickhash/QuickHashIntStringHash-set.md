# QuickHashIntStringHash::set

Source: https://devdocs.io/php/quickhashintstringhash.set

(PECL quickhash >= Unknown)

QuickHashIntStringHash::set — This method updates an entry in the hash with a new value, or adds a new one if the entry doesn't exist

### Description

```
public QuickHashIntStringHash::set(int $key, string $value): int
```

This method tries to update an entry with a new value. In case the entry did not yet exist, it will instead add a new entry. It returns whether the entry was added or update. If there are duplicate keys, only the first found element will get an updated value. Use QuickHashIntStringHash::CHECK_FOR_DUPES during hash creation to prevent duplicate keys from being part of the hash.

### Parameters

The key of the entry to add or update.

The value of the entry to add. If a non-string is passed, it will be converted to a string automatically if possible.

### Return Values

2 if the entry was found and updated, 1 if the entry was newly added or 0 if there was an error.

### Examples

Example #1 QuickHashIntStringHash::set() example

```
<?php
$hash = new QuickHashIntStringHash( 1024 );

echo "Set->Add\n";
var_dump( $hash->get( 46692 ) );
var_dump( $hash->set( 46692, "sixteen thousand ninety one" ) );
var_dump( $hash->get( 46692 ) );

echo "Set->Update\n";
var_dump( $hash->set( 46692, "twenty nine thousand nine hundred six" ) );
var_dump( $hash->get( 46692 ) );
?>
```

The above example will output something similar to:

```
Set->Add
bool(false)
int(2)
string(27) "sixteen thousand ninety one"
Set->Update
int(1)
string(37) "twenty nine thousand nine hundred six"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/quickhashintstringhash.set.php
