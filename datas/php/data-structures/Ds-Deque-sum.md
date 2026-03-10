# Ds\Deque::sum

Source: https://devdocs.io/php/ds-deque.sum

(PECL ds >= 1.0.0)

Ds\Deque::sum — Returns the sum of all values in the deque

### Description

```
public Ds\Deque::sum(): int|float
```

Returns the sum of all values in the deque.

Note:

Arrays and objects are considered equal to zero when calculating the sum.

### Parameters

This function has no parameters.

### Return Values

The sum of all the values in the deque as either a float or int depending on the values in the deque.

### Examples

Example #1 Ds\Deque::sum() integer example

```
<?php
$deque = new \Ds\Deque([1, 2, 3]);
var_dump($deque->sum());
?>
```

The above example will output something similar to:

```
int(6)
```

Example #2 Ds\Deque::sum() float example

```
<?php
$deque = new \Ds\Deque([1, 2.5, 3]);
var_dump($deque->sum());
?>
```

The above example will output something similar to:

```
float(6.5)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-deque.sum.php
