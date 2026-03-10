# Collator::getErrorCode

Source: https://devdocs.io/php/collator.geterrorcode

# collator_get_error_code

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Collator::getErrorCode -- collator_get_error_code — Get collator's last error code

### Description

Object-oriented style

```
public Collator::getErrorCode(): int|false
```

Procedural style

```
collator_get_error_code(Collator $object): int|false
```

### Parameters

Collator object.

### Return Values

Error code returned by the last Collator API function call, or false on failure.

### Examples

Example #1 collator_get_error_code() example

```
<?php
$coll = collator_create( 'en_US' );
if( collator_get_attribute( $coll, Collator::FRENCH_COLLATION ) === false )
        handle_error( collator_get_error_code() );
?>
```

### See Also

- collator_get_error_message() - Get text for collator's last error code

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/collator.geterrorcode.php
