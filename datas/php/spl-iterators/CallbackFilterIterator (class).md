# The CallbackFilterIterator class

Source: https://devdocs.io/php/class.callbackfilteriterator

## Introduction

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

## Class synopsis

```
public accept(): bool
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
 * Callback for CallbackFilterIterator
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

Any callable may be used; such as a string containing a function name, an array for a method, or an anonymous function.

Example #2 Callback basic examples

```
<?php

$dir = new FilesystemIterator(__DIR__);

// Filter large files ( > 100MB)
function is_large_file($current) {
    return $current->isFile() && $current->getSize() > 104857600;
}
$large_files = new CallbackFilterIterator($dir, 'is_large_file');

// Filter directories
$files = new CallbackFilterIterator($dir, function ($current, $key, $iterator) {
    return $current->isDir() && ! $iterator->isDot();
});

?>
```

## Table of Contents

- CallbackFilterIterator::accept — Calls the callback with the current value, the current key and the inner iterator as arguments
- CallbackFilterIterator::__construct — Create a filtered iterator from another iterator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.callbackfilteriterator.php
