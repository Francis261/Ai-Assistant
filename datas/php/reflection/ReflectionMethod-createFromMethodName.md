# ReflectionMethod::createFromMethodName

Source: https://devdocs.io/php/reflectionmethod.createfrommethodname

(PHP 8 >= 8.3.0)

ReflectionMethod::createFromMethodName — Creates a new ReflectionMethod

### Description

```
public static ReflectionMethod::createFromMethodName(string $method): static
```

Creates a new ReflectionMethod.

### Parameters

Class name and method name delimited by ::.

### Return Values

Returns a new ReflectionMethod on success.

### Errors/Exceptions

A ReflectionException is thrown if the given method does not exist.

### Examples

Example #1 ReflectionMethod::createFromMethodName() example

```
<?php

class Foo {
    public function bar() {

    }
}

$methodInfo = ReflectionMethod::createFromMethodName("Foo::bar");
var_dump($methodInfo);
?>
```

The above example will output:

```
object(ReflectionMethod)#1 (2) {
  ["name"]=>
  string(3) "bar"
  ["class"]=>
  string(3) "Foo"
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionmethod.createfrommethodname.php
