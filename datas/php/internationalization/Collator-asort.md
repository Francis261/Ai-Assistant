# Collator::asort

Source: https://devdocs.io/php/collator.asort

# collator_asort

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Collator::asort -- collator_asort — Sort array maintaining index association

### Description

Object-oriented style

```
public Collator::asort(array &$array, int $flags = Collator::SORT_REGULAR): bool
```

Procedural style

```
collator_asort(Collator $object, array &$array, int $flags = Collator::SORT_REGULAR): bool
```

This function sorts an array such that array indices maintain their correlation with the array elements they are associated with. This is used mainly when sorting associative arrays where the actual element order is significant. Array elements will have sort order according to current locale rules.

Equivalent to standard PHP asort().

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

Default flags value is Collator::SORT_REGULAR. It is also used if an invalid flags value has been specified.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 collator_asort() example

```
<?php
$coll = collator_create( 'en_US' );
$arr = array(
     'a' => '100',
     'b' => '50',
     'c' => '7'
);
collator_asort( $coll, $arr, Collator::SORT_NUMERIC );
var_export( $arr );

collator_asort( $coll, $arr, Collator::SORT_STRING );
var_export( $arr );
?>
```

The above example will output:

```
array (
  'c' => '7',
  'b' => '50',
  'a' => '100',
)array (
  'a' => '100',
  'b' => '50',
  'c' => '7',
)
```

### See Also

- Collator constants
- collator_sort() - Sort array using specified collator
- collator_sort_with_sort_keys() - Sort array using specified collator and sort keys

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/collator.asort.php
