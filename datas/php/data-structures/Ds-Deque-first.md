# Ds\Deque::first

Source: https://devdocs.io/php/ds-deque.first

(PECL ds >= 1.0.0)

Ds\Deque::first — Returns the first value in the deque

### Description

```
public Ds\Deque::first(): mixed
```

Returns the first value in the deque.

### Parameters

This function has no parameters.

### Return Values

The first value in the deque.

### Errors/Exceptions

UnderflowException if empty.

### Examples

Example #1 Ds\Deque::first() example

```
<?php
$deque = new \Ds\Deque([1, 2, 3]);
var_dump($deque->first());
?>
```

The above example will output something similar to:

```
int(1)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-deque.first.php
