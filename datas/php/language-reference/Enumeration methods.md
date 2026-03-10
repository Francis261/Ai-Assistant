# Enumeration methods

Source: https://devdocs.io/php/language.enumerations.methods

## Enumeration methods

Enums (both Pure Enums and Backed Enums) may contain methods, and may implement interfaces. If an Enum implements an interface, then any type check for that interface will also accept all cases of that Enum.

```
<?php

interface Colorful
{
    public function color(): string;
}

enum Suit implements Colorful
{
    case Hearts;
    case Diamonds;
    case Clubs;
    case Spades;

    // Fulfills the interface contract.
    public function color(): string
    {
        return match($this) {
            Suit::Hearts, Suit::Diamonds => 'Red',
            Suit::Clubs, Suit::Spades => 'Black',
        };
    }

    // Not part of an interface; that's fine.
    public function shape(): string
    {
        return "Rectangle";
    }
}

function paint(Colorful $c)
{
   /* ... */
}

paint(Suit::Clubs);  // Works

print Suit::Diamonds->shape(); // prints "Rectangle"
?>
```

In this example, all four instances of Suit have two methods, color() and shape(). As far as calling code and type checks are concerned, they behave exactly the same as any other object instance.

On a Backed Enum, the interface declaration goes after the backing type declaration.

```
<?php

interface Colorful
{
    public function color(): string;
}

enum Suit: string implements Colorful
{
    case Hearts = 'H';
    case Diamonds = 'D';
    case Clubs = 'C';
    case Spades = 'S';

    // Fulfills the interface contract.
    public function color(): string
    {
        return match($this) {
            Suit::Hearts, Suit::Diamonds => 'Red',
            Suit::Clubs, Suit::Spades => 'Black',
        };
    }
}
?>
```

Inside a method, the $this variable is defined and refers to the Case instance.

Methods may be arbitrarily complex, but in practice will usually return a static value or match on $this to provide different results for different cases.

Note that in this case it would be a better data modeling practice to also define a SuitColor Enum Type with values Red and Black and return that instead. However, that would complicate this example.

The above hierarchy is logically similar to the following class structure (although this is not the actual code that runs):

```
<?php

interface Colorful
{
    public function color(): string;
}

final class Suit implements UnitEnum, Colorful
{
    public const Hearts = new self('Hearts');
    public const Diamonds = new self('Diamonds');
    public const Clubs = new self('Clubs');
    public const Spades = new self('Spades');

    private function __construct(public readonly string $name) {}

    public function color(): string
    {
        return match($this) {
            Suit::Hearts, Suit::Diamonds => 'Red',
            Suit::Clubs, Suit::Spades => 'Black',
        };
    }

    public function shape(): string
    {
        return "Rectangle";
    }

    public static function cases(): array
    {
        // Illegal method, because manually defining a cases() method on an Enum is disallowed.
        // See also "Value listing" section.
    }
}
?>
```

Methods may be public, private, or protected, although in practice private and protected are equivalent as inheritance is not allowed.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.enumerations.methods.php
