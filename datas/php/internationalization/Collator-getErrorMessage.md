# Collator::getErrorMessage

Source: https://devdocs.io/php/collator.geterrormessage

# collator_get_error_message

(PHP 5 >= 5.3.0, PHP 7, PHP 8, PECL intl >= 1.0.0)

Collator::getErrorMessage -- collator_get_error_message — Get text for collator's last error code

### Description

Object-oriented style

```
public Collator::getErrorMessage(): string|false
```

Procedural style

```
collator_get_error_message(Collator $object): string|false
```

Retrieves the message for the last error.

### Parameters

Collator object.

### Return Values

Description of an error occurred in the last Collator API function call, or false on failure.

### Examples

Example #1 collator_get_error_message() example

```
<?php
$coll = collator_create( 'lt' );
if( collator_compare( $coll, 'y', 'k' ) === false ) {
    echo collator_get_error_message( $coll );
}
?>
```

### See Also

- collator_get_error_code() - Get collator's last error code

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/collator.geterrormessage.php
