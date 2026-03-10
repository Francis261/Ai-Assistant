# Ds\Deque::capacity

Source: https://devdocs.io/php/ds-deque.capacity

(PECL ds >= 1.0.0)

Ds\Deque::capacity — Returns the current capacity

### Description

```
public Ds\Deque::capacity(): int
```

Returns the current capacity.

### Parameters

This function has no parameters.

### Return Values

The current capacity.

### Examples

Example #1 Ds\Deque::capacity() example

```
<?php
$deque = new \Ds\Deque();
var_dump($deque->capacity());

$deque->push(...range(1, 50));
var_dump($deque->capacity());
?>
```

The above example will output something similar to:

```
int(8)
int(64)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-deque.capacity.php
