# Ds\Sequence::apply

Source: https://devdocs.io/php/ds-sequence.apply

(PECL ds >= 1.0.0)

Ds\Sequence::apply — Updates all values by applying a callback function to each value

### Description

```
abstract public Ds\Sequence::apply(callable $callback): void
```

Updates all values by applying a callback function to each value in the sequence.

### Parameters

```
callback(mixed $value): mixed
```

A callable to apply to each value in the sequence.

The callback should return what the value should be replaced by.

### Return Values

No value is returned.

### Examples

Example #1 Ds\Sequence::apply() example

```
<?php
$sequence = new \Ds\Vector([1, 2, 3]);
$sequence->apply(function($value) { return $value * 2; });

print_r($sequence);
?>
```

The above example will output something similar to:

```
Ds\Vector Object
(
    [0] => 2
    [1] => 4
    [2] => 6
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ds-sequence.apply.php
