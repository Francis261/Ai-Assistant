# ReflectionNamedType::isBuiltin

Source: https://devdocs.io/php/reflectionnamedtype.isbuiltin

(PHP 7, PHP 8)

ReflectionNamedType::isBuiltin — Checks if it is a built-in type

### Description

```
public ReflectionNamedType::isBuiltin(): bool
```

Checks if the type is a built-in type in PHP. A built-in type is any type that is not a class, interface, or trait.

### Parameters

This function has no parameters.

### Return Values

true if it's a built-in type, otherwise false

### Examples

Example #1 ReflectionNamedType::isBuiltin() example

```
<?php
class SomeClass {}

function someFunction(string $param, SomeClass $param2, stdClass $param3) {}

$reflectionFunc = new ReflectionFunction('someFunction');
$reflectionParams = $reflectionFunc->getParameters();

var_dump($reflectionParams[0]->getType()->isBuiltin());
var_dump($reflectionParams[1]->getType()->isBuiltin());
var_dump($reflectionParams[2]->getType()->isBuiltin());
```

The above example will output:

```
bool(true)
bool(false)
bool(false)
```

Note that the ReflectionNamedType::isBuiltin() method does not distinguish between internal and custom classes. To make this distinction, the ReflectionClass::isInternal() method should be used on the returned class name.

### See Also

- ReflectionType::allowsNull() - Checks if null is allowed
- ReflectionType::__toString() - To string
- ReflectionClass::isInternal() - Checks if class is defined internally by an extension, or the core
- ReflectionParameter::getType() - Gets a parameter's type

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionnamedtype.isbuiltin.php
