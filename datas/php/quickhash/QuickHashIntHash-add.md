# QuickHashIntHash::add

Source: https://devdocs.io/php/quickhashinthash.add

(PECL quickhash >= Unknown)

QuickHashIntHash::add — This method adds a new entry to the hash

### Description

```
public QuickHashIntHash::add(int $key, int $value = ?): bool
```

This method adds a new entry to the hash, and returns whether the entry was added. Entries are by default always added unless QuickHashIntHash::CHECK_FOR_DUPES has been passed when the hash was created.

### Parameters

The key of the entry to add.

The optional value of the entry to add. If no value is specified, 1 will be used.

### Return Values

true when the entry was added, and false if the entry was not added.

### Examples

Example #1 QuickHashIntHash::add() example

```
<?php
echo "without dupe checking\n";
$hash = new QuickHashIntHash( 1024 );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->get( 4 ) );
var_dump( $hash->add( 4, 22 ) );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->get( 4 ) );
var_dump( $hash->add( 4, 12 ) );

echo "\nwith dupe checking\n";
$hash = new QuickHashIntHash( 1024, QuickHashIntHash::CHECK_FOR_DUPES );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->get( 4 ) );
var_dump( $hash->add( 4, 78 ) );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->get( 4 ) );
var_dump( $hash->add( 4, 9 ) );

echo "\ndefault value\n";
var_dump( $hash->add( 5 ) );
var_dump( $hash->get( 5 ) );
?>
```

The above example will output something similar to:

```
without dupe checking
bool(false)
bool(false)
bool(true)
bool(true)
int(22)
bool(true)

with dupe checking
bool(false)
bool(false)
bool(true)
bool(true)
int(78)
bool(false)

default value
bool(true)
int(1)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/quickhashinthash.add.php
