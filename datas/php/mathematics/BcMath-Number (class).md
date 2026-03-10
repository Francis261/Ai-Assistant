# The BcMath\Number class

Source: https://devdocs.io/php/class.bcmath-number

## Introduction

(PHP 8 >= 8.4.0)

A class for an arbitrary precision number. These objects support overloaded arithmetic and comparison operators.

Note: This class is not affected by the bcmath.scale INI directive set in php.ini.

Note: The behavior of an overloaded operator is the same as specifying null for the scale parameter on the corresponding method.

## Class synopsis

```
public add(BcMath\Number|string|int $num, ?int $scale = null): BcMath\Number
```

```
public ceil(): BcMath\Number
```

```
public compare(BcMath\Number|string|int $num, ?int $scale = null): int
```

```
public div(BcMath\Number|string|int $num, ?int $scale = null): BcMath\Number
```

```
public divmod(BcMath\Number|string|int $num, ?int $scale = null): array
```

```
public floor(): BcMath\Number
```

```
public mod(BcMath\Number|string|int $num, ?int $scale = null): BcMath\Number
```

```
public mul(BcMath\Number|string|int $num, ?int $scale = null): BcMath\Number
```

```
public pow(BcMath\Number|string|int $exponent, ?int $scale = null): BcMath\Number
```

```
public powmod(BcMath\Number|string|int $exponent, BcMath\Number|string|int $modulus, ?int $scale = null): BcMath\Number
```

```
public round(int $precision = 0, RoundingMode $mode = RoundingMode::HalfAwayFromZero): BcMath\Number
```

```
public __serialize(): array
```

```
public sqrt(?int $scale = null): BcMath\Number
```

```
public sub(BcMath\Number|string|int $num, ?int $scale = null): BcMath\Number
```

```
public __toString(): string
```

```
public __unserialize(array $data): void
```

## Properties

## Table of Contents

- BcMath\Number::add — Adds an arbitrary precision number
- BcMath\Number::ceil — Rounds up an arbitrary precision number
- BcMath\Number::compare — Compares two arbitrary precision numbers
- BcMath\Number::__construct — Creates a BcMath\Number object
- BcMath\Number::div — Divides by an arbitrary precision number
- BcMath\Number::divmod — Gets the quotient and modulus of an arbitrary precision number
- BcMath\Number::floor — Rounds down an arbitrary precision number
- BcMath\Number::mod — Gets the modulus of an arbitrary precision number
- BcMath\Number::mul — Multiplies an arbitrary precision number
- BcMath\Number::pow — Raises an arbitrary precision number
- BcMath\Number::powmod — Raises an arbitrary precision number, reduced by a specified modulus
- BcMath\Number::round — Rounds an arbitrary precision number
- BcMath\Number::__serialize — Serializes a BcMath\Number object
- BcMath\Number::sqrt — Gets the square root of an arbitrary precision number
- BcMath\Number::sub — Subtracts an arbitrary precision number
- BcMath\Number::__toString — Converts BcMath\Number to string
- BcMath\Number::__unserialize — Deserializes a data parameter into a BcMath\Number object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.bcmath-number.php
