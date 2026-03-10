# ReflectionClass::newInstanceArgs

Source: https://devdocs.io/php/reflectionclass.newinstanceargs

(PHP 5 >= 5.1.3, PHP 7, PHP 8)

ReflectionClass::newInstanceArgs — Creates a new class instance from given arguments

### Description

```
public ReflectionClass::newInstanceArgs(array $args = []): ?object
```

Creates a new instance of the class, the given arguments are passed to the class constructor.

### Parameters

The parameters to be passed to the class constructor as an array.

### Return Values

Returns a new instance of the class, or null on failure.

### Errors/Exceptions

A ReflectionException if the class constructor is not public.

A ReflectionException if the class does not have a constructor and the args parameter contains one or more parameters.

### Examples

Example #1 Basic usage of ReflectionClass::newInstanceArgs()

```
<?php
$class = new ReflectionClass('ReflectionFunction');
$instance = $class->newInstanceArgs(array('substr'));
var_dump($instance);
?>
```

The above example will output:

```
object(ReflectionFunction)#2 (1) {
  ["name"]=>
  string(6) "substr"
}
```

### See Also

- ReflectionClass::newInstance() - Creates a new class instance from given arguments
- ReflectionClass::newInstanceWithoutConstructor() - Creates a new class instance without invoking the constructor

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.newinstanceargs.php
