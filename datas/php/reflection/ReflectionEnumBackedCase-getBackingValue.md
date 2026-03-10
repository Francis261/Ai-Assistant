# ReflectionEnumBackedCase::getBackingValue

Source: https://devdocs.io/php/reflectionenumbackedcase.getbackingvalue

(PHP 8 >= 8.1.0)

ReflectionEnumBackedCase::getBackingValue — Gets the scalar value backing this Enum case

### Description

```
public ReflectionEnumBackedCase::getBackingValue(): int|string
```

Gets the scalar value backing this Enum case.

### Parameters

This function has no parameters.

### Return Values

The scalar equivalent of this enum case.

### Examples

Example #1 ReflectionEnum::getBackingValue() example

```
<?php
enum Suit: string
{
    case Hearts = 'H';
    case Diamonds = 'D';
    case Clubs = 'C';
    case Spades = 'S';
}

$rEnum = new ReflectionEnum(Suit::class);

$rCase = $rEnum->getCase('Spades');

var_dump($rCase->getBackingValue());
?>
```

The above example will output:

```
string(1) "S"
```

### See Also

- Enumerations

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionenumbackedcase.getbackingvalue.php
