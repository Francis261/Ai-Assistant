# Ds\Deque::shift

Source: https://devdocs.io/php/ds-deque.shift

(PECL ds >= 1.0.0)

Ds\Deque::shift — Removes and returns the first value

### Description

```
public Ds\Deque::shift(): mixed
```

Removes and returns the first value.

### Parameters

This function has no parameters.

### Return Values

The first value, which was removed.

### Errors/Exceptions

UnderflowException if empty.

### Examples

Example #1 Ds\Deque::shift() example

```
<?php
$deque = new \Ds\Deque(["a", "b", "c"]);

var_dump($deque->shift());
var_dump($deque->shift());
var_dump($deque->shift());
?>
```

The above example will output something similar to:

```
string(1) "a"
string(1) "b"
string(1) "c"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-deque.shift.php
