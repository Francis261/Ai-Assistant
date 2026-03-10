# QuickHashIntStringHash::loadFromFile

Source: https://devdocs.io/php/quickhashintstringhash.loadfromfile

(PECL quickhash >= Unknown)

QuickHashIntStringHash::loadFromFile — This factory method creates a hash from a file

### Description

```
public static QuickHashIntStringHash::loadFromFile(string $filename, int $size = 0, int $options = 0): QuickHashIntStringHash
```

This factory method creates a new hash from a definition file on disk. The file format consists of a signature 'QH\0x12\0', the number of elements as a 32 bit signed integer in system Endianness, an unsigned 32 bit integer containing the number of element data to follow in characters. This element data contains all the strings. After the header and the strings, the elements follow in pairs of two unsigned 32 bit integers where the first one is the key, and the second one the index in the element data string. An example could be:

Example #1 QuickHash IntString file format

```
00000000  51 48 12 00 02 00 00 00  09 00 00 00 4f 4e 45 00  |QH..........ONE.|
00000010  4e 49 4e 45 00 01 00 00  00 00 00 00 00 03 00 00  |NINE............|
00000020  00 04 00 00 00                                    |.....|
00000025
```

Example #2 QuickHash IntString file format

```
header signature ('QH'; key type: 1; value type: 2; filler: \0x00)
00000000  51 48 12 00

number of elements:
00000004  02 00 00 00

length of string values (9 characters):
00000008  09 00 00 00

string values:
0000000C  4f 4e 45 00 4e 49 4e 45  00

data string:
00000015  01 00 00 00 00 00 00 00  03 00 00 00 04 00 00 00

key/value 1 (key = 1, string index = 0 ("ONE")):
01 00 00 00  00 00 00 00

key/value 2 (key = 3, string index = 4 ("NINE")):
03 00 00 00  04 00 00 00
```

### Parameters

The filename of the file to read the hash from.

The amount of bucket lists to configure. The number you pass in will be automatically rounded up to the next power of two. It is also automatically limited from 4 to 4194304.

The same options that the class' constructor takes; except that the size option is ignored. It is automatically calculated to be the same as the number of entries in the hash, rounded up to the nearest power of two with a maximum limit of 4194304.

### Return Values

Returns a new QuickHashIntStringHash.

### Examples

Example #3 QuickHashIntStringHash::loadFromFile() example

```
<?php
$file = dirname( __FILE__ ) . "/simple.string.hash";
$hash = QuickHashIntStringHash::loadFromFile(
    $file,
    QuickHashIntStringHash::DO_NOT_USE_ZEND_ALLOC
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
 https://www.php.net/manual/en/quickhashintstringhash.loadfromfile.php
