# BackedEnum::from

Source: https://devdocs.io/php/backedenum.from

(PHP 8 >= 8.1.0)

BackedEnum::from — Maps a scalar to an enum instance

### Description

```
public static BackedEnum::from(int|string $value): static
```

The from() method translates a string or int into the corresponding Enum case, if any. If there is no matching case defined, it will throw a ValueError.

### Parameters

The scalar value to map to an enum case.

### Return Values

A case instance of this enumeration.

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

$h = Suit::from('H');

var_dump($h);

$b = Suit::from('B');
?>
```

The above example will output:

```
enum(Suit::Hearts)

Fatal error: Uncaught ValueError: "B" is not a valid backing value for enum "Suit" in /file.php:15
```

### See Also

- UnitEnum::cases() - Generates a list of cases on an enum
- BackedEnum::tryFrom() - Maps a scalar to an enum instance or null

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/backedenum.from.php
