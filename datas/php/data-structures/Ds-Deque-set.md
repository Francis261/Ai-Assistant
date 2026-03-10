# Ds\Deque::set

Source: https://devdocs.io/php/ds-deque.set

(PECL ds >= 1.0.0)

Ds\Deque::set — Updates a value at a given index

### Description

```
public Ds\Deque::set(int $index, mixed $value): void
```

Updates a value at a given index.

### Parameters

The index of the value to update.

The new value.

### Return Values

No value is returned.

### Errors/Exceptions

OutOfRangeException if the index is not valid.

### Examples

Example #1 Ds\Deque::set() example

```
<?php
$deque = new \Ds\Deque(["a", "b", "c"]);

$deque->set(1, "_");
print_r($deque);
?>
```

The above example will output something similar to:

```
Ds\Deque Object
(
    [0] => a
    [1] => _
    [2] => c
)
```

Example #2 Ds\Deque::set() example using array syntax

```
<?php
$deque = new \Ds\Deque(["a", "b", "c"]);

$deque[1] = "_";
print_r($deque);
?>
```

The above example will output something similar to:

```
Ds\Deque Object
(
    [0] => a
    [1] => _
    [2] => c
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-deque.set.php
