# ReflectionProperty::setAccessible

Source: https://devdocs.io/php/reflectionproperty.setaccessible

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

ReflectionProperty::setAccessible — Set property accessibility

This function has been DEPRECATED as of PHP 8.5.0. Relying on this function is highly discouraged.

### Description

```
#[\Deprecated] 
 public ReflectionProperty::setAccessible(bool $accessible): void
```

Enables access to a protected or private property via the ReflectionProperty::getValue() and ReflectionProperty::setValue() methods.

Note: As of PHP 8.1.0, calling this method has no effect; all properties are accessible by default.

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
    private $foo = 'bar';
}

$property = new ReflectionProperty("MyClass", "foo");
$property->setAccessible(true);

$obj = new MyClass();
echo $property->getValue($obj);
echo $obj->foo;
?>
```

The above example will output something similar to:

```
bar
Fatal error: Uncaught Error: Cannot access private property MyClass::$foo in /in/WJqTv:12
```

### See Also

- ReflectionProperty::isPrivate() - Checks if property is private
- ReflectionProperty::isProtected() - Checks if property is protected

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionproperty.setaccessible.php
