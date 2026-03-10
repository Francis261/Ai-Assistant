# ReflectionGenerator::getFunction

Source: https://devdocs.io/php/reflectiongenerator.getfunction

(PHP 7, PHP 8)

ReflectionGenerator::getFunction — Gets the function name of the generator

### Description

```
public ReflectionGenerator::getFunction(): ReflectionFunctionAbstract
```

Enables the function name of the generator to be obtained by returning a class derived from ReflectionFunctionAbstract.

### Parameters

This function has no parameters.

### Return Values

Returns a ReflectionFunctionAbstract class. This will be ReflectionFunction for functions, or ReflectionMethod for methods.

### Changelog

### Examples

Example #1 ReflectionGenerator::getFunction() example

```
<?php

function gen()
{
    yield 1;
}

$gen = gen();

$reflectionGen = new ReflectionGenerator($gen);

var_dump($reflectionGen->getFunction());
```

The above example will output something similar to:

```
object(ReflectionFunction)#3 (1) {
  ["name"]=>
  string(3) "gen"
}
```

### See Also

- ReflectionGenerator::getThis() - Gets the $this value of the generator
- ReflectionGenerator::getTrace() - Gets the trace of the executing generator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectiongenerator.getfunction.php
