# Threaded::merge

Source: https://devdocs.io/php/threaded.merge

(PECL pthreads >= 2.0.0)

Threaded::merge — Manipulation

### Description

```
public Threaded::merge(mixed $from, bool $overwrite = ?): bool
```

Merges data into the current object

### Parameters

The data to merge

Overwrite existing keys, by default true

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Merging into the property table of a threaded object

```
<?php
$array = [];

while (count($array) < 10)
    $array[] = count($array);

$stdClass = new stdClass();
$stdClass->foo = "foo";
$stdClass->bar = "bar";
$stdClass->baz = "baz";

$safe = new Threaded();
$safe->merge($array);

$safe->foo = "bar";
$safe->merge($stdClass, false);

var_dump($safe);
?>
```

The above example will output:

```
object(Threaded)#2 (13) {
  ["0"]=>
  int(0)
  ["1"]=>
  int(1)
  ["2"]=>
  int(2)
  ["3"]=>
  int(3)
  ["4"]=>
  int(4)
  ["5"]=>
  int(5)
  ["6"]=>
  int(6)
  ["7"]=>
  int(7)
  ["8"]=>
  int(8)
  ["9"]=>
  int(9)
  ["foo"]=>
  string(3) "bar"
  ["bar"]=>
  string(3) "bar"
  ["baz"]=>
  string(3) "baz"
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/threaded.merge.php
