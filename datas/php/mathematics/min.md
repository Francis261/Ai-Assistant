# min

Source: https://devdocs.io/php/function.min

(PHP 4, PHP 5, PHP 7, PHP 8)

min — Find lowest value

### Description

```
min(mixed $value, mixed ...$values): mixed
```

Alternative signature (not supported with named arguments):

```
min(array $value_array): mixed
```

If the first and only parameter is an array, min() returns the lowest value in that array. If at least two parameters are provided, min() returns the smallest of these values.

Note:

Values of different types will be compared using the standard comparison rules. For instance, a non-numeric string will be compared to an int as though it were 0, but multiple non-numeric string values will be compared alphanumerically. The actual value returned will be of the original type with no conversion applied.

Be careful when passing arguments of different types because min() can produce unpredictable results.

### Parameters

Any comparable value.

Any comparable values.

An array containing the values.

### Return Values

min() returns the parameter value considered "lowest" according to standard comparisons. If multiple values of different types evaluate as equal (e.g. 0 and 'abc') the first provided to the function will be returned.

### Errors/Exceptions

If an empty array is passed, min() throws a ValueError.

### Changelog

### Examples

Example #1 Example uses of min()

```
<?php
echo min(2, 3, 1, 6, 7), PHP_EOL;  // 1
echo min(array(2, 4, 5)), PHP_EOL; // 2

// Here we are comparing -1 < 0, so -1 is the lowest value
echo min('hello', -1), PHP_EOL;    // -1

// With multiple arrays of different lengths, min returns the shortest
$val = min(array(2, 2, 2), array(1, 1, 1, 1)); // array(2, 2, 2)
var_dump($val);

// Multiple arrays of the same length are compared from left to right
// so in our example: 2 == 2, but 4 < 5
$val = min(array(2, 4, 8), array(2, 5, 1)); // array(2, 4, 8)
var_dump($val);

// If both an array and non-array are given, the array is never returned
// as comparisons treat arrays as greater than any other value
$val = min('string', array(2, 5, 7), 42);   // string
var_dump($val);

// If one argument is NULL or a boolean, it will be compared against
// other values using the rules FALSE < TRUE and NULL == FALSE regardless of the 
// other types involved
// In the below examples, both -10 and 10 are treated as TRUE in the comparison
$val = min(-10, FALSE, 10); // FALSE
var_dump($val);

$val = min(-10, NULL, 10);  // NULL
var_dump($val);

// 0, on the other hand, is treated as FALSE, so is "lower than" TRUE
$val = min(0, TRUE); // 0
var_dump($val);
?>
```

### See Also

- max() - Find highest value
- count() - Counts all elements in an array or in a Countable object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.min.php
