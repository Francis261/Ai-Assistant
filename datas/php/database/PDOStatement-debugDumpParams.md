# PDOStatement::debugDumpParams

Source: https://devdocs.io/php/pdostatement.debugdumpparams

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 0.9.0)

PDOStatement::debugDumpParams — Dump an SQL prepared command

### Description

```
public PDOStatement::debugDumpParams(): ?bool
```

Dumps the information contained by a prepared statement directly on the output. It will provide the SQL query in use, the number of parameters used (Params), the list of parameters with their key name or position, their name, their position in the query (if this is supported by the PDO driver, otherwise, it will be -1), type (param_type) as an integer, and a boolean value is_param.

This is a debug function, which dumps the data directly to the normal output.

As with anything that outputs its result directly to the browser, the output-control functions can be used to capture the output of this function, and save it in a string (for example).

This will only dump the parameters in the statement at the moment of the dump. Extra parameters are not stored in the statement, and not displayed.

### Parameters

This function has no parameters.

### Return Values

Returns null, or false in case of an error.

### Changelog

### Examples

Example #1 PDOStatement::debugDumpParams() example with named parameters

```
<?php
/* Execute a prepared statement by binding PHP variables */
$calories = 150;
$colour = 'red';
$sth = $dbh->prepare('SELECT name, colour, calories
    FROM fruit
    WHERE calories < :calories AND colour = :colour');
$sth->bindParam(':calories', $calories, PDO::PARAM_INT);
$sth->bindValue(':colour', $colour, PDO::PARAM_STR, 12);
$sth->execute();

$sth->debugDumpParams();

?>
```

The above example will output:

```
SQL: [96] SELECT name, colour, calories
    FROM fruit
    WHERE calories < :calories AND colour = :colour
Params:  2
Key: Name: [9] :calories
paramno=-1
name=[9] ":calories"
is_param=1
param_type=1
Key: Name: [7] :colour
paramno=-1
name=[7] ":colour"
is_param=1
param_type=2
```

Example #2 PDOStatement::debugDumpParams() example with unnamed parameters

```
<?php

/* Execute a prepared statement by binding PHP variables */
$calories = 150;
$colour = 'red';
$name = 'apple';

$sth = $dbh->prepare('SELECT name, colour, calories
    FROM fruit
    WHERE calories < ? AND colour = ?');
$sth->bindParam(1, $calories, PDO::PARAM_INT);
$sth->bindValue(2, $colour, PDO::PARAM_STR);
$sth->execute();

$sth->debugDumpParams();

?>
```

The above example will output:

```
SQL: [82] SELECT name, colour, calories
    FROM fruit
    WHERE calories < ? AND colour = ?
Params:  2
Key: Position #0:
paramno=0
name=[0] ""
is_param=1
param_type=1
Key: Position #1:
paramno=1
name=[0] ""
is_param=1
param_type=2
```

### See Also

- PDO::prepare() - Prepares a statement for execution and returns a statement object
- PDOStatement::bindParam() - Binds a parameter to the specified variable name
- PDOStatement::bindValue() - Binds a value to a parameter

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdostatement.debugdumpparams.php
