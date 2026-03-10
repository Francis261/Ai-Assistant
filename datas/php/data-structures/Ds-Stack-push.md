# Ds\Stack::push

Source: https://devdocs.io/php/ds-stack.push

(PECL ds >= 1.0.0)

Ds\Stack::push — Pushes values onto the stack

### Description

```
public Ds\Stack::push(mixed ...$values): void
```

Pushes values onto the stack.

### Parameters

The values to push onto the stack.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Stack::push() example

```
<?php
$stack = new \Ds\Stack();

$stack->push("a");
$stack->push("b");
$stack->push("c", "d");
$stack->push(...["e", "f"]);

print_r($stack);
?>
```

The above example will output something similar to:

```
Ds\Stack Object
(
    [0] => a
    [1] => b
    [2] => c
    [3] => d
    [4] => e
    [5] => f
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-stack.push.php
