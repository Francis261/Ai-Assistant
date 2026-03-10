# The SeekableIterator interface

Source: https://devdocs.io/php/class.seekableiterator

## Introduction

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

The Seekable iterator.

## Interface synopsis

```
public seek(int $offset): void
```

```
public Iterator::current(): mixed
```

```
public Iterator::key(): mixed
```

```
public Iterator::next(): void
```

```
public Iterator::rewind(): void
```

```
public Iterator::valid(): bool
```

## Examples

Example #1 Basic usage

This example demonstrates creating a custom SeekableIterator, seeking to a position and handling an invalid position.

```
<?php
class MySeekableIterator implements SeekableIterator {

    private $position;

    private $array = array(
        "first element",
        "second element",
        "third element",
        "fourth element"
    );

    /* Method required for SeekableIterator interface */

    public function seek($position) {
      if (!isset($this->array[$position])) {
          throw new OutOfBoundsException("invalid seek position ($position)");
      }

      $this->position = $position;
    }

    /* Methods required for Iterator interface */
    
    public function rewind() {
        $this->position = 0;
    }

    public function current() {
        return $this->array[$this->position];
    }

    public function key() {
        return $this->position;
    }

    public function next() {
        ++$this->position;
    }

    public function valid() {
        return isset($this->array[$this->position]);
    }
}

try {

    $it = new MySeekableIterator;
    echo $it->current(), "\n";
    
    $it->seek(2);
    echo $it->current(), "\n";
    
    $it->seek(1);
    echo $it->current(), "\n";
    
    $it->seek(10);
    
} catch (OutOfBoundsException $e) {
    echo $e->getMessage();
}
?>
```

The above example will output something similar to:

```
first element
third element
second element
invalid seek position (10)
```

## Table of Contents

- SeekableIterator::seek — Seeks to a position

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.seekableiterator.php
