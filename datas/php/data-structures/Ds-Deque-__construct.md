# Ds\Deque::__construct

Source: https://devdocs.io/php/ds-deque.construct

(PECL ds >= 1.0.0)

Ds\Deque::__construct — Creates a new instance

### Description

Creates a new instance, using either a traversable object or an array for the initial values.

### Parameters

A traversable object or an array to use for the initial values.

### Examples

Example #1 Ds\Deque::__construct() example

```
<?php
$deque = new \Ds\Deque();
var_dump($deque);

$deque = new \Ds\Deque([1, 2, 3]);
var_dump($deque);
?>
```

The above example will output something similar to:

```
object(Ds\Deque)#2 (0) {
}
object(Ds\Deque)#2 (3) {
  [0]=>
  int(1)
  [1]=>
  int(2)
  [2]=>
  int(3)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-deque.construct.php
