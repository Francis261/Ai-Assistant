# Enum values in constant expressions

Source: https://devdocs.io/php/language.enumerations.expressions

## Enum values in constant expressions

Because cases are represented as constants on the enum itself, they may be used as static values in most constant expressions: property defaults, static variable defaults, parameter defaults, global and class constant values. They may not be used in other enum case values, but normal constants may refer to an enum case.

However, implicit magic method calls such as ArrayAccess on enums are not allowed in static or constant definitions as we cannot absolutely guarantee that the resulting value is deterministic or that the method invocation is free of side effects. Function calls, method calls, and property access continue to be invalid operations in constant expressions.

```
<?php

// This is an entirely legal Enum definition.
enum Direction implements ArrayAccess
{
    case Up;
    case Down;

    public function offsetExists($offset): bool
    {
        return false;
    }

    public function offsetGet($offset): mixed
    {
        return null;
    }

    public function offsetSet($offset, $value): void
    {
        throw new Exception();
    }

    public function offsetUnset($offset): void
    {
        throw new Exception();
    }
}

class Foo
{
    // This is allowed.
    const DOWN = Direction::Down;

    // This is disallowed, as it may not be deterministic.
    const UP = Direction::Up['short'];
    // Fatal error: Cannot use [] on enums in constant expression
}

// This is entirely legal, because it's not a constant expression.
$x = Direction::Up['short'];
var_dump("\$x is " . var_export($x, true));

$foo = new Foo();
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.enumerations.expressions.php
