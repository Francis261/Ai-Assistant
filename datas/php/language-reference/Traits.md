# Traits

Source: https://devdocs.io/php/language.enumerations.traits

## Traits

Enumerations may leverage traits, which will behave the same as on classes. The caveat is that traits used in an enum must not contain properties. They may only include methods, static methods, and constants. A trait with properties will result in a fatal error.

```
<?php

interface Colorful
{
    public function color(): string;
}

trait Rectangle
{
    public function shape(): string {
        return "Rectangle";
    }
}

enum Suit implements Colorful
{
    use Rectangle;

    case Hearts;
    case Diamonds;
    case Clubs;
    case Spades;

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

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.enumerations.traits.php
