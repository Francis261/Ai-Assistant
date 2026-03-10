# The Stack class

Source: https://devdocs.io/php/class.ds-stack

## Introduction

(PECL ds >= 1.0.0)

A Stack is a “last in, first out” or “LIFO” collection that only allows access to the value at the top of the structure and iterates in that order, destructively.

Uses a Ds\Vector internally.

## Class synopsis

```
public allocate(int $capacity): void
```

```
public capacity(): int
```

```
public clear(): void
```

```
public copy(): Ds\Stack
```

```
public isEmpty(): bool
```

```
public peek(): mixed
```

```
public pop(): mixed
```

```
public push(mixed ...$values): void
```

```
public toArray(): array
```

## Changelog

## Table of Contents

- Ds\Stack::allocate — Allocates enough memory for a required capacity
- Ds\Stack::capacity — Returns the current capacity
- Ds\Stack::clear — Removes all values
- Ds\Stack::__construct — Creates a new instance
- Ds\Stack::copy — Returns a shallow copy of the stack
- Ds\Stack::count — Returns the number of values in the stack
- Ds\Stack::isEmpty — Returns whether the stack is empty
- Ds\Stack::jsonSerialize — Returns a representation that can be converted to JSON
- Ds\Stack::peek — Returns the value at the top of the stack
- Ds\Stack::pop — Removes and returns the value at the top of the stack
- Ds\Stack::push — Pushes values onto the stack
- Ds\Stack::toArray — Converts the stack to an array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.ds-stack.php
