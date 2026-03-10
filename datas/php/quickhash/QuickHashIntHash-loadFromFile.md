# QuickHashIntHash::loadFromFile

Source: https://devdocs.io/php/quickhashinthash.loadfromfile

(PECL quickhash >= Unknown)

QuickHashIntHash::loadFromFile — This factory method creates a hash from a file

### Description

```
public static QuickHashIntHash::loadFromFile(string $filename, int $options = ?): QuickHashIntHash
```

This factory method creates a new hash from a definition file on disk. The file format consists of a signature 'QH\0x11\0', the number of elements as a 32 bit signed integer in system Endianness, followed by 32 bit signed integers packed together in the Endianness that the system that the code runs on uses. For each hash element there are two 32 bit signed integers stored. The first of each element is the key, and the second is the value belonging to the key. An example could be:

Example #1 QuickHash IntHash file format

```
00000000  51 48 11 00 02 00 00 00  01 00 00 00 01 00 00 00  |QH..............|
00000010  03 00 00 00 09 00 00 00                           |........|
00000018
```

Example #2 QuickHash IntHash file format

```
header signature ('QH'; key type: 1; value type: 1; filler: \0x00)
00000000  51 48 11 00

number of elements:
00000004  02 00 00 00

data string:
00000000  01 00 00 00 01 00 00 00  03 00 00 00 09 00 00 00

key/value 1 (key = 1, value = 1)
01 00 00 00  01 00 00 00

key/value 2 (key = 3, value = 9)
03 00 00 00  09 00 00 00
```

### Parameters

The filename of the file to read the hash from.

The same options that the class' constructor takes; except that the size option is ignored. It is automatically calculated to be the same as the number of entries in the hash, rounded up to the nearest power of two with a maximum limit of 4194304.

### Return Values

Returns a new QuickHashIntHash.

### Examples

Example #3 QuickHashIntHash::loadFromFile() example

```
<?php
$file = dirname( __FILE__ ) . "/simple.hash";
$hash = QuickHashIntHash::loadFromFile(
    $file,
    QuickHashIntHash::DO_NOT_USE_ZEND_ALLOC
);
foreach( range( 0, 0x0f ) as $key )
{
    printf( "Key %3d (%2x) is %s\n",
        $key, $key,
        $hash->exists( $key ) ? 'set' : 'unset'
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
 https://www.php.net/manual/en/quickhashinthash.loadfromfile.php
