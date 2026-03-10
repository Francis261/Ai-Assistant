# Ds\Deque::apply

Source: https://devdocs.io/php/ds-deque.apply

(PECL ds >= 1.0.0)

Ds\Deque::apply — Updates all values by applying a callback function to each value

### Description

```
public Ds\Deque::apply(callable $callback): void
```

Updates all values by applying a callback function to each value in the deque.

### Parameters

```
callback(mixed $value): mixed
```

A callable to apply to each value in the deque.

The callback should return what the value should be replaced by.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Deque::apply() example

```
<?php
$deque = new \Ds\Deque([1, 2, 3]);
$deque->apply(function($value) { return $value * 2; });

print_r($deque);
?>
```

The above example will output something similar to:

```
Ds\Deque Object
(
    [0] => 2
    [1] => 4
    [2] => 6
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-deque.apply.php
