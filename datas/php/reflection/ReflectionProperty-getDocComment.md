# ReflectionProperty::getDocComment

Source: https://devdocs.io/php/reflectionproperty.getdoccomment

(PHP 5 >= 5.1.0, PHP 7, PHP 8)

ReflectionProperty::getDocComment — Gets the property doc comment

### Description

```
public ReflectionProperty::getDocComment(): string|false
```

Gets the doc comment for a property.

### Parameters

This function has no parameters.

### Return Values

The doc comment if it exists, otherwise false.

### Examples

Example #1 ReflectionProperty::getDocComment() example

```
<?php
class Str
{
    /**
     * @var int  The length of the string
     */
    public $length = 5;
}

$prop = new ReflectionProperty('Str', 'length');

var_dump($prop->getDocComment());

?>
```

The above example will output something similar to:

```
string(53) "/**
     * @var int  The length of the string
     */"
```

Example #2 Multiple property declarations

If multiple property declarations are preceeded by a single doc comment, the doc comment refers to the first property only.

```
<?php
class Foo
{
    /** @var string */
    public $a, $b;
}
$class = new \ReflectionClass('Foo');
foreach ($class->getProperties() as $property) {
    echo $property->getName() . ': ' . var_export($property->getDocComment(), true) . PHP_EOL;
}
?>
```

The above example will output:

```
a: '/** @var string */'
b: false
```

### See Also

- ReflectionProperty::getModifiers() - Gets the property modifiers
- ReflectionProperty::getName() - Gets property name
- ReflectionProperty::getValue() - Gets value

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionproperty.getdoccomment.php
