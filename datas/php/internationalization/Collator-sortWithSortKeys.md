# Collator::sortWithSortKeys

Source: https://devdocs.io/php/collator.sortwithsortkeys

# collator_sort_with_sort_keys

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Collator::sortWithSortKeys -- collator_sort_with_sort_keys — Sort array using specified collator and sort keys

### Description

Object-oriented style

```
public Collator::sortWithSortKeys(array &$array): bool
```

Procedural style

```
collator_sort_with_sort_keys(Collator $object, array &$array): bool
```

Similar to collator_sort() but uses ICU sorting keys produced by ucol_getSortKey() to gain more speed on large arrays.

### Parameters

Collator object.

Array of strings to sort

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 collator_sort_with_sort_keys() example

```
<?php
$arr  = array( 'Köpfe', 'Kypper', 'Kopfe' );
$coll = collator_create( 'sv' );

collator_sort_with_sort_keys( $coll, $arr );
var_export( $arr );
?>
```

The above example will output:

```
array (
  0 => 'Kopfe',
  1 => 'Kypper',
  2 => 'Köpfe',
)
```

### See Also

- Collator constants
- collator_sort() - Sort array using specified collator
- collator_asort() - Sort array maintaining index association

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/collator.sortwithsortkeys.php
