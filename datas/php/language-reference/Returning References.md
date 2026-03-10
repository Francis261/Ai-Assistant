# Returning References

Source: https://devdocs.io/php/language.references.return

## Returning References

Returning by reference is useful when you want to use a function to find to which variable a reference should be bound. Do not use return-by-reference to increase performance. The engine will automatically optimize this on its own. Only return references when you have a valid technical reason to do so. To return references, use this syntax:

```
<?php

class Foo
{
    public $value = 42;

    public function &getValue()
    {
        return $this->value;
    }
}

$obj = new Foo();
$myValue = &$obj->getValue(); // $myValue is a reference to $obj->value, which is 42
$obj->value = 2;
echo $myValue;                // Prints the new value of $obj->value, i.e. 2

?>
```

Note: Unlike parameter passing, here you have to use & in both places - to indicate that you want to return by reference, not a copy, and to indicate that reference binding, rather than usual assignment, should be done for $myValue.

Note: If you try to return a reference from a function with the syntax: return ($this->value); this will not work as you are attempting to return the result of an expression, and not a variable, by reference. You can only return variables by reference from a function - nothing else.

To use the returned reference, you must use reference assignment:

```
<?php

function &collector()
{
    static $collection = array();
    return $collection;
}

$collection = &collector();
// Now the $collection is a referenced variable that references the static array inside the function

$collection[] = 'foo';

print_r(collector());
// Array
// (
//    [0] => foo
// )

?>
```

Note: If the assignment is done without the & symbol, e.g. $collection = collector();, the $collection variable will receive a copy of the value, not the reference returned by the function.

```
<?php

function &collector()
{
    static $collection = array();
    return $collection;
}

array_push(collector(), 'foo');

?>
```

Note: Note that array_push(&collector(), 'foo'); will not work, it results in a fatal error.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/language.references.return.php
