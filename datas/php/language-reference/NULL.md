# NULL

Source: https://devdocs.io/php/language.types.null

## NULL

The null type is PHP's unit type, i.e. it has only one value: null.

Undefined, and unset() variables will resolve to the value null.

### Syntax

There is only one value of type null, and that is the case-insensitive constant null.

```
<?php
$var = NULL;       
?>
```

### Casting to null

This feature has been DEPRECATED as of PHP 7.2.0, and REMOVED as of PHP 8.0.0. Relying on this feature is highly discouraged.

Casting a variable to null using (unset) $var will not remove the variable or unset its value. It will only return a null value.

### See Also

- is_null()
- unset()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.types.null.php
