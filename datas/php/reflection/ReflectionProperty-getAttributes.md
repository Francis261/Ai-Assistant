# ReflectionProperty::getAttributes

Source: https://devdocs.io/php/reflectionproperty.getattributes

(PHP 8)

ReflectionProperty::getAttributes — Gets Attributes

### Description

```
public ReflectionProperty::getAttributes(?string $name = null, int $flags = 0): array
```

Returns all attributes declared on this class property as an array of ReflectionAttribute.

### Parameters

Filter the results to include only ReflectionAttribute instances for attributes matching this class name.

Flags for determining how to filter the results, if name is provided.

Default is 0 which will only return results for attributes that are of the class name.

The only other option available, is to use ReflectionAttribute::IS_INSTANCEOF, which will instead use instanceof for filtering.

### Return Values

Array of attributes, as a ReflectionAttribute object.

### Examples

Example #1 Basic usage

```
<?php
#[Attribute]
class Fruit {
}

#[Attribute]
class Red {
}

class Basket {
    #[Fruit]
    #[Red]
    public string $apple = 'apple';
}

$property = new ReflectionProperty('Basket', 'apple');
$attributes = $property->getAttributes();
print_r(array_map(fn($attribute) => $attribute->getName(), $attributes));
?>
```

The above example will output:

```
Array
(
    [0] => Fruit
    [1] => Red
)
```

Example #2 Filtering results by class name

```
<?php
#[Attribute]
class Fruit {
}

#[Attribute]
class Red {
}

class Basket {
    #[Fruit]
    #[Red]
    public string $apple = 'apple';
}

$property = new ReflectionProperty('Basket', 'apple');
$attributes = $property->getAttributes('Fruit');
print_r(array_map(fn($attribute) => $attribute->getName(), $attributes));
?>
```

The above example will output:

```
Array
(
    [0] => Fruit
)
```

Example #3 Filtering results by class name, with inheritance

```
<?php
interface Color {
}

#[Attribute]
class Fruit {
}

#[Attribute]
class Red implements Color {
}

class Basket {
    #[Fruit]
    #[Red]
    public string $apple = 'apple';
}

$property = new ReflectionProperty('Basket', 'apple');
$attributes = $property->getAttributes('Color', ReflectionAttribute::IS_INSTANCEOF);
print_r(array_map(fn($attribute) => $attribute->getName(), $attributes));
?>
```

The above example will output:

```
Array
(
    [0] => Red
)
```

### See Also

- ReflectionClass::getAttributes() - Gets Attributes
- ReflectionClassConstant::getAttributes() - Gets Attributes
- ReflectionFunctionAbstract::getAttributes() - Gets Attributes
- ReflectionParameter::getAttributes() - Gets Attributes

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionproperty.getattributes.php
