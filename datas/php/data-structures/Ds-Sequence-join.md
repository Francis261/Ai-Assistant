# Ds\Sequence::join

Source: https://devdocs.io/php/ds-sequence.join

(PECL ds >= 1.0.0)

Ds\Sequence::join — Joins all values together as a string

### Description

```
abstract public Ds\Sequence::join(string $glue = ?): string
```

Joins all values together as a string using an optional separator between each value.

### Parameters

An optional string to separate each value.

### Return Values

All values of the sequence joined together as a string.

### Examples

Example #1 Ds\Sequence::join() example using a separator string

```
<?php
$sequence = new \Ds\Vector(["a", "b", "c", 1, 2, 3]);

var_dump($sequence->join("|"));
?>
```

The above example will output something similar to:

```
string(11) "a|b|c|1|2|3"
```

Example #2 Ds\Sequence::join() example without a separator string

```
<?php
$sequence = new \Ds\Vector(["a", "b", "c", 1, 2, 3]);

var_dump($sequence->join());
?>
```

The above example will output something similar to:

```
string(11) "abc123"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-sequence.join.php
