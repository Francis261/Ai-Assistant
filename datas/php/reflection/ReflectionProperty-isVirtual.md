# ReflectionProperty::isVirtual

Source: https://devdocs.io/php/reflectionproperty.isvirtual

(PHP 8 >= 8.4.0)

ReflectionProperty::isVirtual — Determines if a property is virtual

### Description

```
public ReflectionProperty::isVirtual(): bool
```

Determines if a property is virtual.

### Parameters

This function has no parameters.

### Return Values

Returns true if the property is virtual, false otherwise.

### Examples

Example #1 ReflectionProperty::isVirtual() example

```
<?php
class Example
{
    // None of the hooks reference the property,
    // so this is virtual.
    public string $name { get => "Name here"; }

    // This hook references the property by name,
    // so it is not virtual.
    public int $age {
        set {
            if ($value <= 0) {
               throw new \InvalidArgumentException();
            }
            $this->age = $value;
        }
    }

    // Non-hooked properties are always not-virtual.
    public string $job;
}

$rClass = new \ReflectionClass(Example::class);

var_dump($rClass->getProperty('name')->isVirtual());
var_dump($rClass->getProperty('age')->isVirtual());
var_dump($rClass->getProperty('job')->isVirtual());
?>
```

The above example will output:

```
bool(true)
bool(false)
bool(false)
```

### See Also

- Virtual properties

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionproperty.isvirtual.php
