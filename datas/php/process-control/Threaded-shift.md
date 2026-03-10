# Threaded::shift

Source: https://devdocs.io/php/threaded.shift

(PECL pthreads >= 2.0.0)

Threaded::shift — Manipulation

### Description

```
public Threaded::shift(): mixed
```

Shifts an item from the objects property table

### Parameters

This function has no parameters.

### Return Values

The first item from the objects property table

### Examples

Example #1 Shifting the first item from the property table of a threaded object

```
<?php
$safe = new Threaded();

while (count($safe) < 10)
    $safe[] = count($safe);

var_dump($safe->shift());
?>
```

The above example will output:

```
int(0)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/threaded.shift.php
