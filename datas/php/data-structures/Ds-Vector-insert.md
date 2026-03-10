# Ds\Vector::insert

Source: https://devdocs.io/php/ds-vector.insert

(PECL ds >= 1.0.0)

Ds\Vector::insert — Inserts values at a given index

### Description

```
public Ds\Vector::insert(int $index, mixed ...$values): void
```

Inserts values into the vector at a given index.

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

Example #1 Ds\Vector::insert() example

```
<?php
$vector = new \Ds\Vector();

$vector->insert(0, "e");             // [e]
$vector->insert(1, "f");             // [e, f]
$vector->insert(2, "g");             // [e, f, g]
$vector->insert(0, "a", "b");        // [a, b, e, f, g]
$vector->insert(2, ...["c", "d"]);   // [a, b, c, d, e, f, g]

var_dump($vector);
?>
```

The above example will output something similar to:

```
object(Ds\Vector)#1 (7) {
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
 https://www.php.net/manual/en/ds-vector.insert.php
