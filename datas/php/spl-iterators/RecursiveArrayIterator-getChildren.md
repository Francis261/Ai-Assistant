# RecursiveArrayIterator::getChildren

Source: https://devdocs.io/php/recursivearrayiterator.getchildren

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

RecursiveArrayIterator::getChildren — Returns an iterator for the current entry if it is an array or an object

### Description

```
public RecursiveArrayIterator::getChildren(): ?RecursiveArrayIterator
```

Returns an iterator for the current iterator entry.

### Parameters

This function has no parameters.

### Return Values

An iterator for the current entry, if it is an array or object; or null on failure.

### Errors/Exceptions

An InvalidArgumentException will be thrown if the current entry does not contain an array or an object.

### Examples

Example #1 RecursiveArrayIterator::getChildren() example

```
<?php
$fruits = array("a" => "lemon", "b" => "orange", array("a" => "apple", "p" => "pear"));

$iterator = new RecursiveArrayIterator($fruits);

while ($iterator->valid()) {

    if ($iterator->hasChildren()) {
        // print all children
        foreach ($iterator->getChildren() as $key => $value) {
            echo $key . ' : ' . $value . "\n";
        }
    } else {
        echo "No children.\n";
    }

    $iterator->next();
}
?>
```

The above example will output:

```
No children.
No children.
a : apple
p : pear
```

### See Also

- RecursiveArrayIterator::hasChildren() - Returns whether current entry is an array or an object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/recursivearrayiterator.getchildren.php
