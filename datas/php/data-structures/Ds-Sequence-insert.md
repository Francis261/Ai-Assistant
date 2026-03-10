# Ds\Sequence::insert

Source: https://devdocs.io/php/ds-sequence.insert

(PECL ds >= 1.0.0)

Ds\Sequence::insert — Inserts values at a given index

### Description

```
abstract public Ds\Sequence::insert(int $index, mixed ...$values): void
```

Inserts values into the sequence at a given index.

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

Example #1 Ds\Sequence::insert() example

```
<?php
$sequence = new \Ds\Vector();

$sequence->insert(0, "e");             // [e]
$sequence->insert(1, "f");             // [e, f]
$sequence->insert(2, "g");             // [e, f, g]
$sequence->insert(0, "a", "b");        // [a, b, e, f, g]
$sequence->insert(2, ...["c", "d"]);   // [a, b, c, d, e, f, g]

var_dump($sequence);
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
 https://www.php.net/manual/en/ds-sequence.insert.php
