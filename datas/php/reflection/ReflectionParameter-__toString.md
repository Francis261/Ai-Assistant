# ReflectionParameter::__toString

Source: https://devdocs.io/php/reflectionparameter.tostring

(PHP 5, PHP 7, PHP 8)

ReflectionParameter::__toString — To string

### Description

```
public ReflectionParameter::__toString(): string
```

Get a human-readable description of the parameter.

### Parameters

This function has no parameters.

### Return Values

The string.

### Examples

Example #1 ReflectionParameter::__toString() example

```
<?php
echo new ReflectionParameter('substr', 0);
?>
```

The above example will output something similar to:

```
Parameter #0 [ <required> string $string ]
```

### See Also

- ReflectionFunction::__toString() - Returns the string representation of the ReflectionFunction object
- ReflectionMethod::__toString() - Returns the string representation of the Reflection method object
- __toString()

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionparameter.tostring.php
