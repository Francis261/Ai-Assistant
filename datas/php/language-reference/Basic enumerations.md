# Basic enumerations

Source: https://devdocs.io/php/language.enumerations.basics

## Basic enumerations

Enums are similar to classes, and share the same namespaces as classes, interfaces, and traits. They are also autoloadable the same way. An Enum defines a new type, which has a fixed, limited number of possible legal values.

```
<?php

enum Suit
{
    case Hearts;
    case Diamonds;
    case Clubs;
    case Spades;
}
?>
```

This declaration creates a new enumerated type named Suit, which has four and only four legal values: Suit::Hearts, Suit::Diamonds, Suit::Clubs, and Suit::Spades. Variables may be assigned to one of those legal values. A function may be type checked against an enumerated type, in which case only values of that type may be passed.

```
<?php

function pick_a_card(Suit $suit)
{
    /* ... */
}

$val = Suit::Diamonds;

// OK
pick_a_card($val);

// OK
pick_a_card(Suit::Clubs);

// TypeError: pick_a_card(): Argument #1 ($suit) must be of type Suit, string given
pick_a_card('Spades');
?>
```

An Enumeration may have zero or more case definitions, with no maximum. A zero-case enum is syntactically valid, if rather useless.

For Enumeration cases, the same syntax rules apply as to any label in PHP, see Constants.

By default, cases are not intrinsically backed by a scalar value. That is, Suit::Hearts is not equal to "0". Instead, each case is backed by a singleton object of that name. That means that:

```
<?php

$a = Suit::Spades;
$b = Suit::Spades;

$a === $b; // true

$a instanceof Suit;  // true
?>
```

It also means that enum values are never < or > each other, since those comparisons are not meaningful on objects. Those comparisons will always return false when working with enum values.

This type of case, with no related data, is called a "Pure Case." An Enum that contains only Pure Cases is called a Pure Enum.

All Pure Cases are implemented as instances of their enum type. The enum type is represented internally as a class.

All Cases have a read-only property, name, that is the case-sensitive name of the case itself.

```
<?php

print Suit::Spades->name;
// prints "Spades"
?>
```

It is also possible to use the defined() and constant() functions to check for the existence of or read an enum case if the name is obtained dynamically. This is, however, discouraged as using Backed enums should work for most use cases.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.enumerations.basics.php
