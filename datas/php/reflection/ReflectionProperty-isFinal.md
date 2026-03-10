# ReflectionProperty::isFinal

Source: https://devdocs.io/php/reflectionproperty.isfinal

(PHP 8 >= 8.4.0)

ReflectionProperty::isFinal — Determines if this property is final or not

### Description

```
public ReflectionProperty::isFinal(): bool
```

This function is currently not documented; only its argument list is available.

Returns whether the property is final. If the property is marked private(set), then it will also be implicitly final.

### Parameters

This function has no parameters.

### Return Values

Returns true if the property is explicitly marked final, or if it is implicitly final due to being private(set). Returns false otherwise.

### Examples

Example #1 ReflectionProperty::isFinal() example

```
<?php
class Example
{
    public string $name;

    final protected int $age;

    public private(set) string $job;
}

$rClass = new \ReflectionClass(Example::class);

var_dump($rClass->getProperty('name')->isFinal());
var_dump($rClass->getProperty('age')->isFinal());
var_dump($rClass->getProperty('job')->isFinal());
?>
```

The above example will output:

```
bool(false)
bool(true)
bool(true)
```

### See Also

- final class elements
- Asymmetric property visibility

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionproperty.isfinal.php
