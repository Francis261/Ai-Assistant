# Generator::getReturn

Source: https://devdocs.io/php/generator.getreturn

(PHP 7, PHP 8)

Generator::getReturn — Get the return value of a generator

### Description

```
public Generator::getReturn(): mixed
```

### Parameters

This function has no parameters.

### Return Values

Returns the generator's return value once it has finished executing.

### Examples

Example #1 Generator::getReturn() example

```
<?php

$gen = (function() {
    yield 1;
    yield 2;

    return 3;
})();

foreach ($gen as $val) {
    echo $val, PHP_EOL;
}

echo $gen->getReturn(), PHP_EOL;
```

The above example will output:

```
1
2
3
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/generator.getreturn.php
