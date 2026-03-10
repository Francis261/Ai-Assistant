# QuickHashIntSet::loadFromString

Source: https://devdocs.io/php/quickhashintset.loadfromstring

(PECL quickhash >= Unknown)

QuickHashIntSet::loadFromString — This factory method creates a set from a string

### Description

```
public static QuickHashIntSet::loadFromString(string $contents, int $size = ?, int $options = ?): QuickHashIntSet
```

This factory method creates a new set from a definition in a string. The file format consists of 32 bit signed integers packed together in the Endianness that the system that the code runs on uses.

### Parameters

The string containing a serialized format of the set.

The amount of bucket lists to configure. The number you pass in will be automatically rounded up to the next power of two. It is also automatically limited from 4 to 4194304.

The same options that the class' constructor takes; except that the size option is ignored. It is automatically calculated to be the same as the number of entries in the set, rounded up to the nearest power of two automatically limited from 64 to 4194304.

### Return Values

Returns a new QuickHashIntSet.

### Examples

Example #1 QuickHashIntSet::loadFromString() example

```
<?php
$contents = file_get_contents( dirname( __FILE__ ) . "/simple.set" );
$set = QuickHashIntSet::loadFromString(
    $contents,
    QuickHashIntSet::DO_NOT_USE_ZEND_ALLOC
);
foreach( range( 0, 0x0f ) as $key )
{
    printf( "Key %3d (%2x) is %s\n",
        $key, $key,
        $set->exists( $key ) ? 'set' : 'unset'
    );
}
?>
```

The above example will output something similar to:

```
Key   0 ( 0) is unset
Key   1 ( 1) is set
Key   2 ( 2) is set
Key   3 ( 3) is set
Key   4 ( 4) is unset
Key   5 ( 5) is set
Key   6 ( 6) is unset
Key   7 ( 7) is set
Key   8 ( 8) is unset
Key   9 ( 9) is unset
Key  10 ( a) is unset
Key  11 ( b) is set
Key  12 ( c) is unset
Key  13 ( d) is set
Key  14 ( e) is unset
Key  15 ( f) is unset
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/quickhashintset.loadfromstring.php
