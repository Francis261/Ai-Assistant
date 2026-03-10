# class_uses

Source: https://devdocs.io/php/function.class-uses

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

class_uses — Return the traits used by the given class

### Description

```
class_uses(object|string $object_or_class, bool $autoload = true): array|false
```

This function returns an array with the names of the traits that the given object_or_class uses. This does however not include any traits used by a parent class.

### Parameters

An object (class instance) or a string (class name).

Whether to autoload if not already loaded.

### Return Values

An array on success, or false when the given class doesn't exist.

### Examples

Example #1 class_uses() example

```
<?php

trait foo { }
class bar {
  use foo;
}

print_r(class_uses(new bar));

print_r(class_uses('bar'));

spl_autoload_register();

// use autoloading to load the 'not_loaded' class
print_r(class_uses('not_loaded', true));

?>
```

The above example will output something similar to:

```
Array
(
    [foo] => foo
)
Array
(
    [foo] => foo
)
Array
(
    [trait_of_not_loaded] => trait_of_not_loaded
)
```

### See Also

- class_parents() - Return the parent classes of the given class
- get_declared_traits() - Returns an array of all declared traits

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.class-uses.php
