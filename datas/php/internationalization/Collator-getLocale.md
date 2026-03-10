# Collator::getLocale

Source: https://devdocs.io/php/collator.getlocale

# collator_get_locale

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Collator::getLocale -- collator_get_locale — Get the locale name of the collator

### Description

Object-oriented style

```
public Collator::getLocale(int $type): string|false
```

Procedural style

```
collator_get_locale(Collator $object, int $type): string|false
```

Get collector locale name.

### Parameters

Collator object.

You can choose between valid and actual locale ( Locale::VALID_LOCALE and Locale::ACTUAL_LOCALE, respectively).

### Return Values

Real locale name from which the collation data comes. If the collator was instantiated from rules or an error occurred, returns false.

### Examples

Example #1 collator_get_locale() example

```
<?php
$coll    = collator_create( 'en_US_California' );
$res_val = collator_get_locale( $coll, Locale::VALID_LOCALE );
$res_act = collator_get_locale( $coll, Locale::ACTUAL_LOCALE );
printf( "Valid locale name: %s\nActual locale name: %s\n",
         $res_val, $res_act );
?>
```

The above example will output:

```
Requested locale name: en_US_California
Valid locale name: en_US
Actual locale name: en
```

### See Also

- collator_create() - Create a collator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/collator.getlocale.php
