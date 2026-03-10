# ReflectionGenerator::getExecutingFile

Source: https://devdocs.io/php/reflectiongenerator.getexecutingfile

(PHP 7, PHP 8)

ReflectionGenerator::getExecutingFile — Gets the file name of the currently executing generator

### Description

```
public ReflectionGenerator::getExecutingFile(): string
```

Get the full path and file name of the currently executing generator.

### Parameters

This function has no parameters.

### Return Values

Returns the full path and file name of the currently executing generator.

### Examples

Example #1 ReflectionGenerator::getExecutingFile() example

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

echo "File: {$reflectionGen->getExecutingFile()}";
```

The above example will output something similar to:

```
File: /path/to/file/example.php
```

### See Also

- ReflectionGenerator::getExecutingLine() - Gets the currently executing line of the generator
- ReflectionGenerator::getExecutingGenerator() - Gets the executing Generator object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectiongenerator.getexecutingfile.php
