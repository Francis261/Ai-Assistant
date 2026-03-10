# ReflectionEnum::getCases

Source: https://devdocs.io/php/reflectionenum.getcases

(PHP 8 >= 8.1.0)

ReflectionEnum::getCases — Returns a list of all cases on an Enum

### Description

```
public ReflectionEnum::getCases(): array
```

An Enum may contain zero or more cases. This method retrieves all defined cases, in lexical order (that is, the order they appear in the source code).

### Parameters

This function has no parameters.

### Return Values

An array of Enum reflection objects, one for each case in the Enum. For a Unit Enum, they will all be instances of ReflectionEnumUnitCase. For a Backed Enum, they will all be instances of ReflectionEnumBackedCase.

### Examples

Example #1 ReflectionEnum::getCases() example

```
<?php
enum Suit
{
    case Hearts;
    case Diamonds;
    case Clubs;
    case Spades;
}

$rEnum = new ReflectionEnum(Suit::class);

$cases = $rEnum->getCases();

foreach ($cases as $rCase) {
    var_dump($rCase->getValue());
}
?>
```

The above example will output:

```
enum(Suit::Hearts)
enum(Suit::Diamonds)
enum(Suit::Clubs)
enum(Suit::Spades)
```

### See Also

- Enumerations
- ReflectionEnum::getCase() - Returns a specific case of an Enum
- ReflectionEnum::isBacked() - Determines if an Enum is a Backed Enum

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionenum.getcases.php
