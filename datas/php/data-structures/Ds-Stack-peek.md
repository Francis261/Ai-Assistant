# Ds\Stack::peek

Source: https://devdocs.io/php/ds-stack.peek

(PECL ds >= 1.0.0)

Ds\Stack::peek — Returns the value at the top of the stack

### Description

```
public Ds\Stack::peek(): mixed
```

Returns the value at the top of the stack, but does not remove it.

### Parameters

This function has no parameters.

### Return Values

The value at the top of the stack.

### Errors/Exceptions

UnderflowException if empty.

### Examples

Example #1 Ds\Stack::peek() example

```
<?php
$stack = new \Ds\Stack();

$stack->push("a");
$stack->push("b");
$stack->push("c");

var_dump($stack->peek());
?>
```

The above example will output something similar to:

```
string(1) "c"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-stack.peek.php
