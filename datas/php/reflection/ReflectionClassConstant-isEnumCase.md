# ReflectionClassConstant::isEnumCase

Source: https://devdocs.io/php/reflectionclassconstant.isenumcase

(PHP 8 >= 8.1.0)

ReflectionClassConstant::isEnumCase — Checks if class constant is an Enum case

### Description

```
public ReflectionClassConstant::isEnumCase(): bool
```

Checks if the class constant is an Enum case.

### Parameters

This function has no parameters.

### Return Values

true if the class constant is an Enum case; false otherwise.

### Examples

Example #1 ReflectionClassConstant::isEnumCase() example

Distinguish between Enum cases and regular class constants.

```
<?php
enum Status
{
    const BORING_CONSTANT = 'test';
    const ENUM_VALUE = Status::PUBLISHED;

    case DRAFT;
    case PUBLISHED;
    case ARCHIVED;
}

$reflection = new ReflectionEnum(Status::class);
foreach ($reflection->getReflectionConstants() as $constant) {
    echo "{$constant->name} is ",
        $constant->isEnumCase() ? "an enum case" : "a regular class constant",
        PHP_EOL;
}
?>
```

The above example will output:

```
BORING_CONSTANT is a regular class constant
ENUM_VALUE is a regular class constant
DRAFT is an enum case
PUBLISHED is an enum case
ARCHIVED is an enum case
```

### See Also

- ReflectionEnum

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionclassconstant.isenumcase.php
