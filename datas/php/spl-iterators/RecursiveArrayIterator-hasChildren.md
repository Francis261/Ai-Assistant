# RecursiveArrayIterator::hasChildren

Source: https://devdocs.io/php/recursivearrayiterator.haschildren

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

RecursiveArrayIterator::hasChildren — Returns whether current entry is an array or an object

### Description

```
public RecursiveArrayIterator::hasChildren(): bool
```

Returns whether current entry is an array or an object for which an iterator can be obtained via RecursiveArrayIterator::getChildren().

### Parameters

This function has no parameters.

### Return Values

Returns true if the current entry is an array or an object, otherwise false is returned.

### Examples

Example #1 RecursiveArrayIterator::hasChildren() example

```
<?php
$fruits = array("a" => "lemon", "b" => "orange", array("a" => "apple", "p" => "pear"));

$iterator = new RecursiveArrayIterator($fruits);

while ($iterator->valid()) {

    // Check if there are children
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

- RecursiveArrayIterator::getChildren() - Returns an iterator for the current entry if it is an array or an object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/recursivearrayiterator.haschildren.php
