# QuickHashStringIntHash::__construct

Source: https://devdocs.io/php/quickhashstringinthash.construct

(No version information available, might only be in Git)

QuickHashStringIntHash::__construct — Creates a new QuickHashStringIntHash object

### Description

```
public QuickHashStringIntHash::__construct(int $size, int $options = 0)
```

This constructor creates a new QuickHashStringIntHash. The size is the amount of bucket lists to create. The more lists there are, the less collisions you will have. Options are also supported.

### Parameters

The amount of bucket lists to configure. The number you pass in will be automatically rounded up to the next power of two. It is also automatically limited from 64 to 4194304.

The options that you can pass in are: QuickHashStringIntHash::CHECK_FOR_DUPES, which makes sure no duplicate entries are added to the hash and QuickHashStringIntHash::DO_NOT_USE_ZEND_ALLOC to not use PHP's internal memory manager.

### Return Values

Returns a new QuickHashStringIntHash object.

### Examples

Example #1 QuickHashStringIntHash::__construct() example

```
<?php
var_dump( new QuickHashStringIntHash( 1024 ) );
var_dump( new QuickHashStringIntHash( 1024, QuickHashStringIntHash::CHECK_FOR_DUPES ) );
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/quickhashstringinthash.construct.php
