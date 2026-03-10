# Value listing

Source: https://devdocs.io/php/language.enumerations.listing

## Value listing

Both Pure Enums and Backed Enums implement an internal interface named UnitEnum. UnitEnum includes a static method cases(). cases() returns a packed array of all defined Cases in the order of declaration.

```
<?php

Suit::cases();
// Produces: [Suit::Hearts, Suit::Diamonds, Suit::Clubs, Suit::Spades]
?>
```

Manually defining a cases() method on an Enum will result in a fatal error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.enumerations.listing.php
