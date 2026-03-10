# ReflectionFunctionAbstract::getReturnType

Source: https://devdocs.io/php/reflectionfunctionabstract.getreturntype

(PHP 7, PHP 8)

ReflectionFunctionAbstract::getReturnType — Gets the specified return type of a function

### Description

```
public ReflectionFunctionAbstract::getReturnType(): ?ReflectionType
```

Gets the specified return type of a reflected function.

### Parameters

This function has no parameters.

### Return Values

Returns a ReflectionType object if a return type is specified, null otherwise.

### Examples

Example #1 ReflectionFunctionAbstract::getReturnType() example

```
<?php

function to_int($param) : int {
    return (int) $param;
}

$reflection1 = new ReflectionFunction('to_int');
echo $reflection1->getReturnType();
```

The above example will output:

```
int
```

Example #2 Usage on built-in functions

```
<?php

$reflection2 = new ReflectionFunction('array_merge');

var_dump($reflection2->getReturnType());
```

The above example will output:

```
null
```

This is because many internal functions do not have types specified for their parameters or return values. It is therefore best to avoid using this method on built-in functions.

### See Also

- ReflectionFunctionAbstract::hasReturnType() - Checks if the function has a specified return type
- ReflectionType::__toString() - To string

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionfunctionabstract.getreturntype.php
