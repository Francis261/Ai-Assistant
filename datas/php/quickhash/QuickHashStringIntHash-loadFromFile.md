# QuickHashStringIntHash::loadFromFile

Source: https://devdocs.io/php/quickhashstringinthash.loadfromfile

(No version information available, might only be in Git)

QuickHashStringIntHash::loadFromFile — This factory method creates a hash from a file

### Description

```
public static QuickHashStringIntHash::loadFromFile(string $filename, int $size = 0, int $options = 0): QuickHashStringIntHash
```

This factory method creates a new hash from a definition file on disk. The file format consists of a signature 'QH\0x21\0', the number of elements as a 32 bit signed integer in system Endianness, an unsigned 32 bit integer containing the number of element data to follow in characters. This element data contains all the strings. The follows another signed 32 bit integer containing the number of bucket lists. After the header and the strings, the elements follow. They are ordered by bucket list so that the keys don't have to be hashed in order to restore the hash. For each bucket list, the following information is stored (all as 32 bit integers): the bucket list index, the number of elements in that list, and then in pairs of two unsigned 32 bit integers the elements, where the first one is the index into the string list containing the keys, and the second one the value. An example could be:

Example #1 QuickHash StringIntHash file format

```
00000000  51 48 21 00 02 00 00 00  09 00 00 00 40 00 00 00  |QH!.........@...|
00000010  4f 4e 45 00 4e 49 4e 45  00 07 00 00 00 01 00 00  |ONE.NINE........|
00000020  00 00 00 00 00 01 00 00  00 2f 00 00 00 01 00 00  |........./......|
00000030  00 04 00 00 00 03 00 00  00                       |.........|
00000039
```

Example #2 QuickHash IntHash file format

```
header signature ('QH'; key type: 2; value type: 1; filler: \0x00)
00000000  51 48 21 00

number of elements:
00000004  02 00 00 00

length of string values (9 characters):
00000008  09 00 00 00

number of hash bucket lists (this is configured for hashes as argument to the
constructor normally, 64 in this case):
0000000C  40 00 00 00

string values:
00000010  4f 4e 45 00 4e 49 4e 45  00

bucket lists:
  bucket list 1 (with key 7, and 1 element):
    header:
    07 00 00 00 01 00 00 00
    elements (key index: 0 ('ONE'), value = 0):
    00 00 00 00 01 00 00 00
  bucket list 2 (with key 0x2f, and 1 element):
    header:
    2f 00 00 00 01 00 00 00
    elements (key index: 4 ('NINE'), value = 3):
    04 00 00 00 03 00 00 00
```

### Parameters

The filename of the file to read the hash from.

The amount of bucket lists to configure. The number you pass in will be automatically rounded up to the next power of two. It is also automatically limited from 4 to 4194304.

The same options that the class' constructor takes; except that the size option is ignored. It is read from the file format (unlike the QuickHashIntHash and QuickHashIntStringHash classes, where it is automatically calculated from the number of entries in the hash.)

### Return Values

Returns a new QuickHashStringIntHash.

### Examples

Example #3 QuickHashStringIntHash::loadFromFile() example

```
<?php
$file = dirname( __FILE__ ) . "/simple.hash.string";
$hash = QuickHashStringIntHash::loadFromFile(
    $file,
    QuickHashStringIntHash::DO_NOT_USE_ZEND_ALLOC
);
foreach( range( 0, 0x0f ) as $key )
{
    $i = 48712 + $key * 1631;
    $k = base_convert( $i, 10, 36 );
    echo $k, ' => ', $hash->get( $k ), "\n";
}
?>
```

The above example will output something similar to:

```
11l4 => 48712
12uf => 50343
143q => 51974
15d1 => 53605
16mc => 55236
17vn => 56867
194y => 58498
1ae9 => 60129
1bnk => 61760
1cwv => 63391
1e66 => 65022
1ffh => 66653
1gos => 68284
1hy3 => 69915
1j7e => 71546
1kgp => 73177
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/quickhashstringinthash.loadfromfile.php
