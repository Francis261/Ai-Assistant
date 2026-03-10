# Threaded::chunk

Source: https://devdocs.io/php/threaded.chunk

(PECL pthreads >= 2.0.0)

Threaded::chunk — Manipulation

### Description

```
public Threaded::chunk(int $size, bool $preserve): array
```

Fetches a chunk of the objects property table of the given size, optionally preserving keys

### Parameters

The number of items to fetch

Preserve the keys of members, by default false

### Return Values

An array of items from the objects property table

### Examples

Example #1 Fetch a chunk of the property table

```
<?php
$safe = new Threaded();

while (count($safe) < 10) {
    $safe[] = count($safe);
}

var_dump($safe->chunk(5));
?>
```

The above example will output:

```
array(5) {
  [0]=>
  int(0)
  [1]=>
  int(1)
  [2]=>
  int(2)
  [3]=>
  int(3)
  [4]=>
  int(4)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/threaded.chunk.php
