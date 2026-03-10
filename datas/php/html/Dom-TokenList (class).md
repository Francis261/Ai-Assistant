# The Dom\TokenList class

Source: https://devdocs.io/php/class.dom-tokenlist

## Introduction

(PHP 8 >= 8.4.0)

Represents a set of tokens in an attribute (e.g. class names).

## Class synopsis

```
public add(string ...$tokens): void
```

```
public contains(string $token): bool
```

```
public count(): int
```

```
public getIterator(): Iterator
```

```
public item(int $index): ?string
```

```
public remove(string ...$tokens): void
```

```
public replace(string $token, string $newToken): bool
```

```
public supports(string $token): bool
```

```
public toggle(string $token, ?bool $force = null): bool
```

## Properties

## Notes

Note: The DOM extension uses UTF-8 encoding when working with methods or properties. The parser methods auto-detect the encoding or allow the caller to specify an encoding.

Note: Tokens in the list can be accessed by array syntax.

## Table of Contents

- Dom\TokenList::add — Adds the given tokens to the list
- Dom\TokenList::contains — Returns whether the list contains a given token
- Dom\TokenList::count — Returns the number of tokens in the list
- Dom\TokenList::getIterator — Returns an iterator over the token list
- Dom\TokenList::item — Returns a token from the list
- Dom\TokenList::remove — Removes the given tokens from the list
- Dom\TokenList::replace — Replaces a token in the list with another one
- Dom\TokenList::supports — Returns whether the given token is supported
- Dom\TokenList::toggle — Toggles the presence of a token in the list

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.dom-tokenlist.php
