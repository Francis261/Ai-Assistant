# NoRewindIterator::__construct

Source: https://devdocs.io/php/norewinditerator.construct

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

NoRewindIterator::__construct — Construct a NoRewindIterator

### Description

Constructs a NoRewindIterator.

### Parameters

The iterator being used.

### Examples

Example #1 NoRewindIterator::__construct() example

The second loop does not output because the iterator is only used once, as it does not rewind.

```
<?php
$fruit = array('apple', 'banana', 'cranberry');

$arr = new ArrayObject($fruit);
$it  = new NoRewindIterator($arr->getIterator());

echo "Fruit A:\n";
foreach( $it as $item ) {
    echo $item . "\n";
}

echo "Fruit B:\n";
foreach( $it as $item ) {
    echo $item . "\n";
}
?>
```

The above example will output something similar to:

```
Fruit A:
apple
banana
cranberry
Fruit B:
```

### See Also

- NoRewindIterator::valid() - Validates the iterator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/norewinditerator.construct.php
