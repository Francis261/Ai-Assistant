# Ds\Deque::get

Source: https://devdocs.io/php/ds-deque.get

(PECL ds >= 1.0.0)

Ds\Deque::get — Returns the value at a given index

### Description

```
public Ds\Deque::get(int $index): mixed
```

Returns the value at a given index.

### Parameters

The index to access, starting at 0.

### Return Values

The value at the requested index.

### Errors/Exceptions

OutOfRangeException if the index is not valid.

### Examples

Example #1 Ds\Deque::get() example

```
<?php
$deque = new \Ds\Deque(["a", "b", "c"]);

var_dump($deque->get(0));
var_dump($deque->get(1));
var_dump($deque->get(2));
?>
```

The above example will output something similar to:

```
string(1) "a"
string(1) "b"
string(1) "c"
```

Example #2 Ds\Deque::get() example using array syntax

```
<?php
$deque = new \Ds\Deque(["a", "b", "c"]);

var_dump($deque[0]);
var_dump($deque[1]);
var_dump($deque[2]);
?>
```

The above example will output something similar to:

```
string(1) "a"
string(1) "b"
string(1) "c"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-deque.get.php
