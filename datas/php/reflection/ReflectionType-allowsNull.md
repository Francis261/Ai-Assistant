# ReflectionType::allowsNull

Source: https://devdocs.io/php/reflectiontype.allowsnull

(PHP 7, PHP 8)

ReflectionType::allowsNull — Checks if null is allowed

### Description

```
public ReflectionType::allowsNull(): bool
```

Checks whether the parameter allows null.

### Parameters

This function has no parameters.

### Return Values

true if null is allowed, otherwise false

### Examples

Example #1 ReflectionType::allowsNull() example

```
<?php
function someFunction(string $param, stdClass $param2 = null) {}

$reflectionFunc = new ReflectionFunction('someFunction');
$reflectionParams = $reflectionFunc->getParameters();

var_dump($reflectionParams[0]->getType()->allowsNull());
var_dump($reflectionParams[1]->getType()->allowsNull());
```

The above example will output:

```
bool(false)
bool(true)
```

### See Also

- ReflectionNamedType::isBuiltin() - Checks if it is a built-in type
- ReflectionType::__toString() - To string
- ReflectionParameter::getType() - Gets a parameter's type

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectiontype.allowsnull.php
