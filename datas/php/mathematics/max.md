# max

Source: https://devdocs.io/php/function.max

(PHP 4, PHP 5, PHP 7, PHP 8)

max — Find highest value

### Description

```
max(mixed $value, mixed ...$values): mixed
```

Alternative signature (not supported with named arguments):

```
max(array $value_array): mixed
```

If the first and only parameter is an array, max() returns the highest value in that array. If at least two parameters are provided, max() returns the biggest of these values.

Note:

Values of different types will be compared using the standard comparison rules. For instance, a non-numeric string will be compared to an int as though it were 0, but multiple non-numeric string values will be compared alphanumerically. The actual value returned will be of the original type with no conversion applied.

Be careful when passing arguments of different types because max() can produce unpredictable results.

### Parameters

Any comparable value.

Any comparable values.

An array containing the values.

### Return Values

max() returns the parameter value considered "highest" according to standard comparisons. If multiple values of different types evaluate as equal (e.g. 0 and 'abc') the first provided to the function will be returned.

### Errors/Exceptions

If an empty array is passed, max() throws a ValueError.

### Changelog

### Examples

Example #1 Example uses of max()

```
<?php
echo max(2, 3, 1, 6, 7), PHP_EOL;  // 7
echo max(array(2, 4, 5)), PHP_EOL; // 5

// Here we are comparing -1 < 0, so 'hello' is the highest value
echo max('hello', -1), PHP_EOL;    // hello

// With multiple arrays of different lengths, max returns the longest
$val = max(array(2, 2, 2), array(1, 1, 1, 1)); // array(1, 1, 1, 1)
var_dump($val);

// Multiple arrays of the same length are compared from left to right
// so in our example: 2 == 2, but 5 > 4
$val = max(array(2, 4, 8), array(2, 5, 1)); // array(2, 5, 1)
var_dump($val);

// If both an array and non-array are given, the array will be returned
// as comparisons treat arrays as greater than any other value
$val = max('string', array(2, 5, 7), 42);   // array(2, 5, 7)
var_dump($val);

// If one argument is NULL or a boolean, it will be compared against
// other values using the rule FALSE < TRUE regardless of the other types involved
// In the below example, -10 is treated as TRUE in the comparison
$val = max(-10, FALSE); // -10
var_dump($val);

// 0, on the other hand, is treated as FALSE, so is "lower than" TRUE
$val = max(0, TRUE); // TRUE
var_dump($val);
?>
```

### See Also

- min() - Find lowest value
- count() - Counts all elements in an array or in a Countable object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.max.php
