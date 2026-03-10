# Relative (class) types

Source: https://devdocs.io/php/language.types.relative-class-types

## Relative class types

These types declarations can only be used within classes.

### self

The value must be an instanceof the same class as the one in which the type declaration is used.

### parent

The value must be an instanceof a parent of the class in which the type declaration is used.

### static

static is a return-only type which requires that the value returned must be an instanceof the same class as the one the method is called in. Available as of PHP 8.0.0.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.types.relative-class-types.php
