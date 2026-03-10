# Booleans

Source: https://devdocs.io/php/language.types.boolean

## Booleans

The bool type only has two values, and is used to express a truth value. It can be either true or false.

### Syntax

To specify a bool literal, use the constants true or false. Both are case-insensitive.

```
<?php
$foo = True; // assign the value TRUE to $foo
?>
```

Typically, the result of an operator which returns a bool value is passed on to a control structure.

```
<?php
$action = "show_version";
$show_separators = true;

// == is an operator which tests
// equality and returns a boolean
if ($action == "show_version") {
    echo "The version is 1.23";
}

// this is not necessary...
if ($show_separators == TRUE) {
    echo "<hr>\n";
}

// ...because this can be used with exactly the same meaning:
if ($show_separators) {
    echo "<hr>\n";
}
?>
```

### Converting to boolean

To explicitly convert a value to bool, use the (bool) cast. Generally this is not necessary because when a value is used in a logical context it will be automatically interpreted as a value of type bool. For more information see the Type Juggling page.

When converting to bool, the following values are considered false:

- the boolean false itself
- the integer 0 (zero)
- the floats 0.0 and -0.0 (zero)
- the empty string "", and the string "0"
- an array with zero elements
- the unit type NULL (including unset variables)
- Internal objects that overload their casting behaviour to bool. For example: SimpleXML objects created from empty elements without attributes.

Every other value is considered true (including resource and NAN).

-1 is considered true, like any other non-zero (whether negative or positive) number!

Example #1 Casting to Boolean

```
<?php
var_dump((bool) "");        // bool(false)
var_dump((bool) "0");       // bool(false)
var_dump((bool) 1);         // bool(true)
var_dump((bool) -2);        // bool(true)
var_dump((bool) "foo");     // bool(true)
var_dump((bool) 2.3e5);     // bool(true)
var_dump((bool) array(12)); // bool(true)
var_dump((bool) array());   // bool(false)
var_dump((bool) "false");   // bool(true)
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.types.boolean.php
