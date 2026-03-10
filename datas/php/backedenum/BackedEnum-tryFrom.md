# BackedEnum::tryFrom

Source: https://devdocs.io/php/backedenum.tryfrom

(PHP 8 >= 8.1.0)

BackedEnum::tryFrom — Maps a scalar to an enum instance or null

### Description

```
public static BackedEnum::tryFrom(int|string $value): ?static
```

The tryFrom() method translates a string or int into the corresponding Enum case, if any. If there is no matching case defined, it will return null.

### Parameters

The scalar value to map to an enum case.

### Return Values

A case instance of this enumeration, or null if not found.

### Examples

Example #1 Basic usage

The following example illustrates how enum cases are returned.

```
<?php
enum Suit: string
{
    case Hearts = 'H';
    case Diamonds = 'D';
    case Clubs = 'C';
    case Spades = 'S';
}

$h = Suit::tryFrom('H');

var_dump($h);

$b = Suit::tryFrom('B') ?? Suit::Spades;

var_dump($b);
?>
```

The above example will output:

```
enum(Suit::Hearts)
enum(Suit::Spades)
```

### See Also

- UnitEnum::cases() - Generates a list of cases on an enum
- BackedEnum::from() - Maps a scalar to an enum instance

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/backedenum.tryfrom.php
