# QuickHashIntSet::__construct

Source: https://devdocs.io/php/quickhashintset.construct

(PECL quickhash >= Unknown)

QuickHashIntSet::__construct — Creates a new QuickHashIntSet object

### Description

```
public QuickHashIntSet::__construct(int $size, int $options = ?)
```

This constructor creates a new QuickHashIntSet. The size is the amount of bucket lists to create. The more lists there are, the less collisions you will have. Options are also supported.

### Parameters

The amount of bucket lists to configure. The number you pass in will be automatically rounded up to the next power of two. It is also automatically limited from 4 to 4194304.

The options that you can pass in are: QuickHashIntSet::CHECK_FOR_DUPES, which makes sure no duplicate entries are added to the set; QuickHashIntSet::DO_NOT_USE_ZEND_ALLOC to not use PHP's internal memory manager as well as one of QuickHashIntSet::HASHER_NO_HASH, QuickHashIntSet::HASHER_JENKINS1 or QuickHashIntSet::HASHER_JENKINS2. These last three configure which hashing algorithm to use. All options can be combined using bitmasks.

### Return Values

Returns a new QuickHashIntSet object.

### Examples

Example #1 QuickHashIntSet::__construct() example

```
<?php
var_dump( new QuickHashIntSet( 1024 ) );
var_dump( new QuickHashIntSet( 1024, QuickHashIntSet::CHECK_FOR_DUPES ) );
var_dump(
    new QuickHashIntSet(
        1024,
        QuickHashIntSet::DO_NOT_USE_ZEND_ALLOC | QuickHashIntSet::HASHER_JENKINS2
    )
);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/quickhashintset.construct.php
