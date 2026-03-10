# The WeakReference class

Source: https://devdocs.io/php/class.weakreference

## Introduction

(PHP 7 >= 7.4.0, PHP 8)

Weak references allow the programmer to retain a reference to an object which does not prevent the object from being destroyed. They are useful for implementing cache like structures. If the original object has been destroyed, null will be returned when calling the WeakReference::get() method. The original object will be destroyed when the refcount for it drops to zero; creating weak references does not increase the refcount of the object being referenced.

WeakReferences cannot be serialized.

## Class synopsis

```
public static create(object $object): WeakReference
```

```
public get(): ?object
```

## WeakReference Examples

Example #1 Basic WeakReference Usage

```
<?php

$obj = new stdClass();
$weakref = WeakReference::create($obj);

var_dump($weakref->get());

unset($obj);

var_dump($weakref->get());

?>
```

The above example will output something similar to:

```
object(stdClass)#1 (0) {
}
NULL
```

## Changelog

## Table of Contents

- WeakReference::__construct — Constructor that disallows instantiation
- WeakReference::create — Create a new weak reference
- WeakReference::get — Get a weakly referenced Object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.weakreference.php
