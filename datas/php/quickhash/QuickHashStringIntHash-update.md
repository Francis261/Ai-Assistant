# QuickHashStringIntHash::update

Source: https://devdocs.io/php/quickhashstringinthash.update

(No version information available, might only be in Git)

QuickHashStringIntHash::update — This method updates an entry in the hash with a new value

### Description

```
public QuickHashStringIntHash::update(string $key, int $value): bool
```

This method updates an entry with a new value, and returns whether the entry was update. If there are duplicate keys, only the first found element will get an updated value. Use QuickHashStringIntHash::CHECK_FOR_DUPES during hash creation to prevent duplicate keys from being part of the hash.

### Parameters

The key of the entry to update.

The new value for the entry. If a non-string is passed, it will be converted to a string automatically if possible.

### Return Values

true when the entry was found and updated, and false if the entry was not part of the hash already.

### Examples

Example #1 QuickHashStringIntHash::update() example

```
<?php
$hash = new QuickHashStringIntHash( 1024 );

$hash->add( 'six', 314159265 );
$hash->add( "a lot", 314159265 );

echo $hash->get( 'six' ), "\n";
echo $hash->get( 'a lot' ), "\n";

var_dump( $hash->update( 'a lot', 314159266 ) );
var_dump( $hash->update( "a lot plus one", 314159999 ) );

echo $hash->get( 'six' ), "\n";
echo $hash->get( 'a lot' ), "\n";
?>
```

The above example will output something similar to:

```
314159265
314159265
bool(true)
bool(false)
314159265
314159266
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/quickhashstringinthash.update.php
