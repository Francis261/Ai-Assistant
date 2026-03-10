# ReflectionFunctionAbstract::hasTentativeReturnType

Source: https://devdocs.io/php/reflectionfunctionabstract.hastentativereturntype

(PHP 8 >= 8.1.0)

ReflectionFunctionAbstract::hasTentativeReturnType — Returns whether the function has a tentative return type

### Description

```
public ReflectionFunctionAbstract::hasTentativeReturnType(): bool
```

Returns whether the function has a tentative return type.

### Parameters

This function has no parameters.

### Return Values

Returns true if the function has a tentative return type, otherwise false.

### Examples

Example #1 ReflectionFunctionAbstract::hasTentativeReturnType() example

```
<?php

$method = new ReflectionMethod(\ArrayAccess::class, 'offsetGet');
var_dump($method->hasTentativeReturnType());
```

The above example will output:

```
bool(true)
```

### See Also

- ReflectionFunctionAbstract::getTentativeReturnType() - Returns the tentative return type associated with the function
- ReflectionFunctionAbstract::hasReturnType() - Checks if the function has a specified return type
- Return Type Compatibility with Internal Classes

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionfunctionabstract.hastentativereturntype.php
