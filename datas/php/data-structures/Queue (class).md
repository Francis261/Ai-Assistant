# The Queue class

Source: https://devdocs.io/php/class.ds-queue

## Introduction

(PECL ds >= 1.0.0)

A Queue is a “first in, first out” or “FIFO” collection that only allows access to the value at the front of the queue and iterates in that order, destructively.

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
public copy(): Ds\Queue
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

## Predefined Constants

## Changelog

## Table of Contents

- Ds\Queue::allocate — Allocates enough memory for a required capacity
- Ds\Queue::capacity — Returns the current capacity
- Ds\Queue::clear — Removes all values
- Ds\Queue::__construct — Creates a new instance
- Ds\Queue::copy — Returns a shallow copy of the queue
- Ds\Queue::count — Returns the number of values in the queue
- Ds\Queue::isEmpty — Returns whether the queue is empty
- Ds\Queue::jsonSerialize — Returns a representation that can be converted to JSON
- Ds\Queue::peek — Returns the value at the front of the queue
- Ds\Queue::pop — Removes and returns the value at the front of the queue
- Ds\Queue::push — Pushes values into the queue
- Ds\Queue::toArray — Converts the queue to an array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.ds-queue.php
