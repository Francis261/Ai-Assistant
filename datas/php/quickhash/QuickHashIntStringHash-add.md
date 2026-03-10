# QuickHashIntStringHash::add

Source: https://devdocs.io/php/quickhashintstringhash.add

(PECL quickhash >= Unknown)

QuickHashIntStringHash::add — This method adds a new entry to the hash

### Description

```
public QuickHashIntStringHash::add(int $key, string $value): bool
```

This method adds a new entry to the hash, and returns whether the entry was added. Entries are by default always added unless QuickHashIntStringHash::CHECK_FOR_DUPES has been passed when the hash was created.

### Parameters

The key of the entry to add.

The value of the entry to add. If a non-string is passed, it will be converted to a string automatically if possible.

### Return Values

true when the entry was added, and false if the entry was not added.

### Examples

Example #1 QuickHashIntStringHash::add() example

```
<?php
echo "without dupe checking\n";
$hash = new QuickHashIntStringHash( 1024 );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->get( 4 ) );
var_dump( $hash->add( 4, "twenty two" ) );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->get( 4 ) );
var_dump( $hash->add( 4, "twelve" ) );

echo "\nwith dupe checking\n";
$hash = new QuickHashIntStringHash( 1024, QuickHashIntStringHash::CHECK_FOR_DUPES );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->get( 4 ) );
var_dump( $hash->add( 4, "seventy eight" ) );
var_dump( $hash->exists( 4 ) );
var_dump( $hash->get( 4 ) );
var_dump( $hash->add( 4, "nine" ) );
?>
```

The above example will output something similar to:

```
without dupe checking
bool(false)
bool(false)
bool(true)
bool(true)
string(10) "twenty two"
bool(true)

with dupe checking
bool(false)
bool(false)
bool(true)
bool(true)
string(13) "seventy eight"
bool(false)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/quickhashintstringhash.add.php
