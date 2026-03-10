# constant

Source: https://devdocs.io/php/function.constant

(PHP 4 >= 4.0.4, PHP 5, PHP 7, PHP 8)

constant — Returns the value of a constant

### Description

```
constant(string $name): mixed
```

Return the value of the constant indicated by name.

constant() is useful if you need to retrieve the value of a constant, but do not know its name. I.e. it is stored in a variable or returned by a function.

This function works also with class constants and enum cases.

### Parameters

The constant name.

### Return Values

Returns the value of the constant.

### Errors/Exceptions

If the constant is not defined, an Error exception is thrown. Prior to PHP 8.0.0, an E_WARNING level error was generated in that case.

### Changelog

### Examples

Example #1 Using constant() with Constants

```
<?php

define("MAXSIZE", 100);

echo MAXSIZE;
echo constant("MAXSIZE"); // same thing as the previous line

interface bar {
    const test = 'foobar!';
}

class foo {
    const test = 'foobar!';
}

$const = 'test';

var_dump(constant('bar::'. $const)); // string(7) "foobar!"
var_dump(constant('foo::'. $const)); // string(7) "foobar!"

?>
```

Example #2 Using constant() with Enum Cases (as of PHP 8.1.0)

```
<?php

enum Suit
{
    case Hearts;
    case Diamonds;
    case Clubs;
    case Spades;
}

$case = 'Hearts';

var_dump(constant('Suit::'. $case)); // enum(Suit::Hearts)

?>
```

### See Also

- define() - Defines a named constant
- defined() - Checks whether a constant with the given name exists
- get_defined_constants() - Returns an associative array with the names of all the constants and their values
- The section on Constants

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.constant.php
