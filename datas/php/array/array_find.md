# array_find

Source: https://devdocs.io/php/function.array-find

(PHP 8 >= 8.4.0)

array_find — Returns the first element satisfying a callback function

### Description

```
array_find(array $array, callable $callback): mixed
```

array_find() returns the value of the first element of an array for which the given callback returns true. If no matching element is found the function returns null.

### Parameters

The callback function to call to check each element, which must be

```
callback(mixed $value, mixed $key): bool
```

### Return Values

The function returns the value of the first element for which the callback returns true. If no matching element is found the function returns null.

### Examples

Example #1 array_find() example

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

// Find the first animal with a name longer than 4 characters.
var_dump(array_find($array, function (string $value) {
    return strlen($value) > 4;
}));

// Find the first animal whose name begins with f.
var_dump(array_find($array, function (string $value) {
    return str_starts_with($value, 'f');
}));

// Find the first animal where the array key is the first symbol of the animal.
var_dump(array_find($array, function (string $value, $key) {
   return $value[0] === $key;
}));

// Find the first animal where the array key matching a RegEx.
var_dump(array_find($array, function ($value, $key) {
   return preg_match('/^([a-f])$/', $key);
}));
?>
```

The above example will output:

```
string(5) "goose"
NULL
string(3) "cow"
string(3) "dog"
```

### See Also

- array_find_key() - Returns the key of the first element satisfying a callback function
- array_all() - Checks if all array elements satisfy a callback function
- array_any() - Checks if at least one array element satisfies a callback function
- array_filter() - Filters elements of an array using a callback function
- array_reduce() - Iteratively reduce the array to a single value using a callback function

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.array-find.php
