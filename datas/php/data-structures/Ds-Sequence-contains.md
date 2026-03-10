# Ds\Sequence::contains

Source: https://devdocs.io/php/ds-sequence.contains

(PECL ds >= 1.0.0)

Ds\Sequence::contains — Determines if the sequence contains given values

### Description

```
abstract public Ds\Sequence::contains(mixed ...$values): bool
```

Determines if the sequence contains all values.

### Parameters

Values to check.

### Return Values

false if any of the provided values are not in the sequence, true otherwise.

### Examples

Example #1 Ds\Sequence::contains() example

```
<?php
$sequence = new \Ds\Vector(['a', 'b', 'c', 1, 2, 3]);

var_dump($sequence->contains('a'));                // true
var_dump($sequence->contains('a', 'b'));           // true
var_dump($sequence->contains('c', 'd'));           // false

var_dump($sequence->contains(...['c', 'b', 'a'])); // true

// Always strict
var_dump($sequence->contains(1));                  // true
var_dump($sequence->contains('1'));                // false

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
 https://www.php.net/manual/en/ds-sequence.contains.php
