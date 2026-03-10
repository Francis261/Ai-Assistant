# str_decrement

Source: https://devdocs.io/php/function.str-decrement

(PHP 8 >= 8.3.0)

str_decrement — Decrement an alphanumeric string

### Description

```
str_decrement(string $string): string
```

Returns the decremented alphanumeric ASCII string.

### Parameters

The input string.

### Return Values

Returns the decremented alphanumeric ASCII string.

### Errors/Exceptions

A ValueError is thrown if string is empty.

A ValueError is thrown if string is not an alphanumeric ASCII string.

A ValueError is thrown if string cannot be decremented. For example, "A" or "0".

### Examples

Example #1 Basic str_decrement() example

```
<?php
$str = 'ABC';
var_dump(str_decrement($str));
?>
```

The above example will output:

```
string(3) "ABB"
```

Example #2 str_decrement() example with a carry

```
<?php
$str = 'ZA';
var_dump(str_decrement($str));

$str = 'AA';
var_dump(str_decrement($str));
?>
```

The above example will output:

```
string(2) "YZ"
string(1) "Z"
```

### See Also

- str_increment() - Increment an alphanumeric string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.str-decrement.php
