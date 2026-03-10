# Ds\Deque::contains

Source: https://devdocs.io/php/ds-deque.contains

(PECL ds >= 1.0.0)

Ds\Deque::contains — Determines if the deque contains given values

### Description

```
public Ds\Deque::contains(mixed ...$values): bool
```

Determines if the deque contains all values.

### Parameters

Values to check.

### Return Values

false if any of the provided values are not in the deque, true otherwise.

### Examples

Example #1 Ds\Deque::contains() example

```
<?php
$deque = new \Ds\Deque(['a', 'b', 'c', 1, 2, 3]);

var_dump($deque->contains('a'));                // true
var_dump($deque->contains('a', 'b'));           // true
var_dump($deque->contains('c', 'd'));           // false

var_dump($deque->contains(...['c', 'b', 'a'])); // true

// Always strict
var_dump($deque->contains(1));                  // true
var_dump($deque->contains('1'));                // false

var_dump($sequece->contains(...[]));               // true
?>
```

The above example will output something similar to:

```
bool(true)
bool(true)
bool(false)
bool(true)
bool(true)
bool(false)
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-deque.contains.php
