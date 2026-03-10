# ReflectionFunctionAbstract::getClosureUsedVariables

Source: https://devdocs.io/php/reflectionfunctionabstract.getclosureusedvariables

(PHP 8 >= 8.1.0)

ReflectionFunctionAbstract::getClosureUsedVariables — Returns an array of the used variables in the Closure

### Description

```
public ReflectionFunctionAbstract::getClosureUsedVariables(): array
```

Returns an array of the used variables in the Closure.

### Parameters

This function has no parameters.

### Return Values

Returns an array of the used variables in the Closure.

### Examples

Example #1 ReflectionFunctionAbstract::getClosureUsedVariables() example

```
<?php

$one = 1;
$two = 2;

$function = function() use ($one, $two) {
    static $three = 3;
};

$reflector = new ReflectionFunction($function);

var_dump($reflector->getClosureUsedVariables());
?>
```

The above example will output something similar to:

```
array(2) {
  ["one"]=>
  int(1)
  ["two"]=>
  int(2)
}
```

### See Also

- ReflectionFunctionAbstract::getClosureScopeClass() - Returns the class corresponding to the scope inside a closure
- ReflectionFunctionAbstract::getClosureThis() - Returns the object which corresponds to $this inside a closure

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionfunctionabstract.getclosureusedvariables.php
