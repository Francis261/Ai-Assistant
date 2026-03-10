# The WeakMap class

Source: https://devdocs.io/php/class.weakmap

## Introduction

(PHP 8)

A WeakMap is map (or dictionary) that accepts objects as keys. However, unlike the otherwise similar SplObjectStorage, an object in a key of WeakMap does not contribute toward the object's reference count. That is, if at any point the only remaining reference to an object is the key of a WeakMap, the object will be garbage collected and removed from the WeakMap. Its primary use case is for building caches of data derived from an object that do not need to live longer than the object.

WeakMap implements ArrayAccess, Traversable (via IteratorAggregate), and Countable, so in most cases it can be used in the same fashion as an associative array.

## Class synopsis

```
public count(): int
```

```
public getIterator(): Iterator
```

```
public offsetExists(object $object): bool
```

```
public offsetGet(object $object): mixed
```

```
public offsetSet(object $object, mixed $value): void
```

```
public offsetUnset(object $object): void
```

## Examples

Example #1 Weakmap usage example

```
<?php
$wm = new WeakMap();

$o = new stdClass;

class A {
    public function __destruct() {
        echo "Dead!\n";
    }
}

$wm[$o] = new A;

var_dump(count($wm));
echo "Unsetting...\n";
unset($o);
echo "Done\n";
var_dump(count($wm));
```

The above example will output:

```
int(1)
Unsetting...
Dead!
Done
int(0)
```

## Table of Contents

- WeakMap::count — Counts the number of live entries in the map
- WeakMap::getIterator — Retrieve an external iterator
- WeakMap::offsetExists — Checks whether a certain object is in the map
- WeakMap::offsetGet — Returns the value pointed to by a certain object
- WeakMap::offsetSet — Updates the map with a new key-value pair
- WeakMap::offsetUnset — Removes an entry from the map

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.weakmap.php
