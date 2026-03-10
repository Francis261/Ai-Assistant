# NoRewindIterator::rewind

Source: https://devdocs.io/php/norewinditerator.rewind

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

NoRewindIterator::rewind — Prevents the rewind operation on the inner iterator

### Description

```
public NoRewindIterator::rewind(): void
```

Prevents the rewind operation on the inner iterator.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 NoRewindIterator::rewind() example

This example demonstrates that calling rewind on a NoRewindIterator object has no effect.

```
<?php
$fruits = array("lemon", "orange", "apple", "pear");

$noRewindIterator = new NoRewindIterator(new ArrayIterator($fruits));

echo $noRewindIterator->current() . "\n";
$noRewindIterator->next();
// now rewind the iterator (nothing should happen)
$noRewindIterator->rewind();
echo $noRewindIterator->current() . "\n";
?>
```

The above example will output:

```
lemon
orange
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/norewinditerator.rewind.php
