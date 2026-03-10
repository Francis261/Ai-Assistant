# ReflectionClass::getEndLine

Source: https://devdocs.io/php/reflectionclass.getendline

(PHP 5, PHP 7, PHP 8)

ReflectionClass::getEndLine — Gets end line

### Description

```
public ReflectionClass::getEndLine(): int|false
```

Gets end line number from a user-defined class definition.

### Parameters

This function has no parameters.

### Return Values

The ending line number of the user defined class, or false if unknown.

### Examples

Example #1 ReflectionClass::getEndLine() example

```
<?php
// Test Class
class TestClass { }

$rc = new ReflectionClass('TestClass');

echo $rc->getEndLine();
?>
```

The above example will output:

```
3
```

### See Also

- ReflectionClass::getStartLine() - Gets starting line number

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclass.getendline.php
