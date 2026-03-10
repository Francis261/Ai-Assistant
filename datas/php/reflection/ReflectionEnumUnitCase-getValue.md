# ReflectionEnumUnitCase::getValue

Source: https://devdocs.io/php/reflectionenumunitcase.getvalue

(PHP 8 >= 8.1.0)

ReflectionEnumUnitCase::getValue — Gets the enum case object described by this reflection object

### Description

```
public ReflectionEnumUnitCase::getValue(): UnitEnum
```

Returns the enum case object described by this reflection object.

### Parameters

This function has no parameters.

### Return Values

The enum case object described by this reflection object.

### Examples

Example #1 ReflectionEnum::getValue() example

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

$rCase = $rEnum->getCase('Diamonds');

var_dump($rCase->getValue());
?>
```

The above example will output:

```
enum(Suit::Diamonds)
```

### See Also

- Enumerations

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionenumunitcase.getvalue.php
