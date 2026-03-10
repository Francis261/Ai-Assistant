# The Random\Randomizer class

Source: https://devdocs.io/php/class.random-randomizer

## Introduction

(PHP 8 >= 8.2.0)

Provides a high-level API to the randomness provided by an Random\Engine.

## Class synopsis

```
public getBytes(int $length): string
```

```
public getBytesFromString(string $string, int $length): string
```

```
public getFloat(float $min, float $max, Random\IntervalBoundary $boundary = Random\IntervalBoundary::ClosedOpen): float
```

```
public getInt(int $min, int $max): int
```

```
public nextFloat(): float
```

```
public nextInt(): int
```

```
public pickArrayKeys(array $array, int $num): array
```

```
public __serialize(): array
```

```
public shuffleArray(array $array): array
```

```
public shuffleBytes(string $bytes): string
```

```
public __unserialize(array $data): void
```

## Properties

The low-level source of randomness for the Random\Randomizer’s methods.

## Table of Contents

- Random\Randomizer::__construct — Constructs a new Randomizer
- Random\Randomizer::getBytes — Get random bytes
- Random\Randomizer::getBytesFromString — Get random bytes from a source string
- Random\Randomizer::getFloat — Get a uniformly selected float
- Random\Randomizer::getInt — Get a uniformly selected integer
- Random\Randomizer::nextFloat — Get a float from the right-open interval [0.0, 1.0)
- Random\Randomizer::nextInt — Get a positive integer
- Random\Randomizer::pickArrayKeys — Select random array keys
- Random\Randomizer::__serialize — Serializes the Randomizer object
- Random\Randomizer::shuffleArray — Get a permutation of an array
- Random\Randomizer::shuffleBytes — Get a byte-wise permutation of a string
- Random\Randomizer::__unserialize — Deserializes the data parameter into a Randomizer object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.random-randomizer.php
