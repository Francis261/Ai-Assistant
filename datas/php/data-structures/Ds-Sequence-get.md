# Ds\Sequence::get

Source: https://devdocs.io/php/ds-sequence.get

(PECL ds >= 1.0.0)

Ds\Sequence::get — Returns the value at a given index

### Description

```
abstract public Ds\Sequence::get(int $index): mixed
```

Returns the value at a given index.

### Parameters

The index to access, starting at 0.

### Return Values

The value at the requested index.

### Errors/Exceptions

OutOfRangeException if the index is not valid.

### Examples

Example #1 Ds\Sequence::get() example

```
<?php
$sequence = new \Ds\Vector(["a", "b", "c"]);

var_dump($sequence->get(0));
var_dump($sequence->get(1));
var_dump($sequence->get(2));
?>
```

The above example will output something similar to:

```
string(1) "a"
string(1) "b"
string(1) "c"
```

Example #2 Ds\Sequence::get() example using array syntax

```
<?php
$sequence = new \Ds\Vector(["a", "b", "c"]);

var_dump($sequence[0]);
var_dump($sequence[1]);
var_dump($sequence[2]);
?>
```

The above example will output something similar to:

```
string(1) "a"
string(1) "b"
string(1) "c"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-sequence.get.php
