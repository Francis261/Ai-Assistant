# Collator::getAttribute

Source: https://devdocs.io/php/collator.getattribute

# collator_get_attribute

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Collator::getAttribute -- collator_get_attribute — Get collation attribute value

### Description

Object-oriented style

```
public Collator::getAttribute(int $attribute): int|false
```

Procedural style

```
collator_get_attribute(Collator $object, int $attribute): int|false
```

Get a value of an integer collator attribute.

### Parameters

Collator object.

Attribute to get value for.

### Return Values

Attribute value, or false on failure.

### Examples

Example #1 collator_get_attribute() example

```
<?php
$coll = collator_create( 'en_CA' );
$val = collator_get_attribute( $coll, Collator::NUMERIC_COLLATION );
if( $val === false )
{
    // Handle error.
}
?>
```

### See Also

- Collator constants
- collator_set_attribute() - Set collation attribute
- collator_get_strength() - Get current collation strength

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/collator.getattribute.php
