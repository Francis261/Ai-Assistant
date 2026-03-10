# ReflectionClass::newInstance

Source: https://devdocs.io/php/reflectionclass.newinstance

(PHP 5, PHP 7, PHP 8)

ReflectionClass::newInstance — Creates a new class instance from given arguments

### Description

```
public ReflectionClass::newInstance(mixed ...$args): object
```

Creates a new instance of the class. The given arguments are passed to the class constructor.

### Parameters

Accepts a variable number of arguments which are passed to the class constructor, much like call_user_func().

### Return Values

### Errors/Exceptions

A ReflectionException if the class constructor is not public.

A ReflectionException if the class does not have a constructor and the args parameter contains one or more parameters.

### See Also

- ReflectionClass::newInstanceArgs() - Creates a new class instance from given arguments
- ReflectionClass::newInstanceWithoutConstructor() - Creates a new class instance without invoking the constructor

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.newinstance.php
