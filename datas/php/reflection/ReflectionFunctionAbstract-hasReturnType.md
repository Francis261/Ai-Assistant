# ReflectionFunctionAbstract::hasReturnType

Source: https://devdocs.io/php/reflectionfunctionabstract.hasreturntype

(PHP 7, PHP 8)

ReflectionFunctionAbstract::hasReturnType — Checks if the function has a specified return type

### Description

```
public ReflectionFunctionAbstract::hasReturnType(): bool
```

Checks whether the reflected function has a return type specified.

### Parameters

This function has no parameters.

### Return Values

Returns true if the function is a specified return type, otherwise false.

### Examples

Example #1 ReflectionFunctionAbstract::hasReturnType() example

```
<?php

function to_int($param) : int {
    return (int) $param;
}

$reflection1 = new ReflectionFunction('to_int');
var_dump($reflection1->hasReturnType());
```

The above example will output:

```
bool(true)
```

Example #2 Usage on built-in functions

```
<?php

$reflection2 = new ReflectionFunction('array_merge');

var_dump($reflection2->hasReturnType());
```

The above example will output:

```
bool(false)
```

This is because many internal functions do not have types specified for their parameters or return values. It is therefore best to avoid using this method on built-in functions.

### See Also

- ReflectionFunctionAbstract::getReturnType() - Gets the specified return type of a function

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionfunctionabstract.hasreturntype.php
