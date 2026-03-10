# PDOStatement::bindValue

Source: https://devdocs.io/php/pdostatement.bindvalue

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 1.0.0)

PDOStatement::bindValue — Binds a value to a parameter

### Description

```
public PDOStatement::bindValue(string|int $param, mixed $value, int $type = PDO::PARAM_STR): bool
```

Binds a value to a corresponding named or question mark placeholder in the SQL statement that was used to prepare the statement.

### Parameters

Parameter identifier. For a prepared statement using named placeholders, this will be a parameter name of the form :name. For a prepared statement using question mark placeholders, this will be the 1-indexed position of the parameter.

The value to bind to the parameter.

Explicit data type for the parameter using the PDO::PARAM_* constants.

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

/* Sets a parameter value using its name */
$sth->bindValue('calories', $calories, PDO::PARAM_INT);
/* Optionally, parameter names can also be prefixed with colons ":" */
$sth->bindValue(':colour', $colour, PDO::PARAM_STR);
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
$sth->bindValue(1, $calories, PDO::PARAM_INT);
$sth->bindValue(2, $colour, PDO::PARAM_STR);
$sth->execute();
?>
```

### See Also

- PDO::prepare() - Prepares a statement for execution and returns a statement object
- PDOStatement::execute() - Executes a prepared statement
- PDOStatement::bindParam() - Binds a parameter to the specified variable name

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdostatement.bindvalue.php
