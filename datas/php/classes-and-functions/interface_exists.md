# interface_exists

Source: https://devdocs.io/php/function.interface-exists

(PHP 5 >= 5.0.2, PHP 7, PHP 8)

interface_exists — Checks if the interface has been defined

### Description

```
interface_exists(string $interface, bool $autoload = true): bool
```

Checks if the given interface has been defined.

### Parameters

The interface name

Whether to autoload if not already loaded.

### Return Values

Returns true if the interface given by interface has been defined, false otherwise.

### Examples

Example #1 interface_exists() example

```
<?php
// Check the interface exists before trying to use it
if (interface_exists('MyInterface')) {
    class MyClass implements MyInterface
    {
        // Methods
    }
}

?>
```

### See Also

- get_declared_interfaces() - Returns an array of all declared interfaces
- class_implements() - Return the interfaces which are implemented by the given class or interface
- class_exists() - Checks if the class has been defined
- enum_exists() - Checks if the enum has been defined

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.interface-exists.php
