# ReflectionGenerator::getThis

Source: https://devdocs.io/php/reflectiongenerator.getthis

(PHP 7, PHP 8)

ReflectionGenerator::getThis — Gets the $this value of the generator

### Description

```
public ReflectionGenerator::getThis(): ?object
```

Get the $this value that the generator has access to.

### Parameters

This function has no parameters.

### Return Values

Returns the $this value, or null if the generator was not created in a class context.

### Examples

Example #1 ReflectionGenerator::getThis() example

```
<?php

class GenExample
{
    public function gen()
    {
        yield 1;
    }
}

$gen = (new GenExample)->gen();

$reflectionGen = new ReflectionGenerator($gen);

var_dump($reflectionGen->getThis());
```

The above example will output something similar to:

```
object(GenExample)#3 (0) {
}
```

### See Also

- ReflectionGenerator::getFunction() - Gets the function name of the generator
- ReflectionGenerator::getTrace() - Gets the trace of the executing generator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectiongenerator.getthis.php
