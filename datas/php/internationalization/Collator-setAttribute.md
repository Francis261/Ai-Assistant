# Collator::setAttribute

Source: https://devdocs.io/php/collator.setattribute

# collator_set_attribute

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Collator::setAttribute -- collator_set_attribute — Set collation attribute

### Description

Object-oriented style

```
public Collator::setAttribute(int $attribute, int $value): bool
```

Procedural style

```
collator_set_attribute(Collator $object, int $attribute, int $value): bool
```

### Parameters

Collator object.

Attribute.

Attribute value.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 collator_set_attribute() example

```
<?php
$coll = collator_create( 'en_CA' );
$val  = collator_get_attribute( $coll, Collator::NUMERIC_COLLATION );
if ($val === false) {
    // Handle error.
} elseif ($val === Collator::ON) {
    // Do something useful.
}
?>
```

### See Also

- Collator constants
- collator_get_attribute() - Get collation attribute value
- collator_set_strength() - Set collation strength

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/collator.setattribute.php
