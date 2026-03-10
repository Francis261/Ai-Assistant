# ReflectionParameter::hasType

Source: https://devdocs.io/php/reflectionparameter.hastype

(PHP 7, PHP 8)

ReflectionParameter::hasType — Checks if parameter has a type

### Description

```
public ReflectionParameter::hasType(): bool
```

Checks if the parameter has a type associated with it.

### Parameters

This function has no parameters.

### Return Values

true if a type is specified, false otherwise.

### Examples

Example #1 ReflectionParameter::hasType() example

```
<?php
function someFunction(string $param, $param2 = null) {}

$reflectionFunc = new ReflectionFunction('someFunction');
$reflectionParams = $reflectionFunc->getParameters();

var_dump($reflectionParams[0]->hasType());
var_dump($reflectionParams[1]->hasType());
```

The above example will output something similar to:

```
bool(true)
bool(false)
```

### See Also

- ReflectionParameter::getType() - Gets a parameter's type

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionparameter.hastype.php
