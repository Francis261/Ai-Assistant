# ReflectionGenerator::getTrace

Source: https://devdocs.io/php/reflectiongenerator.gettrace

(PHP 7, PHP 8)

ReflectionGenerator::getTrace — Gets the trace of the executing generator

### Description

```
public ReflectionGenerator::getTrace(int $options = DEBUG_BACKTRACE_PROVIDE_OBJECT): array
```

Get the trace of the currently executing generator.

### Parameters

The value of options can be any of the following flags.

### Return Values

Returns the trace of the currently executing generator.

### Examples

Example #1 ReflectionGenerator::getTrace() example

```
<?php
function foo() {
    yield 1;
}

function bar()
{
    yield from foo();
}

function baz()
{
    yield from bar();
}

$gen = baz();
$gen->valid(); // start the generator

var_dump((new ReflectionGenerator($gen))->getTrace());
```

The above example will output something similar to:

```
array(2) {
  [0]=>
  array(4) {
    ["file"]=>
    string(18) "example.php"
    ["line"]=>
    int(8)
    ["function"]=>
    string(3) "foo"
    ["args"]=>
    array(0) {
    }
  }
  [1]=>
  array(4) {
    ["file"]=>
    string(18) "example.php"
    ["line"]=>
    int(12)
    ["function"]=>
    string(3) "bar"
    ["args"]=>
    array(0) {
    }
  }
}
```

### See Also

- ReflectionGenerator::getFunction() - Gets the function name of the generator
- ReflectionGenerator::getThis() - Gets the $this value of the generator

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectiongenerator.gettrace.php
