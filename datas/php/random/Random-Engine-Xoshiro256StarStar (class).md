# The Random\Engine\Xoshiro256StarStar class

Source: https://devdocs.io/php/class.random-engine-xoshiro256starstar

## Introduction

(PHP 8 >= 8.2.0)

Implements the » xoshiro256** algorithm.

## Class synopsis

```
public __debugInfo(): array
```

```
public generate(): string
```

```
public jump(): void
```

```
public jumpLong(): void
```

```
public __serialize(): array
```

```
public __unserialize(array $data): void
```

## Table of Contents

- Random\Engine\Xoshiro256StarStar::__construct — Constructs a new xoshiro256** engine
- Random\Engine\Xoshiro256StarStar::__debugInfo — Returns the internal state of the engine
- Random\Engine\Xoshiro256StarStar::generate — Generate 64 bits of randomness
- Random\Engine\Xoshiro256StarStar::jump — Efficiently move the engine ahead by 2^128 steps
- Random\Engine\Xoshiro256StarStar::jumpLong — Efficiently move the engine ahead by 2^192 steps
- Random\Engine\Xoshiro256StarStar::__serialize — Serializes the Xoshiro256StarStar object
- Random\Engine\Xoshiro256StarStar::__unserialize — Deserializes the data parameter into a Xoshiro256StarStar object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.random-engine-xoshiro256starstar.php
