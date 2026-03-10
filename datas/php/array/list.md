# list

Source: https://devdocs.io/php/function.list

(PHP 4, PHP 5, PHP 7, PHP 8)

list — Assign variables as if they were an array

### Description

```
list(mixed $var, mixed ...$vars = ?): array
```

Like array(), this is not really a function, but a language construct. list() is used to assign a list of variables in one operation. Only arrays and objects that implement ArrayAccess can be unpacked. list() expressions can not be completely empty.

Note:

Before PHP 7.1.0, list() only worked on numerical arrays and assumes the numerical indices start at 0.

As of PHP 7.1.0, list() can also contain explicit keys, allowing for the destructuring of arrays with non-integer or non-sequential keys. For more details on array destructuring, see the array destructuring section.

Note:

Attempting to access an array key which has not been defined is the same as accessing any other undefined variable: an E_WARNING-level error message (E_NOTICE-level prior to PHP 8.0.0) will be issued, and the result will be null.

Attempting to unpack a scalar assigns null to all variables. Attempting to unpack an object that does not implement ArrayAccess is a fatal error.

### Parameters

A variable.

Further variables.

### Return Values

Returns the assigned array.

### Changelog

### Examples

Example #1 list() examples

```
<?php

$info = array('coffee', 'brown', 'caffeine');

// Listing all the variables
list($drink, $color, $power) = $info;
echo "$drink is $color and $power makes it special.\n";

// Listing some of them
list($drink, , $power) = $info;
echo "$drink has $power.\n";

// Or let's skip to only the third one
list( , , $power) = $info;
echo "I need $power!\n";

// list() doesn't work with strings
list($bar) = "abcde";
var_dump($bar); // NULL
?>
```

Example #2 An example use of list()

```
<?php
$result = $pdo->query("SELECT id, name FROM employees");
while (list($id, $name) = $result->fetch(PDO::FETCH_NUM)) {
    echo "id: $id, name: $name\n";
}
?>
```

Example #3 Using nested list()

```
<?php

list($a, list($b, $c)) = array(1, array(2, 3));

var_dump($a, $b, $c);

?>
```

The above example will output:

```
int(1)
int(2)
int(3)
```

The order in which the indices of the array to be consumed by list() are defined is irrelevant.

Example #4 list() and order of index definitions

```
<?php
$foo = array(2 => 'a', 'foo' => 'b', 0 => 'c');
$foo[1] = 'd';
list($x, $y, $z) = $foo;
var_dump($foo, $x, $y, $z);
```

Gives the following output (note the order of the elements compared in which order they were written in the list() syntax):

```
array(4) {
  [2]=>
  string(1) "a"
  ["foo"]=>
  string(1) "b"
  [0]=>
  string(1) "c"
  [1]=>
  string(1) "d"
}
string(1) "c"
string(1) "d"
string(1) "a"
```

Example #5 list() with keys

As of PHP 7.1.0 list() can now also contain explicit keys, which can be given as arbitrary expressions. Mixing of integer and string keys is allowed; however, elements with and without keys cannot be mixed.

```
<?php
$data = [
    ["id" => 1, "name" => 'Tom'],
    ["id" => 2, "name" => 'Fred'],
];
foreach ($data as ["id" => $id, "name" => $name]) {
    echo "id: $id, name: $name\n";
}
echo PHP_EOL;
list(1 => $second, 3 => $fourth) = [1, 2, 3, 4];
echo "$second, $fourth\n";
```

The above example will output:

```
id: 1, name: Tom
id: 2, name: Fred

2, 4
```

### See Also

- each() - Return the current key and value pair from an array and advance the array cursor
- array() - Create an array
- extract() - Import variables into the current symbol table from an array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.list.php
