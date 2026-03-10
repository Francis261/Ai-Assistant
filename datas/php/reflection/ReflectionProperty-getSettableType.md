# ReflectionProperty::getSettableType

Source: https://devdocs.io/php/reflectionproperty.getsettabletype

(PHP 8 >= 8.4.0)

ReflectionProperty::getSettableType — Returns the parameter type of a setter hook

### Description

```
public ReflectionProperty::getSettableType(): ?ReflectionType
```

Returns the parameter type of a set hook. If no set hook is defined, it behaves identically to ReflectionProperty::getType().

### Parameters

This function has no parameters.

### Return Values

- This method returns an instance of ReflectionType that matches the settable type for the property.
- If there is a set hook that defines an explicit type, that will be returned.
- If the hook does not specify a type, or it does not exist, the property type will be returned, identically to ReflectionProperty::getType(). This value may be null if the property is untyped.
- If the property is virtual and has no set hook, a ReflectionType instance for never will be returned.

### Examples

Example #1 ReflectionProperty::getSettableType() example

```
<?php

class Example
{
    public string $basic {
        set => strtolower($value);
    }

    public string $wider {
        set(string|Stringable $value) => (string) $value;
    }

    public string $virtual {
        get => 'Do not change this';
    }

    public $untyped = 'silly';
}

$rClass = new \ReflectionClass(Example::class);

var_dump($rClass->getProperty('basic')->getSettableType());
var_dump($rClass->getProperty('wider')->getSettableType());
var_dump($rClass->getProperty('virtual')->getSettableType());
var_dump($rClass->getProperty('untyped')->getSettableType());

?>
```

The above example will output:

```
object(ReflectionNamedType)#3 (0) {
}
object(ReflectionUnionType)#2 (0) {
}
object(ReflectionNamedType)#3 (0) {
}
NULL
```

### See Also

- ReflectionProperty::getType() - Gets a property's type

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionproperty.getsettabletype.php
