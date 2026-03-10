# Basics

Source: https://devdocs.io/php/language.variables.basics

## Basics

Variables in PHP are represented by a dollar sign followed by the name of the variable. The variable name is case-sensitive.

A valid variable name starts with a letter (A-Z, a-z, or the bytes from 128 through 255) or underscore, followed by any number of letters, numbers, or underscores. As a regular expression, it would be expressed thus: ^[a-zA-Z_\x80-\xff][a-zA-Z0-9_\x80-\xff]*$

Note: PHP doesn't support Unicode variable names, however, some character encodings (such as UTF-8) encode characters in such a way that all bytes of a multi-byte character fall within the allowed range, thus making it a valid variable name.

Note: $this is a special variable that can't be assigned. Prior to PHP 7.1.0, indirect assignment (e.g. by using variable variables) was possible.

See also the Userland Naming Guide.

Example #1 Valid variable names

```
<?php
$var = 'Bob';
$Var = 'Joe';
echo "$var, $Var";      // outputs "Bob, Joe"

$_4site = 'not yet';    // valid; starts with an underscore
$täyte = 'mansikka';    // valid; 'ä' is (Extended) ASCII 228.
?>
```

Example #2 Invalid variable names

```
<?php
$4site = 'not yet';     // invalid; starts with a number
```

PHP accepts a sequence of any bytes as a variable name. Variable names that do not follow the above-mentioned naming rules can only be accessed dynamically at runtime. See variable variables for information on how to access them.

Example #3 Accessing obscure variable names

```
<?php
${'invalid-name'} = 'bar';
$name = 'invalid-name';
echo ${'invalid-name'}, " ", $$name;
?>
```

The above example will output:

```
bar bar
```

By default, variables are always assigned by value. That is to say, when an expression is assigned to a variable, the entire value of the original expression is copied into the destination variable. This means, for instance, that after assigning one variable's value to another, changing one of those variables will have no effect on the other. For more information on this kind of assignment, see the chapter on Expressions.

PHP also offers another way to assign values to variables: assign by reference. This means that the new variable simply references (in other words, "becomes an alias for" or "points to") the original variable. Changes to the new variable affect the original, and vice versa.

To assign by reference, simply prepend an ampersand (&) to the beginning of the variable which is being assigned (the source variable). For instance, the following code snippet outputs 'My
 name is Bob' twice:

```
<?php
$foo = 'Bob';              // Assign the value 'Bob' to $foo
$bar = &$foo;              // Reference $foo via $bar.
$bar = "My name is $bar";  // Alter $bar...
echo $bar;
echo $foo;                 // $foo is altered too.
?>
```

One important thing to note is that only variables may be assigned by reference.

```
<?php
$foo = 25;
$bar = &$foo;      // This is a valid assignment.
$bar = &(24 * 7);  // Invalid; references an unnamed expression.

function test()
{
   return 25;
}

$bar = &test();    // Invalid because test() doesn't return a variable by reference.
?>
```

It is not necessary to declare variables in PHP, however, it is a very good practice. Accessing an undefined variable will result in an E_WARNING (prior to PHP 8.0.0, E_NOTICE). An undefined variable has a default value of null. The isset() language construct can be used to detect if a variable has already been initialized.

Example #4 Default value of an uninitialized variable

```
<?php
// Unset AND unreferenced (no use context) variable.
var_dump($unset_var);
?>
```

The above example will output:

```
Warning: Undefined variable $unset_var in ...
NULL
```

PHP allows array autovivification (automatic creation of new arrays) from an undefined variable. Appending an element to an undefined variable will create a new array and will not generate a warning.

Example #5 Autovivification of an array from an undefined variable

```
<?php
$unset_array[] = 'value'; // Does not generate a warning.
?>
```

Relying on the default value of an uninitialized variable is problematic when including one file in another which uses the same variable name.

A variable can be destroyed by using the unset() language construct.

For information on variable-related functions, see the Variable Functions Reference.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.variables.basics.php
