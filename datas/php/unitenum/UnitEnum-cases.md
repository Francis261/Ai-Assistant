# UnitEnum::cases

Source: https://devdocs.io/php/unitenum.cases

(PHP 8 >= 8.1.0)

UnitEnum::cases — Generates a list of cases on an enum

### Description

```
public static UnitEnum::cases(): array
```

This method will return a packed array of all cases in an enumeration, in order of declaration.

### Parameters

This function has no parameters.

### Return Values

An array of all defined cases of this enumeration, in order of declaration.

### Examples

Example #1 Basic usage

The following example illustrates how enum cases are returned.

```
<?php
enum Suit
{
    case Hearts;
    case Diamonds;
    case Clubs;
    case Spades;
}

var_dump(Suit::cases());
?>
```

The above example will output:

```
array(4) {
    [0]=>
    enum(Suit::Hearts)
    [1]=>
    enum(Suit::Diamonds)
    [2]=>
    enum(Suit::Clubs)
    [3]=>
    enum(Suit::Spades)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/unitenum.cases.php
