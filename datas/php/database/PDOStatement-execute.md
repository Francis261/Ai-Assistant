# PDOStatement::execute

Source: https://devdocs.io/php/pdostatement.execute

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 0.1.0)

PDOStatement::execute — Executes a prepared statement

### Description

```
public PDOStatement::execute(?array $params = null): bool
```

Execute the prepared statement. If the prepared statement included parameter markers, either:

- PDOStatement::bindParam() and/or PDOStatement::bindValue() has to be called to bind either variables or values (respectively) to the parameter markers. Bound variables pass their value as input and receive the output value, if any, of their associated parameter markers
- or an array of input-only parameter values has to be passed

PDOStatement::bindParam() and/or PDOStatement::bindValue() has to be called to bind either variables or values (respectively) to the parameter markers. Bound variables pass their value as input and receive the output value, if any, of their associated parameter markers

or an array of input-only parameter values has to be passed

### Parameters

An array of values with as many elements as there are bound parameters in the SQL statement being executed. All values are treated as PDO::PARAM_STR.

Multiple values cannot be bound to a single parameter; for example, it is not allowed to bind two values to a single named parameter in an IN() clause.

Binding more values than specified is not possible; if more keys exist in params than in the SQL specified in the PDO::prepare(), then the statement will fail and an error is emitted.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

Emits an error with level E_WARNING if the attribute PDO::ATTR_ERRMODE is set to PDO::ERRMODE_WARNING.

Throws a PDOException if the attribute PDO::ATTR_ERRMODE is set to PDO::ERRMODE_EXCEPTION.

### Examples

Example #1 Execute a prepared statement with a bound variable and value

```
<?php
/* Execute a prepared statement by binding a variable and value */
$calories = 150;
$colour = 'gre';
$sth = $dbh->prepare('SELECT name, colour, calories
    FROM fruit
    WHERE calories < :calories AND colour LIKE :colour');
$sth->bindParam('calories', $calories, PDO::PARAM_INT);
/* Names can be prefixed with colons ":" too (optional) */
$sth->bindValue(':colour', "%$colour%");
$sth->execute();
?>
```

Example #2 Execute a prepared statement with an array of named values

```
<?php
/* Execute a prepared statement by passing an array of insert values */
$calories = 150;
$colour = 'red';
$sth = $dbh->prepare('SELECT name, colour, calories
    FROM fruit
    WHERE calories < :calories AND colour = :colour');
$sth->execute(array('calories' => $calories, 'colour' => $colour));
/* Array keys can be prefixed with colons ":" too (optional) */
$sth->execute(array(':calories' => $calories, ':colour' => $colour));
?>
```

Example #3 Execute a prepared statement with an array of positional values

```
<?php
/* Execute a prepared statement by passing an array of insert values */
$calories = 150;
$colour = 'red';
$sth = $dbh->prepare('SELECT name, colour, calories
    FROM fruit
    WHERE calories < ? AND colour = ?');
$sth->execute(array($calories, $colour));
?>
```

Example #4 Execute a prepared statement with variables bound to positional placeholders

```
<?php
/* Execute a prepared statement by binding PHP variables */
$calories = 150;
$colour = 'red';
$sth = $dbh->prepare('SELECT name, colour, calories
    FROM fruit
    WHERE calories < ? AND colour = ?');
$sth->bindParam(1, $calories, PDO::PARAM_INT);
$sth->bindParam(2, $colour, PDO::PARAM_STR, 12);
$sth->execute();
?>
```

Example #5 Execute a prepared statement using array for IN clause

```
<?php
/* Execute a prepared statement using an array of values for an IN clause */
$params = array(1, 21, 63, 171);
/* Create a string for the parameter placeholders filled to the number of params */
$place_holders = '?' . str_repeat(', ?', count($params) - 1);

/*
    This prepares the statement with enough unnamed placeholders for every value
    in our $params array. The values of the $params array are then bound to the
    placeholders in the prepared statement when the statement is executed.
    This is not the same thing as using PDOStatement::bindParam() since this
    requires a reference to the variable. PDOStatement::execute() only binds
    by value instead.
*/
$sth = $dbh->prepare("SELECT id, name FROM contacts WHERE id IN ($place_holders)");
$sth->execute($params);
?>
```

### Notes

Note:

Some drivers require to close cursor before executing next statement.

### See Also

- PDO::prepare() - Prepares a statement for execution and returns a statement object
- PDOStatement::bindParam() - Binds a parameter to the specified variable name
- PDOStatement::fetch() - Fetches the next row from a result set
- PDOStatement::fetchAll() - Fetches the remaining rows from a result set
- PDOStatement::fetchColumn() - Returns a single column from the next row of a result set

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdostatement.execute.php
