# ReflectionMethod::getClosure

Source: https://devdocs.io/php/reflectionmethod.getclosure

(PHP 5 >= 5.4.0, PHP 7, PHP 8)

ReflectionMethod::getClosure — Returns a dynamically created closure for the method

### Description

```
public ReflectionMethod::getClosure(?object $object = null): Closure
```

Create a closure which will call the method.

### Parameters

Forbidden for static methods, required for other methods.

### Return Values

Returns the newly created Closure.

### Errors/Exceptions

Throws a ValueError if object is null but the method is non-static.

Throws a ReflectionException if object is not an instance of the class this method was declared in.

### Changelog

### See Also

- First class callable syntax

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionmethod.getclosure.php
