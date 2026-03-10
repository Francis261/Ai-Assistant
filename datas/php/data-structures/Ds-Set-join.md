# Ds\Set::join

Source: https://devdocs.io/php/ds-set.join

(PECL ds >= 1.0.0)

Ds\Set::join — Joins all values together as a string

### Description

```
public Ds\Set::join(string $glue = ?): string
```

Joins all values together as a string using an optional separator between each value.

### Parameters

An optional string to separate each value.

### Return Values

All values of the set joined together as a string.

### Examples

Example #1 Ds\Set::join() example using a separator string

```
<?php
$set = new \Ds\Set(["a", "b", "c", 1, 2, 3]);

var_dump($set->join("|"));
?>
```

The above example will output something similar to:

```
string(11) "a|b|c|1|2|3"
```

Example #2 Ds\Set::join() example without a separator string

```
<?php
$set = new \Ds\Set(["a", "b", "c", 1, 2, 3]);

var_dump($set->join());
?>
```

The above example will output something similar to:

```
string(11) "abc123"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-set.join.php
