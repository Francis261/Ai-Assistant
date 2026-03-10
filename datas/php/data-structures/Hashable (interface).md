# The Hashable interface

Source: https://devdocs.io/php/class.ds-hashable

## Introduction

(PECL ds >= 1.0.0)

Hashable is an interface which allows objects to be used as keys. It’s an alternative to spl_object_hash(), which determines an object’s hash based on its handle: this means that two objects that are considered equal by an implicit definition would not treated as equal because they are not the same instance.

hash() is used to return a scalar value to be used as the object's hash value, which determines where it goes in the hash table. While this value does not have to be unique, objects which are equal must have the same hash value.

equals() is used to determine if two objects are equal. It's guaranteed that the comparing object will be an instance of the same class as the subject.

## Interface synopsis

```
abstract public equals(object $obj): bool
```

```
abstract public hash(): mixed
```

## Table of Contents

- Ds\Hashable::equals — Determines whether an object is equal to the current instance
- Ds\Hashable::hash — Returns a scalar value to be used as a hash value

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.ds-hashable.php
