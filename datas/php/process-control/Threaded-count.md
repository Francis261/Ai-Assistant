# Threaded::count

Source: https://devdocs.io/php/threaded.count

(PECL pthreads >= 2.0.0)

Threaded::count — Manipulation

### Description

```
public Threaded::count(): int
```

Returns the number of properties for this object

### Parameters

This function has no parameters.

### Return Values

### Examples

Example #1 Counting the properties of an object

```
<?php
$safe = new Threaded();

while (count($safe) < 10) {
    $safe[] = count($safe);
}

var_dump(count($safe));
?>
```

The above example will output:

```
int(10)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/threaded.count.php
