# PDOStatement::fetchAll

Source: https://devdocs.io/php/pdostatement.fetchall

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 0.1.0)

PDOStatement::fetchAll — Fetches the remaining rows from a result set

### Description

```
public PDOStatement::fetchAll(int $mode = PDO::FETCH_DEFAULT): array
```

```
public PDOStatement::fetchAll(int $mode = PDO::FETCH_COLUMN, int $column): array
```

```
public PDOStatement::fetchAll(int $mode = PDO::FETCH_CLASS, string $class, ?array $constructorArgs): array
```

```
public PDOStatement::fetchAll(int $mode = PDO::FETCH_FUNC, callable $callback): array
```

### Parameters

Controls the contents of the returned array as documented in PDOStatement::fetch(). Defaults to value of PDO::ATTR_DEFAULT_FETCH_MODE (which defaults to PDO::FETCH_BOTH)

To return an array consisting of all values of a single column from the result set, specify PDO::FETCH_COLUMN. You can specify which column you want with the column parameter.

To index the resulting array by a certain column's value (instead of consecutive numbers), put this column's name first in the column list in SQL, and use PDO::FETCH_UNIQUE. This column must contain only unique values or some data will be lost.

To group results in the form of a 3-dimensional array indexed by values of a specified column, put this column's name first in the column list in SQL and use PDO::FETCH_GROUP.

To group results in the form of a 2-dimensional array use bitwise-OR PDO::FETCH_GROUP with PDO::FETCH_COLUMN. The results will be grouped by the first column, with the array element's value being a list array of the corresponding entries from the second column.

Used with PDO::FETCH_COLUMN. Returns the indicated 0-indexed column.

Used with PDO::FETCH_CLASS. Returns instances of the specified class, mapping the columns of each row to named properties in the class.

Arguments of custom class constructor when the mode parameter is PDO::FETCH_CLASS.

Used with PDO::FETCH_FUNC. Returns the results of calling the specified function, using each row's columns as parameters in the call.

### Return Values

PDOStatement::fetchAll() returns an array containing all of the remaining rows in the result set. The array represents each row as either an array of column values or an object with properties corresponding to each column name. An empty array is returned if there are zero results to fetch.

Using this method to fetch large result sets will result in a heavy demand on system and possibly network resources. Rather than retrieving all of the data and manipulating it in PHP, consider using the database server to manipulate the result sets. For example, use the WHERE and ORDER BY clauses in SQL to restrict results before retrieving and processing them with PHP.

### Errors/Exceptions

Emits an error with level E_WARNING if the attribute PDO::ATTR_ERRMODE is set to PDO::ERRMODE_WARNING.

Throws a PDOException if the attribute PDO::ATTR_ERRMODE is set to PDO::ERRMODE_EXCEPTION.

### Changelog

### Examples

Example #1 Fetch all remaining rows in a result set

```
<?php
$sth = $dbh->prepare("SELECT name, colour FROM fruit");
$sth->execute();

/* Fetch all of the remaining rows in the result set */
print "Fetch all of the remaining rows in the result set:\n";
$result = $sth->fetchAll();
print_r($result);
?>
```

The above example will output something similar to:

```
Fetch all of the remaining rows in the result set:
Array
(
    [0] => Array
        (
            [name] => apple
            [0] => apple
            [colour] => red
            [1] => red
        )

    [1] => Array
        (
            [name] => pear
            [0] => pear
            [colour] => green
            [1] => green
        )

    [2] => Array
        (
            [name] => watermelon
            [0] => watermelon
            [colour] => pink
            [1] => pink
        )

)
```

Example #2 Fetching all values of a single column from a result set

The following example demonstrates how to return all of the values of a single column from a result set, even though the SQL statement itself may return multiple columns per row.

```
<?php
$sth = $dbh->prepare("SELECT name, colour FROM fruit");
$sth->execute();

/* Fetch all of the values of the first column */
$result = $sth->fetchAll(PDO::FETCH_COLUMN, 0);
var_dump($result);
?>
```

The above example will output something similar to:

```
Array(3)
(
    [0] =>
    string(5) => apple
    [1] =>
    string(4) => pear
    [2] =>
    string(10) => watermelon
)
```

Example #3 Grouping all values by a single column

The following example demonstrates how to return an associative array grouped by the values of the specified column in the result set. The array contains three keys: values apple and pear are returned as arrays that contain two different colours, while watermelon is returned as an array that contains only one colour.

```
<?php
$insert = $dbh->prepare("INSERT INTO fruit(name, colour) VALUES (?, ?)");
$insert->execute(array('apple', 'green'));
$insert->execute(array('pear', 'yellow'));

$sth = $dbh->prepare("SELECT name, colour FROM fruit");
$sth->execute();

/* Group values by the first column */
var_dump($sth->fetchAll(PDO::FETCH_COLUMN|PDO::FETCH_GROUP));
?>
```

The above example will output something similar to:

```
array(3) {
  ["apple"]=>
  array(2) {
    [0]=>
    string(5) "green"
    [1]=>
    string(3) "red"
  }
  ["pear"]=>
  array(2) {
    [0]=>
    string(5) "green"
    [1]=>
    string(6) "yellow"
  }
  ["watermelon"]=>
  array(1) {
    [0]=>
    string(5) "pink"
  }
}
```

Example #4 Instantiating a class for each result

The following example demonstrates the behaviour of the PDO::FETCH_CLASS fetch style.

```
<?php
class fruit {
    public $name;
    public $colour;
}

$sth = $dbh->prepare("SELECT name, colour FROM fruit");
$sth->execute();

$result = $sth->fetchAll(PDO::FETCH_CLASS, "fruit");
var_dump($result);
?>
```

The above example will output something similar to:

```
array(3) {
  [0]=>
  object(fruit)#1 (2) {
    ["name"]=>
    string(5) "apple"
    ["colour"]=>
    string(5) "green"
  }
  [1]=>
  object(fruit)#2 (2) {
    ["name"]=>
    string(4) "pear"
    ["colour"]=>
    string(6) "yellow"
  }
  [2]=>
  object(fruit)#3 (2) {
    ["name"]=>
    string(10) "watermelon"
    ["colour"]=>
    string(4) "pink"
  }
  [3]=>
  object(fruit)#4 (2) {
    ["name"]=>
    string(5) "apple"
    ["colour"]=>
    string(3) "red"
  }
  [4]=>
  object(fruit)#5 (2) {
    ["name"]=>
    string(4) "pear"
    ["colour"]=>
    string(5) "green"
  }
}
```

Example #5 Calling a function for each result

The following example demonstrates the behaviour of the PDO::FETCH_FUNC fetch style.

```
<?php
function fruit($name, $colour) {
    return "{$name}: {$colour}";
}

$sth = $dbh->prepare("SELECT name, colour FROM fruit");
$sth->execute();

$result = $sth->fetchAll(PDO::FETCH_FUNC, "fruit");
var_dump($result);
?>
```

The above example will output something similar to:

```
array(3) {
  [0]=>
  string(12) "apple: green"
  [1]=>
  string(12) "pear: yellow"
  [2]=>
  string(16) "watermelon: pink"
  [3]=>
  string(10) "apple: red"
  [4]=>
  string(11) "pear: green"
}
```

### See Also

- PDO::query() - Prepares and executes an SQL statement without placeholders
- PDOStatement::fetch() - Fetches the next row from a result set
- PDOStatement::fetchColumn() - Returns a single column from the next row of a result set
- PDO::prepare() - Prepares a statement for execution and returns a statement object
- PDOStatement::setFetchMode() - Set the default fetch mode for this statement

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdostatement.fetchall.php
