# RecursiveRegexIterator::getChildren

Source: https://devdocs.io/php/recursiveregexiterator.getchildren

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

RecursiveRegexIterator::getChildren — Returns an iterator for the current entry

### Description

```
public RecursiveRegexIterator::getChildren(): RecursiveRegexIterator
```

Returns an iterator for the current iterator entry.

### Parameters

This function has no parameters.

### Return Values

An iterator for the current entry, if it can be iterated over by the inner iterator.

### Errors/Exceptions

An InvalidArgumentException will be thrown if the current entry does not contain a value that can be iterated over by the inner iterator.

### Examples

Example #1 RecursiveRegexIterator::getChildren() example

```
<?php
$rArrayIterator = new RecursiveArrayIterator(array('test1', array('tet3', 'test4', 'test5')));
$rRegexIterator = new RecursiveRegexIterator($rArrayIterator, '/^test/',
    RecursiveRegexIterator::ALL_MATCHES);

foreach ($rRegexIterator as $key1 => $value1) {

    if ($rRegexIterator->hasChildren()) {

        // print all children
        echo "Children: ";
        foreach ($rRegexIterator->getChildren() as $key => $value) {
            echo $value . " ";
        }
        echo "\n";
    } else {
        echo "No children\n";
    }

}
?>
```

The above example will output:

```
No children
Children: test4 test5
```

### See Also

- RecursiveRegexIterator::hasChildren() - Returns whether an iterator can be obtained for the current entry

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/recursiveregexiterator.getchildren.php
