# is_infinite

Source: https://devdocs.io/php/function.is-infinite

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

is_infinite — Checks whether a float is infinite

### Description

```
is_infinite(float $num): bool
```

Returns whether the given num is either INF or -INF.

### Parameters

The float to check

### Return Values

true if num is either INF or -INF, else false.

### Examples

Example #1 is_infinite() example

```
<?php
$inf = 1e308 * 2;

var_dump($inf, is_infinite($inf));

$negative_inf = -$inf;

var_dump($negative_inf, is_infinite($negative_inf));
?>
```

The above example will output:

```
float(INF)
bool(true)
float(-INF)
bool(true)
```

### See Also

- is_finite() - Checks whether a float is finite
- is_nan() - Checks whether a float is NAN

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.is-infinite.php
