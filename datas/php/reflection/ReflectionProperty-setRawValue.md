# ReflectionProperty::setRawValue

Source: https://devdocs.io/php/reflectionproperty.setrawvalue

(PHP 8 >= 8.4.0)

ReflectionProperty::setRawValue — Sets the value of a property, bypassing a set hook if defined

### Description

```
public ReflectionProperty::setRawValue(object $object, mixed $value): void
```

Sets the value of a property, bypassing a set hook if defined.

### Parameters

### Return Values

No value is returned.

### Errors/Exceptions

If the property is virtual, an Error will be thrown, as there is no raw value to set.

### Examples

Example #1 ReflectionProperty::setRawValue() example

```
<?php
class Example
{
    public int $age {
        set {
            if ($value <= 0) {
               throw new \InvalidArgumentException();
            }
            $this->age = $value;
        }
    }
}

$example = new Example();

$rClass = new \ReflectionClass(Example::class);
$rProp = $rClass->getProperty('age');

// These would go through the set hook, and throw an exception.
try {
    $example->age = -2;
} catch (InvalidArgumentException) {
    echo "InvalidArgumentException for setting property to -2\n";
}
try {
    $rProp->setValue($example, -2);
} catch (InvalidArgumentException) {
    echo "InvalidArgumentException for using ReflectionProperty::setValue() with -2\n";
}

// But this would set the $age to -2 without error.
$rProp->setRawValue($example, -2);
echo $example->age;
?>
```

The above example will output:

```
InvalidArgumentException for setting property to -2
InvalidArgumentException for using ReflectionProperty::setValue() with -2
-2
```

### See Also

- Asymmetric property visibility

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionproperty.setrawvalue.php
