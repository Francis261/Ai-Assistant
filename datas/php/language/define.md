# define

Source: https://devdocs.io/php/function.define

(PHP 4, PHP 5, PHP 7, PHP 8)

define — Defines a named constant

### Description

```
define(string $constant_name, mixed $value, bool $case_insensitive = false): bool
```

Defines a named constant at runtime.

### Parameters

The name of the constant.

Note:

It is possible to define() constants with reserved or even invalid names, whose value can (only) be retrieved with constant(). However, doing so is not recommended.

The value of the constant.

While it is possible to define resource constants, it is not recommended and may cause unpredictable behavior.

If set to true, the constant will be defined case-insensitive. The default behavior is case-sensitive; i.e. CONSTANT and Constant represent different values.

Defining case-insensitive constants is deprecated as of PHP 7.3.0. As of PHP 8.0.0, only false is an acceptable value, passing true will produce a warning.

Note:

Case-insensitive constants are stored as lower-case.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 Defining Constants

```
<?php
define("CONSTANT", "Hello world.");
echo CONSTANT; // outputs "Hello world."
echo Constant; // outputs "Constant" and issues a notice.

define("GREETING", "Hello you.", true);
echo GREETING; // outputs "Hello you."
echo Greeting; // outputs "Hello you."

// Works as of PHP 7
define('ANIMALS', array(
    'dog',
    'cat',
    'bird'
));
echo ANIMALS[1]; // outputs "cat"

?>
```

Example #2 Constants with Reserved Names

This example illustrates the possibility to define a constant with the same name as a magic constant. Since the resulting behavior is obviously confusing, it is not recommended to do this in practise, though.

```
<?php
var_dump(defined('__LINE__'));
var_dump(define('__LINE__', 'test'));
var_dump(constant('__LINE__'));
var_dump(__LINE__);
?>
```

The above example will output:

```
bool(false)
bool(true)
string(4) "test"
int(5)
```

### See Also

- defined() - Checks whether a constant with the given name exists
- constant() - Returns the value of a constant
- The section on Constants

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.define.php
