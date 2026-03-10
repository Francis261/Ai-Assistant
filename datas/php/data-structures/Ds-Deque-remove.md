# Ds\Deque::remove

Source: https://devdocs.io/php/ds-deque.remove

(PECL ds >= 1.0.0)

Ds\Deque::remove — Removes and returns a value by index

### Description

```
public Ds\Deque::remove(int $index): mixed
```

Removes and returns a value by index.

### Parameters

The index of the value to remove.

### Return Values

The value that was removed.

### Errors/Exceptions

OutOfRangeException if the index is not valid.

### Examples

Example #1 Ds\Deque::remove() example

```
<?php
$deque = new \Ds\Deque(["a", "b", "c"]);

var_dump($deque->remove(1));
var_dump($deque->remove(0));
var_dump($deque->remove(0));
?>
```

The above example will output something similar to:

```
string(1) "b"
string(1) "a"
string(1) "c"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-deque.remove.php
