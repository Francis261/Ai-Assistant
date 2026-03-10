# ReflectionGenerator::getExecutingLine

Source: https://devdocs.io/php/reflectiongenerator.getexecutingline

(PHP 7, PHP 8)

ReflectionGenerator::getExecutingLine — Gets the currently executing line of the generator

### Description

```
public ReflectionGenerator::getExecutingLine(): int
```

Get the currently executing line number of the generator.

### Parameters

This function has no parameters.

### Return Values

Returns the line number of the currently executing statement in the generator.

### Examples

Example #1 ReflectionGenerator::getExecutingLine() example

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

echo "Line: {$reflectionGen->getExecutingLine()}";
```

The above example will output something similar to:

```
Line: 7
```

### See Also

- ReflectionGenerator::getExecutingGenerator() - Gets the executing Generator object
- ReflectionGenerator::getExecutingFile() - Gets the file name of the currently executing generator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectiongenerator.getexecutingline.php
