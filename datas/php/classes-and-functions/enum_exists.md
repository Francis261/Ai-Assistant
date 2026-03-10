# enum_exists

Source: https://devdocs.io/php/function.enum-exists

(PHP 8 >= 8.1.0)

enum_exists — Checks if the enum has been defined

### Description

```
enum_exists(string $enum, bool $autoload = true): bool
```

This function checks whether or not the given enum has been defined.

### Parameters

The enum name. The name is matched in a case-insensitive manner.

Whether to autoload if not already loaded.

### Return Values

Returns true if enum is a defined enum, false otherwise.

### Examples

Example #1 enum_exists() example

```
<?php
// Check that the enum exists before trying to use it
if (enum_exists(Suit::class)) {
    $myclass = Suit::Hearts;
}
?>
```

### See Also

- function_exists() - Return true if the given function has been defined
- class_exists() - Checks if the class has been defined
- interface_exists() - Checks if the interface has been defined
- get_declared_classes() - Returns an array with the name of the defined classes

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.enum-exists.php
