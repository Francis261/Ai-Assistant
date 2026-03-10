# ReflectionType::__toString

Source: https://devdocs.io/php/reflectiontype.tostring

(PHP 7, PHP 8)

ReflectionType::__toString — To string

### Description

```
public ReflectionType::__toString(): string
```

Gets the parameter type name.

### Parameters

This function has no parameters.

### Return Values

Returns the type of the parameter.

### Changelog

### Examples

Example #1 ReflectionType::__toString() example

```
<?php
function someFunction(string $param) {}

$reflectionFunc = new ReflectionFunction('someFunction');
$reflectionParam = $reflectionFunc->getParameters()[0];

echo $reflectionParam->getType();
```

The above example will output something similar to:

```
string
```

### See Also

- ReflectionNamedType::getName() - Get the name of the type as a string
- ReflectionNamedType::isBuiltin() - Checks if it is a built-in type
- ReflectionType::allowsNull() - Checks if null is allowed
- ReflectionUnionType::getTypes() - Returns the types included in the union type
- ReflectionParameter::getType() - Gets a parameter's type

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectiontype.tostring.php
