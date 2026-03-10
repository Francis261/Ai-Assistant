# Ds\Deque::last

Source: https://devdocs.io/php/ds-deque.last

(PECL ds >= 1.0.0)

Ds\Deque::last — Returns the last value

### Description

```
public Ds\Deque::last(): mixed
```

Returns the last value in the deque.

### Parameters

This function has no parameters.

### Return Values

The last value in the deque.

### Errors/Exceptions

UnderflowException if empty.

### Examples

Example #1 Ds\Deque::last() example

```
<?php
$deque = new \Ds\Deque([1, 2, 3]);
var_dump($deque->last());
?>
```

The above example will output something similar to:

```
int(3)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-deque.last.php
