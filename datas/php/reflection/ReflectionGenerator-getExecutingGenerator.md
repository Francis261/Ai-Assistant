# ReflectionGenerator::getExecutingGenerator

Source: https://devdocs.io/php/reflectiongenerator.getexecutinggenerator

(PHP 7, PHP 8)

ReflectionGenerator::getExecutingGenerator — Gets the executing Generator object

### Description

```
public ReflectionGenerator::getExecutingGenerator(): Generator
```

Get the executing Generator object

### Parameters

This function has no parameters.

### Return Values

Returns the currently executing Generator object.

### Examples

Example #1 ReflectionGenerator::getExecutingGenerator() example

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

$gen2 = $reflectionGen->getExecutingGenerator();

var_dump($gen2 === $gen);
var_dump($gen2->current());
```

The above example will output something similar to:

```
bool(true)
int(1);
```

### See Also

- ReflectionGenerator::getExecutingLine() - Gets the currently executing line of the generator
- ReflectionGenerator::getExecutingFile() - Gets the file name of the currently executing generator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectiongenerator.getexecutinggenerator.php
