# Collator::getStrength

Source: https://devdocs.io/php/collator.getstrength

# collator_get_strength

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Collator::getStrength -- collator_get_strength — Get current collation strength

### Description

Object-oriented style

```
public Collator::getStrength(): int
```

Procedural style

```
collator_get_strength(Collator $object): int
```

### Parameters

Collator object.

### Return Values

Returns current collation strength, or false on failure.

### Examples

Example #1 collator_get_strength() example

```
<?php
$coll     = collator_create( 'en_US' );
$strength = collator_get_strength( $coll );
?>
```

### See Also

- Collator constants
- collator_set_strength() - Set collation strength
- collator_get_attribute() - Get collation attribute value

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/collator.getstrength.php
