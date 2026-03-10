# ReflectionClass::getAttributes

Source: https://devdocs.io/php/reflectionclass.getattributes

(PHP 8)

ReflectionClass::getAttributes — Gets Attributes

### Description

```
public ReflectionClass::getAttributes(?string $name = null, int $flags = 0): array
```

Returns all attributes declared on this class as an array of ReflectionAttribute.

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

#[Fruit]
#[Red]
class Apple {
}

$class = new ReflectionClass('Apple');
$attributes = $class->getAttributes();
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

#[Fruit]
#[Red]
class Apple {
}

$class = new ReflectionClass('Apple');
$attributes = $class->getAttributes('Fruit');
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

#[Fruit]
#[Red]
class Apple {
}

$class = new ReflectionClass('Apple');
$attributes = $class->getAttributes(Color::class, ReflectionAttribute::IS_INSTANCEOF);
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

- ReflectionClassConstant::getAttributes() - Gets Attributes
- ReflectionFunctionAbstract::getAttributes() - Gets Attributes
- ReflectionParameter::getAttributes() - Gets Attributes
- ReflectionProperty::getAttributes() - Gets Attributes

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.getattributes.php
