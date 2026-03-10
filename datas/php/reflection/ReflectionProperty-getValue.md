# ReflectionProperty::getValue

Source: https://devdocs.io/php/reflectionproperty.getvalue

(PHP 5, PHP 7, PHP 8)

ReflectionProperty::getValue — Gets value

### Description

```
public ReflectionProperty::getValue(?object $object = null): mixed
```

Gets the property's value.

### Parameters

If the property is non-static an object must be provided to fetch the property from. If you want to fetch the default property without providing an object use ReflectionClass::getDefaultProperties() instead.

### Return Values

The current value of the property.

### Changelog

### Examples

Example #1 ReflectionProperty::getValue() example

```
<?php
class Foo {
    public static $staticProperty = 'foobar';
    
    public $property = 'barfoo';
    protected $privateProperty = 'foofoo';
}

$reflectionClass = new ReflectionClass('Foo');

var_dump($reflectionClass->getProperty('staticProperty')->getValue());
var_dump($reflectionClass->getProperty('property')->getValue(new Foo));

$reflectionProperty = $reflectionClass->getProperty('privateProperty');
$reflectionProperty->setAccessible(true); // only required prior to PHP 8.1.0
var_dump($reflectionProperty->getValue(new Foo));
?>
```

The above example will output:

```
string(6) "foobar"
string(6) "barfoo"
string(6) "foofoo"
```

### See Also

- ReflectionProperty::setValue() - Set property value
- ReflectionProperty::setAccessible() - Set property accessibility
- ReflectionClass::getDefaultProperties() - Gets default properties
- ReflectionClass::getStaticPropertyValue() - Gets static property value

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionproperty.getvalue.php
