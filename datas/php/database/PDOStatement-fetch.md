# PDOStatement::fetch

Source: https://devdocs.io/php/pdostatement.fetch

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 0.1.0)

PDOStatement::fetch — Fetches the next row from a result set

### Description

```
public PDOStatement::fetch(int $mode = PDO::FETCH_DEFAULT, int $cursorOrientation = PDO::FETCH_ORI_NEXT, int $cursorOffset = 0): mixed
```

Fetches a row from a result set associated with a PDOStatement object. The mode parameter determines how PDO returns the row.

### Parameters

Controls how the next row will be returned to the caller. This value must be one of the PDO::FETCH_* constants, defaulting to value of PDO::ATTR_DEFAULT_FETCH_MODE (which defaults to PDO::FETCH_BOTH).

- PDO::FETCH_ASSOC: returns an array indexed by column name as returned in your result set
- PDO::FETCH_BOTH (default): returns an array indexed by both column name and 0-indexed column number as returned in your result set
- PDO::FETCH_BOUND: returns true and assigns the values of the columns in your result set to the PHP variables to which they were bound with the PDOStatement::bindColumn() method
- PDO::FETCH_CLASS: returns a new instance of the requested class. The object is initialized by mapping the columns of the result set to properties in the class. This occurs before the constructor is called, allowing properties to be populated regardless of their visibility or whether they are marked as readonly. If a property does not exist in the class, the magic __set() method will be invoked if it exists; otherwise, a dynamic public property will be created. However, when PDO::FETCH_PROPS_LATE is also given, the constructor is called before the properties are populated. If mode includes PDO::FETCH_CLASSTYPE (e.g. PDO::FETCH_CLASS | PDO::FETCH_CLASSTYPE), the name of the class is determined from the value of the first column.
- PDO::FETCH_INTO: updates an existing instance of the requested class, mapping the columns of the result set to named properties in the class
- PDO::FETCH_LAZY: combines PDO::FETCH_BOTH and PDO::FETCH_OBJ, and is returning a PDORow object which is creating the object property names as they are accessed.
- PDO::FETCH_NAMED: returns an array with the same form as PDO::FETCH_ASSOC, except that if there are multiple columns with the same name, the value referred to by that key will be an array of all the values in the row that had that column name
- PDO::FETCH_NUM: returns an array indexed by column number as returned in your result set, starting at column 0
- PDO::FETCH_OBJ: returns an anonymous object with property names that correspond to the column names returned in your result set
- PDO::FETCH_PROPS_LATE: when used with PDO::FETCH_CLASS, the constructor of the class is called before the properties are assigned from the respective column values.

PDO::FETCH_ASSOC: returns an array indexed by column name as returned in your result set

PDO::FETCH_BOTH (default): returns an array indexed by both column name and 0-indexed column number as returned in your result set

PDO::FETCH_BOUND: returns true and assigns the values of the columns in your result set to the PHP variables to which they were bound with the PDOStatement::bindColumn() method

PDO::FETCH_CLASS: returns a new instance of the requested class. The object is initialized by mapping the columns of the result set to properties in the class. This occurs before the constructor is called, allowing properties to be populated regardless of their visibility or whether they are marked as readonly. If a property does not exist in the class, the magic __set() method will be invoked if it exists; otherwise, a dynamic public property will be created. However, when PDO::FETCH_PROPS_LATE is also given, the constructor is called before the properties are populated. If mode includes PDO::FETCH_CLASSTYPE (e.g. PDO::FETCH_CLASS | PDO::FETCH_CLASSTYPE), the name of the class is determined from the value of the first column.

PDO::FETCH_INTO: updates an existing instance of the requested class, mapping the columns of the result set to named properties in the class

PDO::FETCH_LAZY: combines PDO::FETCH_BOTH and PDO::FETCH_OBJ, and is returning a PDORow object which is creating the object property names as they are accessed.

PDO::FETCH_NAMED: returns an array with the same form as PDO::FETCH_ASSOC, except that if there are multiple columns with the same name, the value referred to by that key will be an array of all the values in the row that had that column name

PDO::FETCH_NUM: returns an array indexed by column number as returned in your result set, starting at column 0

PDO::FETCH_OBJ: returns an anonymous object with property names that correspond to the column names returned in your result set

PDO::FETCH_PROPS_LATE: when used with PDO::FETCH_CLASS, the constructor of the class is called before the properties are assigned from the respective column values.

For a PDOStatement object representing a scrollable cursor, this value determines which row will be returned to the caller. This value must be one of the PDO::FETCH_ORI_* constants, defaulting to PDO::FETCH_ORI_NEXT. To request a scrollable cursor for your PDOStatement object, you must set the PDO::ATTR_CURSOR attribute to PDO::CURSOR_SCROLL when you prepare the SQL statement with PDO::prepare().

For a PDOStatement object representing a scrollable cursor for which the cursorOrientation parameter is set to PDO::FETCH_ORI_ABS, this value specifies the absolute number of the row in the result set that shall be fetched.

For a PDOStatement object representing a scrollable cursor for which the cursorOrientation parameter is set to PDO::FETCH_ORI_REL, this value specifies the row to fetch relative to the cursor position before PDOStatement::fetch() was called.

### Return Values

The return value of this function on success depends on the fetch type. In all cases, false is returned on failure or if there are no more rows.

### Errors/Exceptions

Emits an error with level E_WARNING if the attribute PDO::ATTR_ERRMODE is set to PDO::ERRMODE_WARNING.

Throws a PDOException if the attribute PDO::ATTR_ERRMODE is set to PDO::ERRMODE_EXCEPTION.

### Examples

Example #1 Fetching rows using different fetch styles

```
<?php
$sth = $dbh->prepare("SELECT name, colour FROM fruit");
$sth->execute();

/* Exercise PDOStatement::fetch styles */
print "PDO::FETCH_ASSOC: ";
print "Return next row as an array indexed by column name\n";
$result = $sth->fetch(PDO::FETCH_ASSOC);
print_r($result);
print "\n";

print "PDO::FETCH_BOTH: ";
print "Return next row as an array indexed by both column name and number\n";
$result = $sth->fetch(PDO::FETCH_BOTH);
print_r($result);
print "\n";

print "PDO::FETCH_LAZY: ";
print "Return next row as a PDORow object with column names as properties\n";
$result = $sth->fetch(PDO::FETCH_LAZY);
print_r($result);
print "\n";

print "PDO::FETCH_OBJ: ";
print "Return next row as an anonymous object with column names as properties\n";
$result = $sth->fetch(PDO::FETCH_OBJ);
print $result->name;
print "\n";
?>
```

The above example will output:

```
PDO::FETCH_ASSOC: Return next row as an array indexed by column name
Array
(
    [name] => apple
    [colour] => red
)

PDO::FETCH_BOTH: Return next row as an array indexed by both column name and number
Array
(
    [name] => banana
    [0] => banana
    [colour] => yellow
    [1] => yellow
)

PDO::FETCH_LAZY: Return next row as a PDORow object with column names as properties
PDORow Object
(
    [name] => orange
    [colour] => orange
)

PDO::FETCH_OBJ: Return next row as an anonymous object with column names as properties
kiwi
```

Example #2 Fetching rows with a scrollable cursor

```
<?php
function readDataForwards($dbh) {
    $sql = 'SELECT hand, won, bet FROM mynumbers ORDER BY BET';
    $stmt = $dbh->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_SCROLL));
    $stmt->execute();
    while ($row = $stmt->fetch(PDO::FETCH_NUM, PDO::FETCH_ORI_NEXT)) {
        $data = $row[0] . "\t" . $row[1] . "\t" . $row[2] . "\n";
        print $data;
    }
}
function readDataBackwards($dbh) {
    $sql = 'SELECT hand, won, bet FROM mynumbers ORDER BY bet';
    $stmt = $dbh->prepare($sql, array(PDO::ATTR_CURSOR => PDO::CURSOR_SCROLL));
    $stmt->execute();
    $row = $stmt->fetch(PDO::FETCH_NUM, PDO::FETCH_ORI_LAST);
    do {
        $data = $row[0] . "\t" . $row[1] . "\t" . $row[2] . "\n";
        print $data;
    } while ($row = $stmt->fetch(PDO::FETCH_NUM, PDO::FETCH_ORI_PRIOR));
}

print "Reading forwards:\n";
readDataForwards($conn);

print "Reading backwards:\n";
readDataBackwards($conn);
?>
```

The above example will output:

```
Reading forwards:
21    10    5
16    0     5
19    20    10

Reading backwards:
19    20    10
16    0     5
21    10    5
```

Example #3 Construction order

When objects are fetched via PDO::FETCH_CLASS, the object properties are assigned first, and then the constructor of the class is invoked. However, when PDO::FETCH_PROPS_LATE is also given, this order is reversed, i.e. first the constructor is called, and afterwards the properties are assigned.

```
<?php
class Person
{
    private $name;

    public function __construct()
    {
        $this->tell();
    }

    public function tell()
    {
        if (isset($this->name)) {
            echo "I am {$this->name}.\n";
        } else {
            echo "I don't have a name yet.\n";
        }
    }
}

$sth = $dbh->query("SELECT * FROM people");
$sth->setFetchMode(PDO::FETCH_CLASS, 'Person');
$person = $sth->fetch();
$person->tell();
$sth->setFetchMode(PDO::FETCH_CLASS|PDO::FETCH_PROPS_LATE, 'Person');
$person = $sth->fetch();
$person->tell();
?>
```

The above example will output something similar to:

```
I am Alice.
I am Alice.
I don't have a name yet.
I am Bob.
```

### See Also

- PDO::prepare() - Prepares a statement for execution and returns a statement object
- PDOStatement::execute() - Executes a prepared statement
- PDOStatement::fetchAll() - Fetches the remaining rows from a result set
- PDOStatement::fetchColumn() - Returns a single column from the next row of a result set
- PDOStatement::fetchObject() - Fetches the next row and returns it as an object
- PDOStatement::setFetchMode() - Set the default fetch mode for this statement

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdostatement.fetch.php
