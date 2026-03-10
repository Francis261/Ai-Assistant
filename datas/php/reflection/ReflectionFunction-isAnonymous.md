# ReflectionFunction::isAnonymous

Source: https://devdocs.io/php/reflectionfunction.isanonymous

(PHP 8 >= 8.2.0)

ReflectionFunction::isAnonymous — Checks if a function is anonymous

### Description

```
public ReflectionFunction::isAnonymous(): bool
```

Checks if a function is anonymous.

### Parameters

This function has no parameters.

### Return Values

Returns true if the function is anonymous, otherwise false.

### Examples

Example #1 ReflectionFunction::isAnonymous() example

```
<?php

$rf = new ReflectionFunction(function() {});
var_dump($rf->isAnonymous());

$rf = new ReflectionFunction('strlen');
var_dump($rf->isAnonymous());
?>
```

The above example will output:

```
bool(true)
bool(false)
```

### See Also

- Anonymous functions

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionfunction.isanonymous.php
