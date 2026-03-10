# array_reverse

Source: https://devdocs.io/php/function.array-reverse

(PHP 4, PHP 5, PHP 7, PHP 8)

array_reverse — Return an array with elements in reverse order

### Description

```
array_reverse(array $array, bool $preserve_keys = false): array
```

Takes an input array and returns a new array with the order of the elements reversed.

### Parameters

The input array.

If set to true numeric keys are preserved. Non-numeric keys are not affected by this setting and will always be preserved.

### Return Values

Returns the reversed array.

### Examples

Example #1 array_reverse() example

```
<?php
$input  = array("php", 4.0, array("green", "red"));
$reversed = array_reverse($input);
$preserved = array_reverse($input, true);

print_r($input);
print_r($reversed);
print_r($preserved);
?>
```

The above example will output:

```
Array
(
    [0] => php
    [1] => 4
    [2] => Array
        (
            [0] => green
            [1] => red
        )

)
Array
(
    [0] => Array
        (
            [0] => green
            [1] => red
        )

    [1] => 4
    [2] => php
)
Array
(
    [2] => Array
        (
            [0] => green
            [1] => red
        )

    [1] => 4
    [0] => php
)
```

### See Also

- array_flip() - Exchanges all keys with their associated values in an array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.array-reverse.php
