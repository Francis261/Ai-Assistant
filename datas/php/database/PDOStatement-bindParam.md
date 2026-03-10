# PDOStatement::bindParam

Source: https://devdocs.io/php/pdostatement.bindparam

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 0.1.0)

PDOStatement::bindParam — Binds a parameter to the specified variable name

### Description

```
public PDOStatement::bindParam(
 string|int $param,
 mixed &$var,
 int $type = PDO::PARAM_STR,
 int $maxLength = 0,
 mixed $driverOptions = null
): bool
```

Binds a PHP variable to a corresponding named or question mark placeholder in the SQL statement that was used to prepare the statement. Unlike PDOStatement::bindValue(), the variable is bound as a reference and will only be evaluated at the time that PDOStatement::execute() is called.

Most parameters are input parameters, that is, parameters that are used in a read-only fashion to build up the query (but may nonetheless be cast according to type). Some drivers support the invocation of stored procedures that return data as output parameters, and some also as input/output parameters that both send in data and are updated to receive it.

### Parameters

Parameter identifier. For a prepared statement using named placeholders, this will be a parameter name of the form :name. For a prepared statement using question mark placeholders, this will be the 1-indexed position of the parameter.

Name of the PHP variable to bind to the SQL statement parameter.

Explicit data type for the parameter using the PDO::PARAM_* constants. To return an INOUT parameter from a stored procedure, use the bitwise OR operator to set the PDO::PARAM_INPUT_OUTPUT bits for the type parameter.

Length of the data type. To indicate that a parameter is an OUT parameter from a stored procedure, you must explicitly set the length. Meaningful only when type parameter is PDO::PARAM_INPUT_OUTPUT.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

Emits an error with level E_WARNING if the attribute PDO::ATTR_ERRMODE is set to PDO::ERRMODE_WARNING.

Throws a PDOException if the attribute PDO::ATTR_ERRMODE is set to PDO::ERRMODE_EXCEPTION.

### Examples

Example #1 Execute a prepared statement with named placeholders

```
<?php
/* Execute a prepared statement by binding PHP variables */
$calories = 150;
$colour = 'red';
$sth = $dbh->prepare('SELECT name, colour, calories
    FROM fruit
    WHERE calories < :calories AND colour = :colour');
$sth->bindParam('calories', $calories, PDO::PARAM_INT);
/* Names can be prefixed with colons ":" too (optional) */
$sth->bindParam(':colour', $colour, PDO::PARAM_STR);
$sth->execute();
?>
```

Example #2 Execute a prepared statement with question mark placeholders

```
<?php
/* Execute a prepared statement by binding PHP variables */
$calories = 150;
$colour = 'red';
$sth = $dbh->prepare('SELECT name, colour, calories
    FROM fruit
    WHERE calories < ? AND colour = ?');
$sth->bindParam(1, $calories, PDO::PARAM_INT);
$sth->bindParam(2, $colour, PDO::PARAM_STR);
$sth->execute();
?>
```

Example #3 Call a stored procedure with an INOUT parameter

```
<?php
/* Call a stored procedure with an INOUT parameter */
$colour = 'red';
$sth = $dbh->prepare('CALL puree_fruit(?)');
$sth->bindParam(1, $colour, PDO::PARAM_STR|PDO::PARAM_INPUT_OUTPUT, 12);
$sth->execute();
print "After pureeing fruit, the colour is: $colour";
?>
```

### See Also

- PDO::prepare() - Prepares a statement for execution and returns a statement object
- PDOStatement::execute() - Executes a prepared statement
- PDOStatement::bindValue() - Binds a value to a parameter

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdostatement.bindparam.php
