# ReflectionClass::newInstanceWithoutConstructor

Source: https://devdocs.io/php/reflectionclass.newinstancewithoutconstructor

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

ReflectionClass::newInstanceWithoutConstructor — Creates a new class instance without invoking the constructor

### Description

```
public ReflectionClass::newInstanceWithoutConstructor(): object
```

Creates a new instance of the class without invoking the constructor.

### Parameters

### Return Values

### Errors/Exceptions

A ReflectionException if the class is an internal class that cannot be instantiated without invoking the constructor. This exception is limited only to internal classes that are final.

### See Also

- ReflectionClass::newInstance() - Creates a new class instance from given arguments
- ReflectionClass::newInstanceArgs() - Creates a new class instance from given arguments

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.newinstancewithoutconstructor.php
