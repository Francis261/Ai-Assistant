# Threaded::pop

Source: https://devdocs.io/php/threaded.pop

(PECL pthreads >= 2.0.0)

Threaded::pop — Manipulation

### Description

```
public Threaded::pop(): bool
```

Pops an item from the objects property table

### Parameters

This function has no parameters.

### Return Values

The last item from the objects property table

### Examples

Example #1 Popping the last item from the property table of a threaded object

```
<?php
$safe = new Threaded();

while (count($safe) < 10)
    $safe[] = count($safe);

var_dump($safe->pop());
?>
```

The above example will output:

```
int(9)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/threaded.pop.php
