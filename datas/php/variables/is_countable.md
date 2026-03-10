# is_countable

Source: https://devdocs.io/php/function.is-countable

(PHP 7 >= 7.3.0, PHP 8)

is_countable — Verify that the contents of a variable is a countable value

### Description

```
is_countable(mixed $value): bool
```

Verify that the contents of a variable is an array or an object implementing Countable

### Parameters

The value to check

### Return Values

Returns true if value is countable, false otherwise.

### Changelog

### Examples

Example #1 is_countable() examples

```
<?php
var_dump(is_countable([1, 2, 3])); // bool(true)
var_dump(is_countable(new ArrayIterator(['foo', 'bar', 'baz']))); // bool(true)
var_dump(is_countable(new ArrayIterator())); // bool(true)
var_dump(is_countable(new stdClass())); // bool(false)
?>
```

### See Also

- is_array() - Finds whether a variable is an array
- is_object() - Finds whether a variable is an object
- is_iterable() - Verify that the contents of a variable is an iterable value
- is_bool() - Finds out whether a variable is a boolean

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.is-countable.php
