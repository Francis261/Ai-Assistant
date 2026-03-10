# key

Source: https://devdocs.io/php/function.key

(PHP 4, PHP 5, PHP 7, PHP 8)

key — Fetch a key from an array

### Description

```
key(array|object $array): int|string|null
```

key() returns the index element of the current array position.

### Parameters

The array.

### Return Values

The key() function simply returns the key of the array element that's currently being pointed to by the internal pointer. It does not move the pointer in any way. If the internal pointer points beyond the end of the elements list or the array is empty, key() returns null.

### Changelog

### Examples

Example #1 key() example

```
<?php
$array = array(
    'fruit1' => 'apple',
    'fruit2' => 'orange',
    'fruit3' => 'grape',
    'fruit4' => 'apple',
    'fruit5' => 'apple');

// this cycle echoes all associative array
// key where value equals "apple"
while ($fruit_name = current($array)) {
    if ($fruit_name == 'apple') {
        echo key($array), "\n";
    }
    next($array);
}
?>
```

The above example will output:

```
fruit1
fruit4
fruit5
```

### See Also

- current() - Return the current element in an array
- next() - Advance the internal pointer of an array
- array_key_first() - Gets the first key of an array
- foreach

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.key.php
