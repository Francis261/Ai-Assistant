# ReflectionProperty::getRawValue

Source: https://devdocs.io/php/reflectionproperty.getrawvalue

(PHP 8 >= 8.4.0)

ReflectionProperty::getRawValue — Returns the value of a property, bypassing a get hook if defined

### Description

```
public ReflectionProperty::getRawValue(object $object): mixed
```

This function is currently not documented; only its argument list is available.

Returns the value of a property, bypassing a get hook if defined.

### Parameters

### Return Values

The stored value of the property, bypassing a get hook if defined.

### Errors/Exceptions

If the property is virtual, an Error will be thrown, as there is no raw value to retrieve.

### Examples

Example #1 ReflectionProperty::getRawValue() example

```
<?php

class Example
{
    public string $tag {
        get => strtolower($this->tag);
    }
}

$example = new Example();
$example->tag = 'PHP';

$rClass = new \ReflectionClass(Example::class);
$rProp = $rClass->getProperty('tag');

// These would go through the get hook, so would produce "php"
echo $example->tag, PHP_EOL;
echo $rProp->getValue($example), PHP_EOL;

// But this would bypass the hook and produce "PHP"
echo $rProp->getRawValue($example);

?>
```

The above example will output:

```
php
php
PHP
```

### See Also

- Asymmetric property visibility

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionproperty.getrawvalue.php
