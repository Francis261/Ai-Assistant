# ReflectionFunctionAbstract::getTentativeReturnType

Source: https://devdocs.io/php/reflectionfunctionabstract.gettentativereturntype

(PHP 8 >= 8.1.0)

ReflectionFunctionAbstract::getTentativeReturnType — Returns the tentative return type associated with the function

### Description

```
public ReflectionFunctionAbstract::getTentativeReturnType(): ?ReflectionType
```

Returns the tentative return type associated with the function.

### Parameters

This function has no parameters.

### Return Values

Returns a ReflectionType object if a tentative return type is specified, null otherwise.

### Examples

Example #1 ReflectionFunctionAbstract::getTentativeReturnType() example

```
<?php

$method = new ReflectionMethod(\ArrayAccess::class, 'offsetGet');
var_dump($method->getTentativeReturnType());
```

The above example will output something similar to:

```
object(ReflectionNamedType)#2 (0) {
}
```

### See Also

- ReflectionFunctionAbstract::getReturnType() - Gets the specified return type of a function
- ReflectionFunctionAbstract::hasTentativeReturnType() - Returns whether the function has a tentative return type
- Return Type Compatibility with Internal Classes

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionfunctionabstract.gettentativereturntype.php
