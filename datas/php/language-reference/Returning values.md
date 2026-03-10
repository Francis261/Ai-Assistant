# Returning values

Source: https://devdocs.io/php/functions.returning-values

## Returning values

Values are returned by using the optional return statement. Any type may be returned, including arrays and objects. This causes the function to end its execution immediately and pass control back to the line from which it was called. See return for more information.

Note:

If the return is omitted the value null will be returned.

### Use of return

Example #1 Use of return

```
<?php
function square($num)
{
    return $num * $num;
}
echo square(4);   // outputs '16'.
?>
```

A function can not return multiple values, but similar results can be obtained by returning an array.

Example #2 Returning an array to get multiple values

```
<?php
function small_numbers()
{
    return [0, 1, 2];
}
// Array destructuring will collect each member of the array individually
[$zero, $one, $two] = small_numbers();

// Prior to 7.1.0, the only equivalent alternative is using list() construct
list($zero, $one, $two) = small_numbers();

?>
```

To return a reference from a function, use the reference operator & in both the function declaration and when assigning the returned value to a variable:

Example #3 Returning a reference from a function

```
<?php
function &returns_reference()
{
    return $someref;
}

$newref =& returns_reference();
?>
```

For more information on references, please check out References Explained.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/functions.returning-values.php
