# Collator::create

Source: https://devdocs.io/php/collator.create

# collator_create

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Collator::create -- collator_create — Create a collator

### Description

Object-oriented style

```
public static Collator::create(string $locale): ?Collator
```

Procedural style

```
collator_create(string $locale): ?Collator
```

The strings will be compared using the options already specified.

### Parameters

The locale containing the required collation rules. Special values for locales can be passed in - if an empty string is passed for the locale, the default locale collation rules will be used. If "root" is passed, » UCA rules will be used.

### Return Values

Return new instance of Collator object, or null on error.

### Examples

Example #1 collator_create() example

```
<?php
$coll = collator_create( 'en_US' );

if( !isset( $coll ) ) {
    printf( "Collator creation failed: %s\n", intl_get_error_message() );
    exit( 1 );
}
?>
```

### See Also

- Collator::__construct() - Create a collator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/collator.create.php
