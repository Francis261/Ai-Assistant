# Passing by Reference

Source: https://devdocs.io/php/language.references.pass

## Passing by Reference

You can pass a variable by reference to a function so the function can modify the variable. The syntax is as follows:

```
<?php

function foo(&$var)
{
    $var++;
}

$a=5;

foo($a);
// $a is 6 here

?>
```

Note: There is no reference sign on a function call - only on function definitions. Function definitions alone are enough to correctly pass the argument by reference.

The following things can be passed by reference:

- Variables, i.e. foo($a)
- References returned from functions, i.e.: 
 <?php

function foo(&$var)
{
 $var++;
}

function &bar()
{
 $a = 5;
 return $a;
}

foo(bar());

?> See more about returning by reference.

References returned from functions, i.e.:

```
<?php

function foo(&$var)
{
    $var++;
}

function &bar()
{
    $a = 5;
    return $a;
}

foo(bar());

?>
```

No other expressions should be passed by reference, as the result is undefined. For example, the following examples of passing by reference are invalid:

```
<?php

function foo(&$var)
{
    $var++;
}

function bar() // Note the missing &
{
    $a = 5;
    return $a;
}

foo(bar()); // Produces a notice

foo($a = 5); // Expression, not variable
foo(5); // Produces fatal error

class Foobar {}

foo(new Foobar()) // Produces a notice as of PHP 7.0.7
                  // Notice: Only variables should be passed by reference

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.references.pass.php
