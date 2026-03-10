# Collator::compare

Source: https://devdocs.io/php/collator.compare

# collator_compare

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Collator::compare -- collator_compare — Compare two Unicode strings

### Description

Object-oriented style

```
public Collator::compare(string $string1, string $string2): int|false
```

Procedural style

```
collator_compare(Collator $object, string $string1, string $string2): int|false
```

Compare two Unicode strings according to collation rules.

### Parameters

Collator object.

The first string to compare.

The second string to compare.

### Return Values

Return comparison result:

- 1 if string1 is greater than string2 ;
- 0 if string1 is equal to string2;
- -1 if string1 is less than string2 .

1 if string1 is greater than string2 ;

0 if string1 is equal to string2;

-1 if string1 is less than string2 .

This function may return Boolean false, but may also return a non-Boolean value which evaluates to false. Please read the section on Booleans for more information. Use the === operator for testing the return value of this function.

### Examples

Example #1 collator_compare() example

```
<?php
$s1 = 'Hello';
$s2 = 'hello';

$coll = collator_create( 'en_US' );
$res  = collator_compare( $coll, $s1, $s2 );

if ($res === false) {
    echo collator_get_error_message( $coll );
} else if( $res > 0 ) {
    echo "s1 is greater than s2\n";
} else if( $res < 0 ) {
    echo "s1 is less than s2\n";
} else {
    echo "s1 is equal to s2\n";
}
?>
```

The above example will output:

Example #2 Comparing strings without diacritics or case-sensitivity

```
<?php
$c = new Collator( 'en' );
$c->setStrength( Collator::PRIMARY );

if ( $c->compare( 'Séan', 'Sean' ) == 0 )
{
    echo "The same\n";
}
```

The above example will output:

This example instructs the collator to compare with only taking the base characters into account. The documentation for Collator->setStrength() explains the different strengths.

### See Also

- collator_sort() - Sort array using specified collator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/collator.compare.php
