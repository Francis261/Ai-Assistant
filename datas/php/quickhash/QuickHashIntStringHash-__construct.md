# QuickHashIntStringHash::__construct

Source: https://devdocs.io/php/quickhashintstringhash.construct

(PECL quickhash >= Unknown)

QuickHashIntStringHash::__construct — Creates a new QuickHashIntStringHash object

### Description

```
public QuickHashIntStringHash::__construct(int $size, int $options = 0)
```

This constructor creates a new QuickHashIntStringHash. The size is the amount of bucket lists to create. The more lists there are, the less collisions you will have. Options are also supported.

### Parameters

The amount of bucket lists to configure. The number you pass in will be automatically rounded up to the next power of two. It is also automatically limited from 64 to 4194304.

The options that you can pass in are: QuickHashIntStringHash::CHECK_FOR_DUPES, which makes sure no duplicate entries are added to the hash; QuickHashIntStringHash::DO_NOT_USE_ZEND_ALLOC to not use PHP's internal memory manager as well as one of QuickHashIntStringHash::HASHER_NO_HASH, QuickHashIntStringHash::HASHER_JENKINS1 or QuickHashIntStringHash::HASHER_JENKINS2. These last three configure which hashing algorithm to use. All options can be combined using bitmasks.

### Return Values

Returns a new QuickHashIntStringHash object.

### Examples

Example #1 QuickHashIntStringHash::__construct() example

```
<?php
var_dump( new QuickHashIntStringHash( 1024 ) );
var_dump( new QuickHashIntStringHash( 1024, QuickHashIntStringHash::CHECK_FOR_DUPES ) );
var_dump(
    new QuickHashIntStringHash(
        1024,
        QuickHashIntStringHash::DO_NOT_USE_ZEND_ALLOC | QuickHashIntStringHash::HASHER_JENKINS2
    )
);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/quickhashintstringhash.construct.php
