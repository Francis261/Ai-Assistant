# The SplFixedArray class

Source: https://devdocs.io/php/class.splfixedarray

## Introduction

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

The SplFixedArray class provides the main functionalities of array. The main difference between a SplFixedArray and a normal PHP array is that the SplFixedArray must be resized manually and allows only integers within the range as indexes. The advantage is that it uses less memory than a standard array.

## Class synopsis

```
public count(): int
```

```
public current(): mixed
```

```
public static fromArray(array $array, bool $preserveKeys = true): SplFixedArray
```

```
public getIterator(): Iterator
```

```
public getSize(): int
```

```
public jsonSerialize(): array
```

```
public key(): int
```

```
public next(): void
```

```
public offsetExists(int $index): bool
```

```
public offsetGet(int $index): mixed
```

```
public offsetSet(int $index, mixed $value): void
```

```
public offsetUnset(int $index): void
```

```
public rewind(): void
```

```
public __serialize(): array
```

```
public setSize(int $size): true
```

```
public toArray(): array
```

```
public __unserialize(array $data): void
```

```
public valid(): bool
```

```
#[\Deprecated] 
 public __wakeup(): void
```

## Changelog

## Examples

Example #1 SplFixedArray usage example

```
<?php
// Initialize the array with a fixed length
$array = new SplFixedArray(5);

$array[1] = 2;
$array[4] = "foo";

var_dump($array[0]); // NULL
var_dump($array[1]); // int(2)

var_dump($array["4"]); // string(3) "foo"

// Increase the size of the array to 10
$array->setSize(10);

$array[9] = "asdf";

// Shrink the array to a size of 2
$array->setSize(2);

// The following lines throw a RuntimeException: Index invalid or out of range
try {
    var_dump($array["non-numeric"]);
} catch(RuntimeException $re) {
    echo "RuntimeException: ".$re->getMessage()."\n";
}

try {
    var_dump($array[-1]);
} catch(RuntimeException $re) {
    echo "RuntimeException: ".$re->getMessage()."\n";
}

try {
    var_dump($array[5]);
} catch(RuntimeException $re) {
    echo "RuntimeException: ".$re->getMessage()."\n";
}
?>
```

The above example will output:

```
NULL
int(2)
string(3) "foo"
RuntimeException: Index invalid or out of range
RuntimeException: Index invalid or out of range
RuntimeException: Index invalid or out of range
```

## Table of Contents

- SplFixedArray::__construct — Constructs a new fixed array
- SplFixedArray::count — Returns the size of the array
- SplFixedArray::current — Return current array entry
- SplFixedArray::fromArray — Import a PHP array in a SplFixedArray instance
- SplFixedArray::getIterator — Retrieve the iterator to go through the array
- SplFixedArray::getSize — Gets the size of the array
- SplFixedArray::jsonSerialize — Returns a representation that can be converted to JSON
- SplFixedArray::key — Return current array index
- SplFixedArray::next — Move to next entry
- SplFixedArray::offsetExists — Returns whether the requested index exists
- SplFixedArray::offsetGet — Returns the value at the specified index
- SplFixedArray::offsetSet — Sets a new value at a specified index
- SplFixedArray::offsetUnset — Unsets the value at the specified $index
- SplFixedArray::rewind — Rewind iterator back to the start
- SplFixedArray::__serialize — Serializes the SplFixedArray object
- SplFixedArray::setSize — Change the size of an array
- SplFixedArray::toArray — Returns a PHP array from the fixed array
- SplFixedArray::__unserialize — Deserializes the data parameter into an SplFixedArray object
- SplFixedArray::valid — Check whether the array contains more elements
- SplFixedArray::__wakeup — Reinitialises the array after being unserialised

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.splfixedarray.php
