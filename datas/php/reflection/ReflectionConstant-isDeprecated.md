# ReflectionConstant::isDeprecated

Source: https://devdocs.io/php/reflectionconstant.isdeprecated

(PHP 8 >= 8.4.0)

ReflectionConstant::isDeprecated — Checks if deprecated

### Description

```
public ReflectionConstant::isDeprecated(): bool
```

Checks whether the constant is deprecated.

### Parameters

This function has no parameters.

### Return Values

true if it's deprecated, otherwise false

### Examples

Example #1 ReflectionConstant::isDeprecated() example

```
<?php
// E_STRICT is deprecated as of PHP 8.4
var_dump((new ReflectionConstant('E_STRICT'))->isDeprecated());
?>
```

Output of the above example in PHP 8.4:

```
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionconstant.isdeprecated.php
