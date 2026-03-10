# iterator_apply

Source: https://devdocs.io/php/function.iterator-apply

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

iterator_apply — Call a function for every element in an iterator

### Description

```
iterator_apply(Traversable $iterator, callable $callback, ?array $args = null): int
```

Calls a function for every element in an iterator.

### Parameters

The iterator object to iterate over.

The callback function to call on every element. This function only receives the given args, so it is nullary by default. If count($args) === 3, for instance, the callback function is ternary.

Note: The function must return true in order to continue iterating over the iterator.

An array of arguments; each element of args is passed to the callback callback as separate argument.

### Return Values

Returns the iteration count.

### Examples

Example #1 iterator_apply() example

```
<?php
function print_caps(Iterator $iterator) {
    echo strtoupper($iterator->current()) . "\n";
    return TRUE;
}

$it = new ArrayIterator(array("Apples", "Bananas", "Cherries"));
iterator_apply($it, "print_caps", array($it));
?>
```

The above example will output:

```
APPLES
BANANAS
CHERRIES
```

### See Also

- array_walk() - Apply a user supplied function to every member of an array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.iterator-apply.php
