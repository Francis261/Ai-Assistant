# settype

Source: https://devdocs.io/php/function.settype

(PHP 4, PHP 5, PHP 7, PHP 8)

settype — Set the type of a variable

### Description

```
settype(mixed &$var, string $type): bool
```

Set the type of variable var to type.

### Parameters

The variable being converted.

Possibles values of type are:

- "boolean" or "bool"
- "integer" or "int"
- "float" or "double"
- "string"
- "array"
- "object"
- "null"

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 settype() example

```
<?php
$foo = "5bar"; // string
$bar = true;   // boolean

settype($foo, "integer"); // $foo is now 5   (integer)
settype($bar, "string");  // $bar is now "1" (string)

var_dump($foo, $bar);
?>
```

### Notes

Note:

Maximum value for "int" is PHP_INT_MAX.

### See Also

- gettype() - Get the type of a variable
- type-casting
- type-juggling

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.settype.php
