# ReflectionParameter::__construct

Source: https://devdocs.io/php/reflectionparameter.construct

(PHP 5, PHP 7, PHP 8)

ReflectionParameter::__construct — Construct

### Description

Constructs a ReflectionParameter instance.

### Parameters

The function to reflect parameters from.

Either an int specifying the position of the parameter (starting with zero), or the parameter name as string.

### Examples

Example #1 Using the ReflectionParameter class

```
<?php
function foo($a, $b, $c) { }
function bar(Exception $a, &$b, $c) { }
function baz(ReflectionFunction $a, $b = 1, $c = null) { }
function abc() { }

$reflect = new ReflectionFunction('foo');

echo $reflect;

foreach ($reflect->getParameters() as $i => $param) {
    printf(
        "-- Parameter #%d: %s {\n".
        "   Class: %s\n".
        "   Allows NULL: %s\n".
        "   Passed to by reference: %s\n".
        "   Is optional?: %s\n".
        "}\n",
        $i, // $param->getPosition() can be used
        $param->getName(),
        var_export($param->getClass(), 1),
        var_export($param->allowsNull(), 1),
        var_export($param->isPassedByReference(), 1),
        $param->isOptional() ? 'yes' : 'no'
    );
}
?>
```

The above example will output something similar to:

```
Function [ <user> function foo ] {
  @@ /Users/philip/cvs/phpdoc/a 2 - 2

  - Parameters [3] {
    Parameter #0 [ <required> $a ]
    Parameter #1 [ <required> $b ]
    Parameter #2 [ <required> $c ]
  }
}
-- Parameter #0: a {
   Class: NULL
   Allows NULL: true
   Passed to by reference: false
   Is optional?: no
}
-- Parameter #1: b {
   Class: NULL
   Allows NULL: true
   Passed to by reference: false
   Is optional?: no
}
-- Parameter #2: c {
   Class: NULL
   Allows NULL: true
   Passed to by reference: false
   Is optional?: no
}
```

### See Also

- ReflectionFunctionAbstract::getParameters() - Gets parameters
- ReflectionFunction::__construct() - Constructs a ReflectionFunction object
- ReflectionMethod::__construct() - Constructs a ReflectionMethod
- Constructors

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reflectionparameter.construct.php
