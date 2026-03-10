# Ds\Stack::isEmpty

Source: https://devdocs.io/php/ds-stack.isempty

(PECL ds >= 1.0.0)

Ds\Stack::isEmpty — Returns whether the stack is empty

### Description

```
public Ds\Stack::isEmpty(): bool
```

Returns whether the stack is empty.

### Parameters

This function has no parameters.

### Return Values

Returns true if the stack is empty, false otherwise.

### Examples

Example #1 Ds\Stack::isEmpty() example

```
<?php
$a = new \Ds\Stack([1, 2, 3]);
$b = new \Ds\Stack();

var_dump($a->isEmpty());
var_dump($b->isEmpty());
?>
```

The above example will output something similar to:

```
bool(false)
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-stack.isempty.php
