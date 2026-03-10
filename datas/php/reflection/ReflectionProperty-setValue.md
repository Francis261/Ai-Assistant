# ReflectionProperty::setValue

Source: https://devdocs.io/php/reflectionproperty.setvalue

(PHP 5, PHP 7, PHP 8)

ReflectionProperty::setValue — Set property value

### Description

```
public ReflectionProperty::setValue(?object $object, mixed $value): void
```

```
public ReflectionProperty::setValue(mixed $value): void
```

Sets (changes) the property's value.

Note: To set static property values, use ReflectionProperty::setValue(null, $value).

### Parameters

For static properties, pass in null. For non-static properties, pass in the object.

The new value.

### Return Values

No value is returned.

### Changelog

### Examples

Example #1 ReflectionProperty::setValue() example

```
<?php
class Foo {
    public static $staticProperty;
    
    public $property;
    protected $privateProperty;
}

$reflectionClass = new ReflectionClass('Foo');

// As of PHP 8.3, passing in null as the first argument is required
// to access static properties.
$reflectionProperty = $reflectionClass->getProperty('staticProperty');
$reflectionProperty->setValue(null, 'foo');
var_dump(Foo::$staticProperty);

$foo = new Foo;

$reflectionClass->getProperty('property')->setValue($foo, 'bar');
var_dump($foo->property);

$reflectionProperty = $reflectionClass->getProperty('privateProperty');
$reflectionProperty->setAccessible(true); // only required prior to PHP 8.1.0
$reflectionProperty->setValue($foo, 'foobar');
var_dump($reflectionProperty->getValue($foo));
?>
```

The above example will output:

```
string(3) "foo"
string(3) "bar"
string(6) "foobar"
```

### See Also

- ReflectionProperty::getValue() - Gets value
- ReflectionProperty::setAccessible() - Set property accessibility
- ReflectionClass::setStaticPropertyValue() - Sets public static property value

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionproperty.setvalue.php
