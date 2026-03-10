# RecursiveRegexIterator::hasChildren

Source: https://devdocs.io/php/recursiveregexiterator.haschildren

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

RecursiveRegexIterator::hasChildren — Returns whether an iterator can be obtained for the current entry

### Description

```
public RecursiveRegexIterator::hasChildren(): bool
```

Returns whether an iterator can be obtained for the current entry. This iterator can be obtained via RecursiveRegexIterator::getChildren().

### Parameters

This function has no parameters.

### Return Values

Returns true if an iterator can be obtained for the current entry, otherwise returns false.

### Examples

Example #1 RecursiveRegexIterator::hasChildren() example

```
<?php
$rArrayIterator = new RecursiveArrayIterator(array('test1', array('tet3', 'test4', 'test5')));
$rRegexIterator = new RecursiveRegexIterator($rArrayIterator, '/^test/',
    RecursiveRegexIterator::ALL_MATCHES);

foreach ($rRegexIterator as $value) {
    var_dump($rRegexIterator->hasChildren());
}
?>
```

The above example will output:

```
bool(false)
bool(true)
```

### See Also

- RecursiveRegexIterator::getChildren() - Returns an iterator for the current entry

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/recursiveregexiterator.haschildren.php
