# ReflectionClassConstant::isDeprecated

Source: https://devdocs.io/php/reflectionclassconstant.isdeprecated

(PHP 8 >= 8.4.0)

ReflectionClassConstant::isDeprecated — Checks if deprecated

### Description

```
public ReflectionClassConstant::isDeprecated(): bool
```

Checks whether the class constant is deprecated.

### Parameters

This function has no parameters.

### Return Values

true if it's deprecated, otherwise false

### Examples

Example #1 ReflectionClassConstant::isDeprecated() example

```
<?php
class Basket {
    #[\Deprecated(message: 'use Basket::APPLE instead')]
    public const APLE = 'apple';

    public const APPLE = 'apple';
}
$classConstant = new ReflectionClassConstant('Basket', 'APLE');
var_dump($classConstant->isDeprecated());
?>
```

The above example will output:

```
bool(true)
```

### See Also

- Deprecated
- ReflectionClassConstant::getDocComment() - Gets doc comments

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclassconstant.isdeprecated.php
