# QuickHashIntSet::add

Source: https://devdocs.io/php/quickhashintset.add

(PECL quickhash >= Unknown)

QuickHashIntSet::add — This method adds a new entry to the set

### Description

```
public QuickHashIntSet::add(int $key): bool
```

This method adds a new entry to the set, and returns whether the entry was added. Entries are by default always added unless QuickHashIntSet::CHECK_FOR_DUPES has been passed when the set was created.

### Parameters

The key of the entry to add.

### Return Values

true when the entry was added, and false if the entry was not added.

### Examples

Example #1 QuickHashIntSet::add() example

```
<?php
echo "without dupe checking\n";
$set = new QuickHashIntSet( 1024 );
var_dump( $set->exists( 4 ) );
var_dump( $set->add( 4 ) );
var_dump( $set->exists( 4 ) );
var_dump( $set->add( 4 ) );

echo "\nwith dupe checking\n";
$set = new QuickHashIntSet( 1024, QuickHashIntSet::CHECK_FOR_DUPES );
var_dump( $set->exists( 4 ) );
var_dump( $set->add( 4 ) );
var_dump( $set->exists( 4 ) );
var_dump( $set->add( 4 ) );
?>
```

The above example will output something similar to:

```
without dupe checking
bool(false)
bool(true)
bool(true)
bool(true)

with dupe checking
bool(false)
bool(true)
bool(true)
bool(false)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/quickhashintset.add.php
