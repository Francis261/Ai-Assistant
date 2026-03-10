# ReflectionMethod::getModifiers

Source: https://devdocs.io/php/reflectionmethod.getmodifiers

(PHP 5, PHP 7, PHP 8)

ReflectionMethod::getModifiers — Gets the method modifiers

### Description

```
public ReflectionMethod::getModifiers(): int
```

Returns a bitfield of the access modifiers for this method.

### Parameters

This function has no parameters.

### Return Values

A numeric representation of the modifiers. The actual meaning of these modifiers are described under predefined constants.

### Examples

Example #1 ReflectionMethod::getModifiers() example

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
?>
```

The above example will output something similar to:

```
Modifiers for method foo():
49
final public static
Modifiers for method bar():
1
public
```

### See Also

- Reflection::getModifierNames() - Gets modifier names

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionmethod.getmodifiers.php
