# ReflectionParameter::getDefaultValue

Source: https://devdocs.io/php/reflectionparameter.getdefaultvalue

(PHP 5 >= 5.0.3, PHP 7, PHP 8)

ReflectionParameter::getDefaultValue — Gets default parameter value

### Description

```
public ReflectionParameter::getDefaultValue(): mixed
```

Gets the default value of the parameter for any user-defined or internal function or method. If the parameter is not optional a ReflectionException will be thrown.

### Parameters

This function has no parameters.

### Return Values

The parameters default value.

### Changelog

### Examples

Example #1 Getting default values of function parameters

```
<?php
function foo($test, $bar = 'baz')
{
    echo $test . $bar;
}

$function = new ReflectionFunction('foo');

foreach ($function->getParameters() as $param) {
    echo 'Name: ' . $param->getName() . PHP_EOL;
    if ($param->isOptional()) {
        echo 'Default value: ' . $param->getDefaultValue() . PHP_EOL;
    }
    echo PHP_EOL;
}
?>
```

The above example will output:

```
Name: test

Name: bar
Default value: baz
```

### See Also

- ReflectionParameter::isOptional() - Checks if optional
- ReflectionParameter::isDefaultValueAvailable() - Checks if a default value is available
- ReflectionParameter::getDefaultValueConstantName() - Returns the default value's constant name if default value is constant or null
- ReflectionParameter::isPassedByReference() - Checks if passed by reference

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionparameter.getdefaultvalue.php
