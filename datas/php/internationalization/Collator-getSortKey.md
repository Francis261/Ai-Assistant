# Collator::getSortKey

Source: https://devdocs.io/php/collator.getsortkey

# collator_get_sort_key

(PHP 5 >= 5.3.2, PHP 7, PHP 8, PECL intl >= 1.0.3)

Collator::getSortKey -- collator_get_sort_key — Get sorting key for a string

### Description

Object-oriented style

```
public Collator::getSortKey(string $string): string|false
```

Procedural style

```
collator_get_sort_key(Collator $object, string $string): string|false
```

Return collation key for a string. Collation keys can be compared directly instead of strings, though are implementation specific and may change between ICU library versions. Sort keys are generally only useful in databases or other circumstances where function calls are extremely expensive.

### Parameters

Collator object.

The string to produce the key from.

### Return Values

Returns the collation key for the string, or false on failure.

This function may return Boolean false, but may also return a non-Boolean value which evaluates to false. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

### Examples

Example #1 collator_get_sort_key() example

```
<?php

$s1 = 'Hello';

$coll = collator_create('en_US');
$res  = collator_get_sort_key($coll, $s1);

echo bin2hex($res);
?>
```

The above example will output something similar to:

Example #2 Collator::getSortKey() example with usort()

```
<?php

$data = [
    [ 'name' => '🇳🇱 Derick Rethans', 'linked_account' => 'https://phpc.social/users/derickr' ],
    [ 'name' => 'Elephpant', 'linked_account' => 'https://phpc.social/phpc' ],
    [ 'name' => '🇫🇷 Marcus Bointon', 'linked_account' => 'https://phpc.social/users/Synchro' ],
];

/* Create the collator */
$col = new Collator('en');

/* Sort upper-case letters before lower-case letters */
$col->setAttribute(Collator::CASE_FIRST, Collator::UPPER_FIRST);

/* Use a user-defined function with sort, that strips out the emojis */
usort(
    $data,
    function($a, $b) use ($col) {
        /* Remove the character class 'S' (the Symbols), and remove whitespace
         * (with trim) */
        $aName = trim(preg_replace('/\p{S}+/u', '', $a['name']));
        $bName = trim(preg_replace('/\p{S}+/u', '', $b['name']));

                                /* Create the sort key */
        $aKey = $col->getSortKey($aName);
        $bKey = $col->getSortKey($bName);

                                /* Use the sort key to signal which element sorts first */
        return $aKey <=> $bKey;
    }
);

var_dump($data);
?>
```

The above example will output something similar to:

### See Also

- collator_sort() - Sort array using specified collator
- collator_sort_with_sort_keys() - Sort array using specified collator and sort keys

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/collator.getsortkey.php
