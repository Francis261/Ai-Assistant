# ReflectionFunctionAbstract::isDeprecated

Source: https://devdocs.io/php/reflectionfunctionabstract.isdeprecated

(PHP 5 >= 5.2.0, PHP 7, PHP 8)

ReflectionFunctionAbstract::isDeprecated — Checks if deprecated

### Description

```
public ReflectionFunctionAbstract::isDeprecated(): bool
```

Checks whether the function is deprecated.

### Parameters

This function has no parameters.

### Return Values

true if it's deprecated, otherwise false

### Examples

Example #1 ReflectionFunctionAbstract::isDeprecated() example

```
<?php
$rf = new ReflectionFunction('ereg');
var_dump($rf->isDeprecated());
?>
```

The above example will output:

```
bool(true)
```

### See Also

- Deprecated
- ReflectionFunctionAbstract::getDocComment() - Gets doc comment

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionfunctionabstract.isdeprecated.php
