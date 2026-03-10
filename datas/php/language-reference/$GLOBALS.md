# $GLOBALS

Source: https://devdocs.io/php/reserved.variables.globals

(PHP 4, PHP 5, PHP 7, PHP 8)

$GLOBALS — References all variables available in global scope

### Description

An associative array containing references to all variables which are currently defined in the global scope of the script. The variable names are the keys of the array.

### Examples

Example #1 $GLOBALS example

```
<?php

function test()
{
    $foo = "local variable";

    echo '$foo in global scope: ' . $GLOBALS["foo"] . "\n";
    echo '$foo in current scope: ' . $foo . "\n";
}

$foo = "Example content";
test();

?>
```

The above example will output something similar to:

```
$foo in global scope: Example content
$foo in current scope: local variable
```

As of PHP 8.1.0, write access to the entire $GLOBALS array is no longer supported:

Example #2 writing entire $GLOBALS will result in error.

```
<?php

// Generates compile-time error:
$GLOBALS = [];
$GLOBALS += [];
$GLOBALS =& $x;
$x =& $GLOBALS;
unset($GLOBALS);
array_pop($GLOBALS);
// ...and any other write/read-write operation on $GLOBALS

?>
```

### Notes

Note:

This is a 'superglobal', or automatic global, variable. This simply means that it is available in all scopes throughout a script. There is no need to do global $variable; to access it within functions or methods.

Note: Variable availability

Unlike all of the other superglobals, $GLOBALS has essentially always been available in PHP.

Note:

As of PHP 8.1.0, $GLOBALS is now a read-only copy of the global symbol table. That is, global variables cannot be modified via its copy. Previously, $GLOBALS array is excluded from the usual by-value behavior of PHP arrays and global variables can be modified via its copy.

```
<?php

// Before PHP 8.1.0
$a = 1;

$globals = $GLOBALS; // Ostensibly by-value copy
$globals['a'] = 2;
var_dump($a); // int(2)

// As of PHP 8.1.0
// this no longer modifies $a. The previous behavior violated by-value semantics.
$globals = $GLOBALS;
$globals['a'] = 1;

// To restore the previous behavior, iterate its copy and assign each property back to $GLOBALS.
foreach ($globals as $key => $value) {
    $GLOBALS[$key] = $value;
}

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/reserved.variables.globals.php
