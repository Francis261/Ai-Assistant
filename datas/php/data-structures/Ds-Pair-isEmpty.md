# Ds\Pair::isEmpty

Source: https://devdocs.io/php/ds-pair.isempty

(No version information available, might only be in Git)

Ds\Pair::isEmpty — Returns whether the pair is empty

### Description

```
public Ds\Pair::isEmpty(): bool
```

Returns whether the pair is empty.

### Parameters

This function has no parameters.

### Return Values

Returns true if the pair is empty, false otherwise.

### Examples

Example #1 Ds\Pair::isEmpty() example

```
<?php
$a = new \Ds\Pair("a", 1);
$b = new \Ds\Pair();

var_dump($a->isEmpty());
var_dump($b->isEmpty());
?>
```

The above example will output something similar to:

```
bool(false)
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-pair.isempty.php
