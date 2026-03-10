# ReflectionProperty::hasDefaultValue

Source: https://devdocs.io/php/reflectionproperty.hasdefaultvalue

(PHP 8)

ReflectionProperty::hasDefaultValue — Checks if property has a default value declared

### Description

```
public ReflectionProperty::hasDefaultValue(): bool
```

Checks whether the property was declared with a default value, including an implicit null default value. Only returns false for typed properties without default value (or dynamic properties).

### Parameters

This function has no parameters.

### Return Values

If the property has any default value (including null) true is returned; if the property is typed without a default value declared or is a dynamic property, false is returned.

### Examples

Example #1 ReflectionProperty::hasDefaultValue() example

```
<?php
class Foo {
    public $bar;
    public ?int $baz;
    public ?int $foo = null;
    public int $boing;
    
    public function __construct()
    {
        $this->ping = '';
    }
}

$ro = new ReflectionObject(new Foo());
var_dump($ro->getProperty('bar')->hasDefaultValue());
var_dump($ro->getProperty('baz')->hasDefaultValue());
var_dump($ro->getProperty('foo')->hasDefaultValue());
var_dump($ro->getProperty('boing')->hasDefaultValue());
var_dump($ro->getProperty('ping')->hasDefaultValue()); // Dynamic property
var_dump($ro->getProperty('pong')->hasDefaultValue()); // Not defined property
?>
```

The above example will output:

```
bool(true)
bool(false)
bool(true)
bool(false)
bool(false)

Fatal error: Uncaught ReflectionException: Property Foo::$pong does not exist in example.php
```

### See Also

- ReflectionProperty::getDefaultValue() - Returns the default value declared for a property

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionproperty.hasdefaultvalue.php
