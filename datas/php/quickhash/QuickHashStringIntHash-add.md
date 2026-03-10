# QuickHashStringIntHash::add

Source: https://devdocs.io/php/quickhashstringinthash.add

(No version information available, might only be in Git)

QuickHashStringIntHash::add — This method adds a new entry to the hash

### Description

```
public QuickHashStringIntHash::add(string $key, int $value): bool
```

This method adds a new entry to the hash, and returns whether the entry was added. Entries are by default always added unless QuickHashStringIntHash::CHECK_FOR_DUPES has been passed when the hash was created.

### Parameters

The key of the entry to add.

The value of the entry to add.

### Return Values

true when the entry was added, and false if the entry was not added.

### Examples

Example #1 QuickHashStringIntHash::add() example

```
<?php
echo "without dupe checking\n";
$hash = new QuickHashStringIntHash( 1024 );
var_dump( $hash );
var_dump( $hash->exists( "four" ) );
var_dump( $hash->get( "four" ) );
var_dump( $hash->add( "four", 22 ) );
var_dump( $hash->exists( "four" ) );
var_dump( $hash->get( "four" ) );
var_dump( $hash->add( "four", 12 ) );

echo "\nwith dupe checking\n";
$hash = new QuickHashStringIntHash( 1024, QuickHashStringIntHash::CHECK_FOR_DUPES );
var_dump( $hash );
var_dump( $hash->exists( "four" ) );
var_dump( $hash->get( "four" ) );
var_dump( $hash->add( "four", 78 ) );
var_dump( $hash->exists( "four" ) );
var_dump( $hash->get( "four" ) );
var_dump( $hash->add( "four", 9 ) );
?>
```

The above example will output something similar to:

```
without dupe checking
object(QuickHashStringIntHash)#1 (0) {
}
bool(false)
bool(false)
bool(true)
bool(true)
int(22)
bool(true)

with dupe checking
object(QuickHashStringIntHash)#2 (0) {
}
bool(false)
bool(false)
bool(true)
bool(true)
int(78)
bool(false)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/quickhashstringinthash.add.php
