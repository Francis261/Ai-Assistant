# Reflection::getModifierNames

Source: https://devdocs.io/php/reflection.getmodifiernames

(PHP 5, PHP 7, PHP 8)

Reflection::getModifierNames — Gets modifier names

### Description

```
public static Reflection::getModifierNames(int $modifiers): array
```

Gets modifier names.

### Parameters

Bitfield of the modifiers to get.

### Return Values

An array of modifier names.

### Examples

Example #1 Reflection::getModifierNames() example

```
<?php
class Testing
{
    final public static function foo()
    {
        return;
    }

    public function bar()
    {
        return;
    }
}

$foo = new ReflectionMethod('Testing', 'foo');

echo "Modifiers for method foo():\n";
echo $foo->getModifiers() . "\n";
echo implode(' ', Reflection::getModifierNames($foo->getModifiers())) . "\n";

$bar = new ReflectionMethod('Testing', 'bar');

echo "Modifiers for method bar():\n";
echo $bar->getModifiers() . "\n";
echo implode(' ', Reflection::getModifierNames($bar->getModifiers()));
```

The above example will output something similar to:

```
Modifiers for method foo():
261
final public static
Modifiers for method bar():
65792
public
```

### See Also

- ReflectionClass::getModifiers() - Gets the class modifiers
- ReflectionClassConstant::getModifiers() - Gets the class constant modifiers
- ReflectionMethod::getModifiers() - Gets the method modifiers
- ReflectionProperty::getModifiers() - Gets the property modifiers

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflection.getmodifiernames.php
