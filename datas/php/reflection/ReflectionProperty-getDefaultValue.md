# ReflectionProperty::getDefaultValue

Source: https://devdocs.io/php/reflectionproperty.getdefaultvalue

(PHP 8)

ReflectionProperty::getDefaultValue — Returns the default value declared for a property

### Description

```
public ReflectionProperty::getDefaultValue(): mixed
```

Gets the implicit or explicitly declared default value for a property.

### Parameters

This function has no parameters.

### Return Values

The default value if the property has any default value (including null). If there is no default value, then null is returned. It is not possible to differentiate between a null default value and an unitialized typed property. Use ReflectionProperty::hasDefaultValue() to detect the difference.

### Examples

Example #1 ReflectionProperty::getDefaultValue() example

```
<?php
class Foo {
    public $bar = 1;
    public ?int $baz;
    public int $boing = 0;
    public function __construct(public string $bak = "default") { }
}

$ro = new ReflectionClass(Foo::class);
var_dump($ro->getProperty('bar')->getDefaultValue());
var_dump($ro->getProperty('baz')->getDefaultValue());
var_dump($ro->getProperty('boing')->getDefaultValue());
var_dump($ro->getProperty('bak')->getDefaultValue());
?>
```

The above example will output:

```
int(1)
NULL
int(0)
NULL
```

### See Also

- ReflectionProperty::hasDefaultValue() - Checks if property has a default value declared

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionproperty.getdefaultvalue.php
