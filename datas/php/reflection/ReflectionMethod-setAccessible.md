# ReflectionMethod::setAccessible

Source: https://devdocs.io/php/reflectionmethod.setaccessible

(PHP 5 >= 5.3.2, PHP 7, PHP 8)

ReflectionMethod::setAccessible — Set method accessibility

This function has been DEPRECATED as of PHP 8.5.0. Relying on this function is highly discouraged.

### Description

```
#[\Deprecated] 
 public ReflectionMethod::setAccessible(bool $accessible): void
```

Enables invoking of a protected or private method via the ReflectionMethod::invoke() method.

Note: As of PHP 8.1.0, calling this method has no effect; all methods are invokable by default.

### Parameters

true to allow accessibility, or false.

### Return Values

No value is returned.

### Examples

Example #1 Simple Class definition

```
<?php
class MyClass
{
    private function foo()
    {
        return 'bar';
    }
}

$method = new ReflectionMethod("MyClass", "foo");
$method->setAccessible(true);

$obj = new MyClass();
echo $method->invoke($obj);
echo $obj->foo();
?>
```

The above example will output something similar to:

```
bar
Fatal error: Uncaught Error: Call to private method MyClass::foo() from global scope in /in/qdaZS:16
```

### See Also

- ReflectionMethod::isPrivate() - Checks if method is private
- ReflectionMethod::isProtected() - Checks if method is protected

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionmethod.setaccessible.php
