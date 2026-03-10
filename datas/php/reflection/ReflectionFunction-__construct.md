# ReflectionFunction::__construct

Source: https://devdocs.io/php/reflectionfunction.construct

(PHP 5, PHP 7, PHP 8)

ReflectionFunction::__construct — Constructs a ReflectionFunction object

### Description

Constructs a ReflectionFunction object.

### Parameters

The name of the function to reflect or a closure.

### Errors/Exceptions

A ReflectionException if the function parameter does not contain a valid function.

### Examples

Example #1 ReflectionFunction::__construct() example

```
<?php
/**
 * A simple counter
 *
 * @return    int
 */
function counter1()
{
    static $c = 0;
    return ++$c;
}

/**
 * Another simple counter
 *
 * @return    int
 */
$counter2 = function()
{
    static $d = 0;
    return ++$d;

};

function dumpReflectionFunction($func)
{
    // Print out basic information
    printf(
        "\n\n===> The %s function '%s'\n".
        "     declared in %s\n".
        "     lines %d to %d\n",
        $func->isInternal() ? 'internal' : 'user-defined',
        $func->getName(),
        $func->getFileName(),
        $func->getStartLine(),
        $func->getEndline()
    );

    // Print documentation comment
    printf("---> Documentation:\n %s\n", var_export($func->getDocComment(), 1));

    // Print static variables if existant
    if ($statics = $func->getStaticVariables())
    {
        printf("---> Static variables: %s\n", var_export($statics, 1));
    }
}

// Create an instance of the ReflectionFunction class
dumpReflectionFunction(new ReflectionFunction('counter1'));
dumpReflectionFunction(new ReflectionFunction($counter2));
?>
```

The above example will output something similar to:

```
===> The user-defined function 'counter1'
     declared in Z:\reflectcounter.php
     lines 7 to 11
---> Documentation:
 '/**
 * A simple counter
 *
 * @return    int
 */'
---> Static variables: array (
  'c' => 0,
)

===> The user-defined function '{closure}'
     declared in Z:\reflectcounter.php
     lines 18 to 23
---> Documentation:
 '/**
 * Another simple counter
 *
 * @return    int
 */'
---> Static variables: array (
  'd' => 0,
)
```

### See Also

- ReflectionMethod::__construct() - Constructs a ReflectionMethod
- Constructors

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionfunction.construct.php
