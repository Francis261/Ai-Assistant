# Ds\Set::get

Source: https://devdocs.io/php/ds-set.get

(PECL ds >= 1.0.0)

Ds\Set::get — Returns the value at a given index

### Description

```
public Ds\Set::get(int $index): mixed
```

Returns the value at a given index.

### Parameters

The index to access, starting at 0.

### Return Values

The value at the requested index.

### Errors/Exceptions

OutOfRangeException if the index is not valid.

### Examples

Example #1 Ds\Set::get() example

```
<?php
$set = new \Ds\Set(["a", "b", "c"]);

var_dump($set->get(0));
var_dump($set->get(1));
var_dump($set->get(2));
?>
```

The above example will output something similar to:

```
string(1) "a"
string(1) "b"
string(1) "c"
```

Example #2 Ds\Set::get() example using array syntax

```
<?php
$set = new \Ds\Set(["a", "b", "c"]);

var_dump($set[0]);
var_dump($set[1]);
var_dump($set[2]);
?>
```

The above example will output something similar to:

```
string(1) "a"
string(1) "b"
string(1) "c"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-set.get.php
