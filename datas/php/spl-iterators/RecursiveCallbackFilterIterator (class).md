# The RecursiveCallbackFilterIterator class

Source: https://devdocs.io/php/class.recursivecallbackfilteriterator

## Introduction

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

## Class synopsis

```
public getChildren(): RecursiveCallbackFilterIterator
```

```
public hasChildren(): bool
```

```
public CallbackFilterIterator::accept(): bool
```

```
public FilterIterator::accept(): bool
```

```
public FilterIterator::current(): mixed
```

```
public FilterIterator::key(): mixed
```

```
public FilterIterator::next(): void
```

```
public FilterIterator::rewind(): void
```

```
public FilterIterator::valid(): bool
```

```
public IteratorIterator::current(): mixed
```

```
public IteratorIterator::getInnerIterator(): ?Iterator
```

```
public IteratorIterator::key(): mixed
```

```
public IteratorIterator::next(): void
```

```
public IteratorIterator::rewind(): void
```

```
public IteratorIterator::valid(): bool
```

## Examples

The callback should accept up to three arguments: the current item, the current key and the iterator, respectively.

Example #1 Available callback arguments

```
<?php

/**
 * Callback for RecursiveCallbackFilterIterator
 *
 * @param $current   Current item's value
 * @param $key       Current item's key
 * @param $iterator  Iterator being filtered
 * @return boolean   TRUE to accept the current item, FALSE otherwise
 */
function my_callback($current, $key, $iterator) {
    // Your filtering code here
}

?>
```

Filtering a recursive iterator generally involves two conditions. The first is that, to allow recursion, the callback function should return true if the current iterator item has children. The second is the normal filter condition, such as a file size or extension check as in the example below.

Example #2 Recursive callback basic example

```
<?php

$dir = new RecursiveDirectoryIterator(__DIR__);

// Filter large files ( > 100MB)
$files = new RecursiveCallbackFilterIterator($dir, function ($current, $key, $iterator) {
    // Allow recursion
    if ($iterator->hasChildren()) {
        return TRUE;
    }
    // Check for large file
    if ($current->isFile() && $current->getSize() > 104857600) {
        return TRUE;
    }
    return FALSE;
});
 
foreach (new RecursiveIteratorIterator($files) as $file) {
    echo $file->getPathname() . PHP_EOL;
}

?>
```

## Table of Contents

- RecursiveCallbackFilterIterator::__construct — Create a RecursiveCallbackFilterIterator from a RecursiveIterator
- RecursiveCallbackFilterIterator::getChildren — Return the inner iterator's children contained in a RecursiveCallbackFilterIterator
- RecursiveCallbackFilterIterator::hasChildren — Check whether the inner iterator's current element has children

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.recursivecallbackfilteriterator.php
