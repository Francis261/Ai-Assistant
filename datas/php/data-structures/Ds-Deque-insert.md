# Ds\Deque::insert

Source: https://devdocs.io/php/ds-deque.insert

(PECL ds >= 1.0.0)

Ds\Deque::insert — Inserts values at a given index

### Description

```
public Ds\Deque::insert(int $index, mixed ...$values): void
```

Inserts values into the deque at a given index.

### Parameters

The index at which to insert. 0 <= index <= count

Note:

You can insert at the index equal to the number of values.

The value or values to insert.

### Return Values

No value is returned.

### Errors/Exceptions

OutOfRangeException if the index is not valid.

### Examples

Example #1 Ds\Deque::insert() example

```
<?php
$deque = new \Ds\Deque();

$deque->insert(0, "e");             // [e]
$deque->insert(1, "f");             // [e, f]
$deque->insert(2, "g");             // [e, f, g]
$deque->insert(0, "a", "b");        // [a, b, e, f, g]
$deque->insert(2, ...["c", "d"]);   // [a, b, c, d, e, f, g]

var_dump($deque);
?>
```

The above example will output something similar to:

```
object(Ds\Deque)#1 (7) {
  [0]=>
  string(1) "a"
  [1]=>
  string(1) "b"
  [2]=>
  string(1) "c"
  [3]=>
  string(1) "d"
  [4]=>
  string(1) "e"
  [5]=>
  string(1) "f"
  [6]=>
  string(1) "g"
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-deque.insert.php
