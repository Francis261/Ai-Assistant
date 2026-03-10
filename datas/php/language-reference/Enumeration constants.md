# Enumeration constants

Source: https://devdocs.io/php/language.enumerations.constants

## Enumeration constants

Enumerations may include constants, which may be public, private, or protected, although in practice private and protected are equivalent as inheritance is not allowed.

An enum constant may refer to an enum case:

```
<?php

enum Size
{
    case Small;
    case Medium;
    case Large;

    public const Huge = self::Large;
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.enumerations.constants.php
