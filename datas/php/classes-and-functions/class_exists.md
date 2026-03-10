# class_exists

Source: https://devdocs.io/php/function.class-exists

(PHP 4, PHP 5, PHP 7, PHP 8)

class_exists — Checks if the class has been defined

### Description

```
class_exists(string $class, bool $autoload = true): bool
```

This function checks whether or not the given class has been defined.

### Parameters

The class name. The name is matched in a case-insensitive manner.

Whether to autoload if not already loaded.

### Return Values

Returns true if class is a defined class, false otherwise.

### Examples

Example #1 class_exists() example

```
<?php
// Check that the class exists before trying to use it
if (class_exists('MyClass')) {
    $myclass = new MyClass();
}

?>
```

Example #2 autoload parameter example

```
<?php
spl_autoload_register(function ($class_name) {
    include $class_name . '.php';

    // Check to see whether the include declared the class
    if (!class_exists($class_name, false)) {
        throw new LogicException("Unable to load class: $class_name");
    }
});

if (class_exists(MyClass::class)) {
    $myclass = new MyClass();
}

?>
```

### See Also

- function_exists() - Return true if the given function has been defined
- enum_exists() - Checks if the enum has been defined
- interface_exists() - Checks if the interface has been defined
- get_declared_classes() - Returns an array with the name of the defined classes

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.class-exists.php
