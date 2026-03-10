# array_any

Source: https://devdocs.io/php/function.array-any

(PHP 8 >= 8.4.0)

array_any — Checks if at least one array element satisfies a callback function

### Description

```
array_any(array $array, callable $callback): bool
```

array_any() returns true, if the given callback returns true for any element. Otherwise the function returns false.

### Parameters

The callback function to call to check each element, which must be

```
callback(mixed $value, mixed $key): bool
```

### Return Values

The function returns true, if there is at least one element for which callback returns true. Otherwise the function returns false.

### Examples

Example #1 array_any() example

```
<?php
$array = [
    'a' => 'dog',
    'b' => 'cat',
    'c' => 'cow',
    'd' => 'duck',
    'e' => 'goose',
    'f' => 'elephant'
];

// Check, if any animal name is longer than 5 letters.
var_dump(array_any($array, function (string $value) {
    return strlen($value) > 5;
}));

// Check, if any animal name is shorter than 3 letters.
var_dump(array_any($array, function (string $value) {
    return strlen($value) < 3;
}));

// Check, if any array key is not a string.
var_dump(array_any($array, function (string $value, $key) {
   return !is_string($key);
}));
?>
```

The above example will output:

```
bool(true)
bool(false)
bool(false)
```

### See Also

- array_all() - Checks if all array elements satisfy a callback function
- array_filter() - Filters elements of an array using a callback function
- array_find() - Returns the first element satisfying a callback function
- array_find_key() - Returns the key of the first element satisfying a callback function

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.array-any.php
