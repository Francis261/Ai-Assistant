# QuickHashIntSet::exists

Source: https://devdocs.io/php/quickhashintset.exists

(PECL quickhash >= Unknown)

QuickHashIntSet::exists — This method checks whether a key is part of the set

### Description

```
public QuickHashIntSet::exists(int $key): bool
```

This method checks whether an entry with the provided key exists in the set.

### Parameters

The key of the entry to check for whether it exists in the set.

### Return Values

Returns true when the entry was found, or false when the entry is not found.

### Examples

Example #1 QuickHashIntSet::exists() example

```
<?php
//generate 200000 elements
$array = range( 0, 199999 );
$existingEntries = array_rand( array_flip( $array ), 180000 );
$testForEntries = array_rand( array_flip( $array ), 1000 );
$foundCount = 0;

echo "Creating set: ", microtime( true ), "\n";
$set = new QuickHashIntSet( 100000 );
echo "Adding elements: ", microtime( true ), "\n";
foreach( $existingEntries as $key )
{
     $set->add( $key );
}

echo "Doing 1000 tests: ", microtime( true ), "\n";
foreach( $testForEntries as $key )
{
     $foundCount += $set->exists( $key );
}
echo "Done, $foundCount found: ", microtime( true ), "\n";
?>
```

The above example will output something similar to:

```
Creating set: 1263588703.0748
Adding elements: 1263588703.0757
Doing 1000 tests: 1263588703.7851
Done, 898 found: 1263588703.7897
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/quickhashintset.exists.php
