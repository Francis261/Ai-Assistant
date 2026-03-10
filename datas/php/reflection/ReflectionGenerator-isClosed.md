# ReflectionGenerator::isClosed

Source: https://devdocs.io/php/reflectiongenerator.isclosed

(PHP 8 >= 8.4.0)

ReflectionGenerator::isClosed — Checks if execution finished

### Description

```
public ReflectionGenerator::isClosed(): bool
```

Returns whether the execution reached the end of the function, a return statement or if an exception was thrown.

### Parameters

This function has no parameters.

### Return Values

Returns whether the generator finished executing.

### Examples

Example #1 ReflectionGenerator::isClosed() example

```
<?php

function gen()
{
    yield 'a';
    yield 'a';
}

$gen = gen();
$reflectionGen = new ReflectionGenerator($gen);

foreach ($gen as $value) {
    echo $value, PHP_EOL;
    var_dump($reflectionGen->isClosed());
}

var_dump($reflectionGen->isClosed());

?>
```

The above example will output:

```
a
bool(false)
a
bool(false)
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectiongenerator.isclosed.php
