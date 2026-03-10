# ReflectionParameter::getDefaultValueConstantName

Source: https://devdocs.io/php/reflectionparameter.getdefaultvalueconstantname

(PHP 5 >= 5.4.6, PHP 7, PHP 8)

ReflectionParameter::getDefaultValueConstantName — Returns the default value's constant name if default value is constant or null

### Description

```
public ReflectionParameter::getDefaultValueConstantName(): ?string
```

Returns the default value's constant name of the parameter of any user-defined or internal function or method, if default value is constant or null. If the parameter is not optional a ReflectionException will be thrown.

### Parameters

This function has no parameters.

### Return Values

Returns string on success or null on failure.

### Changelog

### Examples

Example #1 Getting default values' constant names of function parameters

```
<?php
function foo($test, $bar = PHP_INT_MIN)
{
    echo $test . $bar;
}

$function = new ReflectionFunction('foo');

foreach ($function->getParameters() as $param) {
    echo 'Name: ' . $param->getName() . PHP_EOL;
    if ($param->isOptional()) {
        echo 'Default value: ' . $param->getDefaultValueConstantName() . PHP_EOL;
    }
    echo PHP_EOL;
}
?>
```

The above example will output:

```
Name: test

Name: bar
Default value: PHP_INT_MIN
```

### See Also

- ReflectionParameter::isOptional() - Checks if optional
- ReflectionParameter::isDefaultValueConstant() - Returns whether the default value of this parameter is a constant
- ReflectionParameter::getDefaultValue() - Gets default parameter value

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionparameter.getdefaultvalueconstantname.php
