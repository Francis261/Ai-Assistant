# Enumeration static methods

Source: https://devdocs.io/php/language.enumerations.static-methods

## Enumeration static methods

Enumerations may also have static methods. The use for static methods on the enumeration itself is primarily for alternative constructors. E.g.:

```
<?php

enum Size
{
    case Small;
    case Medium;
    case Large;

    public static function fromLength(int $cm): self
    {
        return match(true) {
            $cm < 50 => self::Small,
            $cm < 100 => self::Medium,
            default => self::Large,
        };
    }
}
?>
```

Static methods may be public, private, or protected, although in practice private and protected are equivalent as inheritance is not allowed.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.enumerations.static-methods.php
