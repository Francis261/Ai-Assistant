# ReflectionFunctionAbstract::getAttributes

Source: https://devdocs.io/php/reflectionfunctionabstract.getattributes

(PHP 8)

ReflectionFunctionAbstract::getAttributes — Gets Attributes

### Description

```
public ReflectionFunctionAbstract::getAttributes(?string $name = null, int $flags = 0): array
```

Returns all attributes declared on this function or method as an array of ReflectionAttribute.

### Parameters

Filter the results to include only ReflectionAttribute instances for attributes matching this class name.

Flags for determining how to filter the results, if name is provided.

Default is 0 which will only return results for attributes that are of the class name.

The only other option available, is to use ReflectionAttribute::IS_INSTANCEOF, which will instead use instanceof for filtering.

### Return Values

Array of attributes, as a ReflectionAttribute object.

### Examples

Example #1 Basic usage with a class method

```
<?php
#[Attribute]
class Fruit {
}

#[Attribute]
class Red {
}

class Factory {
    #[Fruit]
    #[Red]
    public function makeApple(): string
    {
        return 'apple';
    }
}

$method = new ReflectionMethod('Factory', 'makeApple');
$attributes = $method->getAttributes();
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

Example #2 Basic usage with a function

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
function makeApple(): string
{
    return 'apple';
}

$function = new ReflectionFunction('makeApple');
$attributes = $function->getAttributes();
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

Example #3 Filtering results by class name

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
function makeApple(): string
{
    return 'apple';
}

$function = new ReflectionFunction('makeApple');
$attributes = $function->getAttributes('Fruit');
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

Example #4 Filtering results by class name, with inheritance

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
function makeApple(): string
{
    return 'apple';
}

$function = new ReflectionFunction('makeApple');
$attributes = $function->getAttributes('Color', ReflectionAttribute::IS_INSTANCEOF);
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
- ReflectionParameter::getAttributes() - Gets Attributes
- ReflectionProperty::getAttributes() - Gets Attributes

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionfunctionabstract.getattributes.php
