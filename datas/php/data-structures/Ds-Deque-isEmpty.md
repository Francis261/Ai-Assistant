# Ds\Deque::isEmpty

Source: https://devdocs.io/php/ds-deque.isempty

(PECL ds >= 1.0.0)

Ds\Deque::isEmpty — Returns whether the deque is empty

### Description

```
public Ds\Deque::isEmpty(): bool
```

Returns whether the deque is empty.

### Parameters

This function has no parameters.

### Return Values

Returns true if the deque is empty, false otherwise.

### Examples

Example #1 Ds\Deque::isEmpty() example

```
<?php
$a = new \Ds\Deque([1, 2, 3]);
$b = new \Ds\Deque();

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
 https://www.php.net/manual/en/ds-deque.isempty.php
