# The SplObjectStorage class

Source: https://devdocs.io/php/class.splobjectstorage

## Introduction

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

The SplObjectStorage class provides a map from objects to data or, by ignoring data, an object set. This dual purpose can be useful in many cases involving the need to uniquely identify objects.

## Class synopsis

```
public addAll(SplObjectStorage $storage): int
```

```
#[\Deprecated] 
 public attach(object $object, mixed $info = null): void
```

```
#[\Deprecated] 
 public contains(object $object): bool
```

```
public count(int $mode = COUNT_NORMAL): int
```

```
public current(): object
```

```
#[\Deprecated] 
 public detach(object $object): void
```

```
public getHash(object $object): string
```

```
public getInfo(): mixed
```

```
public key(): int
```

```
public next(): void
```

```
public offsetExists(object $object): bool
```

```
public offsetGet(object $object): mixed
```

```
public offsetSet(object $object, mixed $info = null): void
```

```
public offsetUnset(object $object): void
```

```
public removeAll(SplObjectStorage $storage): int
```

```
public removeAllExcept(SplObjectStorage $storage): int
```

```
public rewind(): void
```

```
public seek(int $offset): void
```

```
public serialize(): string
```

```
public setInfo(mixed $info): void
```

```
public unserialize(string $data): void
```

```
public valid(): bool
```

## Examples

Example #1 SplObjectStorage as a set

```
<?php
// As an object set
$s = new SplObjectStorage();

$o1 = new stdClass;
$o2 = new stdClass;
$o3 = new stdClass;

$s->attach($o1);
$s->attach($o2);

var_dump($s->contains($o1));
var_dump($s->contains($o2));
var_dump($s->contains($o3));

$s->detach($o2);

var_dump($s->contains($o1));
var_dump($s->contains($o2));
var_dump($s->contains($o3));
?>
```

The above example will output:

```
bool(true)
bool(true)
bool(false)
bool(true)
bool(false)
bool(false)
```

Example #2 SplObjectStorage as a map

```
<?php
// As a map from objects to data
$s = new SplObjectStorage();

$o1 = new stdClass;
$o2 = new stdClass;
$o3 = new stdClass;

$s[$o1] = "data for object 1";
$s[$o2] = array(1,2,3);

if (isset($s[$o2])) {
    var_dump($s[$o2]);
}
?>
```

The above example will output:

```
array(3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
}
```

## Changelog

## Table of Contents

- SplObjectStorage::addAll — Adds all objects from another storage
- SplObjectStorage::attach — Adds an object in the storage
- SplObjectStorage::contains — Checks if the storage contains a specific object
- SplObjectStorage::count — Returns the number of objects in the storage
- SplObjectStorage::current — Returns the current storage entry
- SplObjectStorage::detach — Removes an object from the storage
- SplObjectStorage::getHash — Calculate a unique identifier for the contained objects
- SplObjectStorage::getInfo — Returns the data associated with the current iterator entry
- SplObjectStorage::key — Returns the index at which the iterator currently is
- SplObjectStorage::next — Move to the next entry
- SplObjectStorage::offsetExists — Checks whether an object exists in the storage
- SplObjectStorage::offsetGet — Returns the data associated with an object
- SplObjectStorage::offsetSet — Associates data to an object in the storage
- SplObjectStorage::offsetUnset — Removes an object from the storage
- SplObjectStorage::removeAll — Removes objects contained in another storage from the current storage
- SplObjectStorage::removeAllExcept — Removes all objects except for those contained in another storage from the current storage
- SplObjectStorage::rewind — Rewind the iterator to the first storage element
- SplObjectStorage::seek — Seeks iterator to a position
- SplObjectStorage::serialize — Serializes the storage
- SplObjectStorage::setInfo — Sets the data associated with the current iterator entry
- SplObjectStorage::unserialize — Unserializes a storage from its string representation
- SplObjectStorage::valid — Returns if the current iterator entry is valid

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.splobjectstorage.php
