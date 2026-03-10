# The Traversable interface

Source: https://devdocs.io/php/class.traversable

## Introduction

(PHP 5, PHP 7, PHP 8)

Interface to detect if a class is traversable using foreach.

Abstract base interface that cannot be implemented alone. Instead, it must be implemented by either IteratorAggregate or Iterator.

## Interface synopsis

This interface has no methods, its only purpose is to be the base interface for all traversable classes.

## Changelog

## Notes

Note:

Internal (built-in) classes that implement this interface can be used in a foreach construct and do not need to implement IteratorAggregate or Iterator.

Note:

Prior to PHP 7.4.0, this internal engine interface couldn't be implemented in PHP scripts. Either IteratorAggregate or Iterator must be used instead.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.traversable.php
