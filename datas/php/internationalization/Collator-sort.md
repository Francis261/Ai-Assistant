# Collator::sort

Source: https://devdocs.io/php/collator.sort

# collator_sort

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Collator::sort -- collator_sort — Sort array using specified collator

### Description

Object-oriented style

```
public Collator::sort(array &$array, int $flags = Collator::SORT_REGULAR): bool
```

Procedural style

```
collator_sort(Collator $object, array &$array, int $flags = Collator::SORT_REGULAR): bool
```

This function sorts an array according to current locale rules.

Equivalent to standard PHP sort() .

### Parameters

Collator object.

Array of strings to sort.

Optional sorting type, one of the following:

- Collator::SORT_REGULAR - compare items normally (don't change types)
- Collator::SORT_NUMERIC - compare items numerically
- Collator::SORT_STRING - compare items as strings

Collator::SORT_REGULAR - compare items normally (don't change types)

Collator::SORT_NUMERIC - compare items numerically

Collator::SORT_STRING - compare items as strings

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 collator_sort() example

```
<?php
$coll = collator_create( 'en_US' );
$arr  = array( 'at', 'às', 'as' );

var_export( $arr );
collator_sort( $coll, $arr );
var_export( $arr );
?>
```

The above example will output:

```
array (
  0 => 'at',
  1 => 'às',
  2 => 'as',
)array (
  0 => 'as',
  1 => 'às',
  2 => 'at',
)
```

### See Also

- Collator constants
- collator_asort() - Sort array maintaining index association
- collator_sort_with_sort_keys() - Sort array using specified collator and sort keys

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/collator.sort.php
