# Generator::key

Source: https://devdocs.io/php/generator.key

(PHP 5 >= 5.5.0, PHP 7, PHP 8)

Generator::key — Get the yielded key

### Description

```
public Generator::key(): mixed
```

Gets the key of the yielded value.

### Parameters

This function has no parameters.

### Return Values

Returns the yielded key.

### Examples

Example #1 Generator::key() example

```
<?php

function Gen()
{
    yield 'key' => 'value';
}

$gen = Gen();

echo "{$gen->key()} => {$gen->current()}";
```

The above example will output:

```
key => value
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/generator.key.php
