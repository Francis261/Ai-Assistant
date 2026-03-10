# array_key_exists

Source: https://devdocs.io/php/function.array-key-exists

(PHP 4 >= 4.0.7, PHP 5, PHP 7, PHP 8)

array_key_exists — Checks if the given key or index exists in the array

### Description

```
array_key_exists(string|int|float|bool|resource|null $key, array $array): bool
```

array_key_exists() returns true if the given key is set in the array. key can be any value possible for an array index.

### Parameters

Value to check.

An array with keys to check.

### Return Values

Returns true on success or false on failure.

Note:

array_key_exists() will search for the keys in the first dimension only. Nested keys in multidimensional arrays will not be found.

### Changelog

### Examples

Example #1 array_key_exists() example

```
<?php
$searchArray = ['first' => 1, 'second' => 4];
var_dump(array_key_exists('first', $searchArray));
?>
```

The above example will output:

```
bool(true)
```

Example #2 array_key_exists() vs isset()

isset() does not return true for array keys that correspond to a null value, while array_key_exists() does.

```
<?php
$searchArray = ['first' => null, 'second' => 4];

var_dump(isset($searchArray['first']));
var_dump(array_key_exists('first', $searchArray));
?>
```

The above example will output:

```
bool(false)
bool(true)
```

### See Also

- isset() - Determine if a variable is declared and is different than null
- array_keys() - Return all the keys or a subset of the keys of an array
- in_array() - Checks if a value exists in an array
- property_exists() - Checks if the object or class has a property

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.array-key-exists.php
