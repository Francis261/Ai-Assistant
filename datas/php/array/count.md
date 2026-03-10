# count

Source: https://devdocs.io/php/function.count

(PHP 4, PHP 5, PHP 7, PHP 8)

count — Counts all elements in an array or in a Countable object

### Description

```
count(Countable|array $value, int $mode = COUNT_NORMAL): int
```

Counts all elements in an array when used with an array. When used with an object that implements the Countable interface, it returns the return value of the method Countable::count().

### Parameters

An array or Countable object.

If the optional mode parameter is set to COUNT_RECURSIVE (or 1), count() will recursively count the array. This is particularly useful for counting all the elements of a multidimensional array.

count() can detect recursion to avoid an infinite loop, but will emit an E_WARNING every time it does (in case the array contains itself more than once) and return a count higher than may be expected.

### Return Values

Returns the number of elements in value. Prior to PHP 8.0.0, if the parameter was neither an array nor an object that implements the Countable interface, 1 would be returned, unless value was null, in which case 0 would be returned.

### Changelog

### Examples

Example #1 count() example

```
<?php
$a[0] = 1;
$a[1] = 3;
$a[2] = 5;
var_dump(count($a));

$b[0]  = 7;
$b[5]  = 9;
$b[10] = 11;
var_dump(count($b));
?>
```

The above example will output:

```
int(3)
int(3)
```

Example #2 count() non Countable|array example (bad example - don't do this)

```
<?php
$b[0]  = 7;
$b[5]  = 9;
$b[10] = 11;
var_dump(count($b));

var_dump(count(null));

var_dump(count(false));
?>
```

The above example will output:

```
int(3)

Fatal error: Uncaught TypeError: count(): Argument #1 ($var) must be of type Countable .. on line 12
```

Example #3 Recursive count() example

```
<?php
$food = array('fruits' => array('orange', 'banana', 'apple'),
              'veggie' => array('carrot', 'collard', 'pea'));

// recursive count
var_dump(count($food, COUNT_RECURSIVE));

// normal count
var_dump(count($food));

?>
```

The above example will output:

```
int(8)
int(2)
```

Example #4 Countable object

```
<?php
class CountOfMethods implements Countable
{
    private function someMethod()
    {
    }

    public function count(): int
    {
        return count(get_class_methods($this));
    }
}

$obj = new CountOfMethods();
var_dump(count($obj));
?>
```

The above example will output:

```
int(2)
```

### See Also

- is_array() - Finds whether a variable is an array
- isset() - Determine if a variable is declared and is different than null
- empty() - Determine whether a variable is empty
- strlen() - Get string length
- is_countable() - Verify that the contents of a variable is a countable value
- Arrays

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.count.php
