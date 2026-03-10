# The SensitiveParameter attribute

Source: https://devdocs.io/php/class.sensitiveparameter

## Introduction

(PHP 8 >= 8.2.0)

This attribute is used to mark a parameter that is sensitive and should have its value redacted if present in a stack trace.

## Class synopsis

## Examples

```
<?php

function defaultBehavior(
    string $secret,
    string $normal
) {
    throw new Exception('Error!');
}

function sensitiveParametersWithAttribute(
    #[\SensitiveParameter]
    string $secret,
    string $normal
) {
    throw new Exception('Error!');
}

try {
    defaultBehavior('password', 'normal');
} catch (Exception $e) {
    echo $e, PHP_EOL, PHP_EOL;
}

try {
    sensitiveParametersWithAttribute('password', 'normal');
} catch (Exception $e) {
    echo $e, PHP_EOL, PHP_EOL;
}

?>
```

Output of the above example in PHP 8.2 is similar to:

```
Exception: Error! in example.php:7
Stack trace:
#0 example.php(19): defaultBehavior('password', 'normal')
#1 {main}

Exception: Error! in example.php:15
Stack trace:
#0 example.php(25): sensitiveParametersWithAttribute(Object(SensitiveParameterValue), 'normal')
#1 {main}
```

## See Also

- Attributes overview
- SensitiveParameterValue

## Table of Contents

- SensitiveParameter::__construct — Construct a new SensitiveParameter attribute instance

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.sensitiveparameter.php
