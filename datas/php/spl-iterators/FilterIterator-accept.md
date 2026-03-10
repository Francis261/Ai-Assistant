# FilterIterator::accept

Source: https://devdocs.io/php/filteriterator.accept

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

FilterIterator::accept — Check whether the current element of the iterator is acceptable

### Description

```
public FilterIterator::accept(): bool
```

Returns whether the current element of the iterator is acceptable through this filter.

### Parameters

This function has no parameters.

### Return Values

true if the current element is acceptable, otherwise false.

### Examples

Example #1 FilterIterator::accept() example

```
<?php
// This iterator filters all values with less than 10 characters
class LengthFilterIterator extends FilterIterator {

    public function accept() {
        // Only accept strings with a length of 10 and greater
        return strlen(parent::current()) >= 10;
    }

}

$arrayIterator = new ArrayIterator(array('test1', 'more than 10 characters'));
$lengthFilter = new LengthFilterIterator($arrayIterator);

foreach ($lengthFilter as $value) {
    echo $value . "\n";
}
?>
```

The above example will output:

```
more than 10 characters
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/filteriterator.accept.php
