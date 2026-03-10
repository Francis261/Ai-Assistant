# ReflectionFunctionAbstract::isClosure

Source: https://devdocs.io/php/reflectionfunctionabstract.isclosure

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

ReflectionFunctionAbstract::isClosure — Checks if closure

### Description

```
public ReflectionFunctionAbstract::isClosure(): bool
```

Checks whether the reflected function is a Closure.

### Parameters

This function has no parameters.

### Return Values

Returns true if the function is a Closure, otherwise false.

### Examples

Example #1 ReflectionFunctionAbstract::isClosure() example

```
<?php
// Non-closure
$function1 = 'str_replace';
$reflection1 = new ReflectionFunction($function1);
var_dump($reflection1->isClosure());

// Closure
$function2 = function () {};
$reflection2 = new ReflectionFunction($function2);
var_dump($reflection2->isClosure());
?>
```

The above example will output:

```
bool(false)
bool(true)
```

### See Also

- ReflectionFunctionAbstract::isGenerator() - Returns whether this function is a generator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionfunctionabstract.isclosure.php
