# ReflectionGenerator::__construct

Source: https://devdocs.io/php/reflectiongenerator.construct

(PHP 7, PHP 8)

ReflectionGenerator::__construct — Constructs a ReflectionGenerator object

### Description

Constructs a ReflectionGenerator object.

### Parameters

A generator object.

### Examples

Example #1 ReflectionGenerator::__construct() example

```
<?php

function gen()
{
    yield 1;
}

$gen = gen();

$reflectionGen = new ReflectionGenerator($gen);

echo <<< output
{$reflectionGen->getFunction()->name}
Line: {$reflectionGen->getExecutingLine()}
File: {$reflectionGen->getExecutingFile()}
output;
```

The above example will output something similar to:

```
gen
Line: 5
File: /path/to/file/example.php
```

### See Also

- ReflectionGenerator::getFunction() - Gets the function name of the generator
- ReflectionGenerator::getExecutingLine() - Gets the currently executing line of the generator
- ReflectionGenerator::getExecutingFile() - Gets the file name of the currently executing generator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectiongenerator.construct.php
