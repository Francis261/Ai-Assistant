# Ds\Stack::pop

Source: https://devdocs.io/php/ds-stack.pop

(PECL ds >= 1.0.0)

Ds\Stack::pop — Removes and returns the value at the top of the stack

### Description

```
public Ds\Stack::pop(): mixed
```

Removes and returns the value at the top of the stack.

### Parameters

This function has no parameters.

### Return Values

The removed value which was at the top of the stack.

### Errors/Exceptions

UnderflowException if empty.

### Examples

Example #1 Ds\Stack::pop() example

```
<?php
$stack = new \Ds\Stack();

$stack->push("a");
$stack->push("b");
$stack->push("c");

var_dump($stack->pop());
var_dump($stack->pop());
var_dump($stack->pop());
?>
```

The above example will output something similar to:

```
string(1) "c"
string(1) "b"
string(1) "a"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-stack.pop.php
