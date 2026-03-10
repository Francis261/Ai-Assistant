# PDOStatement::bindColumn

Source: https://devdocs.io/php/pdostatement.bindcolumn

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 0.1.0)

PDOStatement::bindColumn — Bind a column to a PHP variable

### Description

```
public PDOStatement::bindColumn(
 string|int $column,
 mixed &$var,
 int $type = PDO::PARAM_STR,
 int $maxLength = 0,
 mixed $driverOptions = null
): bool
```

PDOStatement::bindColumn() arranges to have a particular variable bound to a given column in the result-set from a query. Each call to PDOStatement::fetch() or PDOStatement::fetchAll() will update all the variables that are bound to columns.

Note:

Since information about the columns is not always available to PDO until the statement is executed, portable applications should call this function after PDOStatement::execute().

However, to be able to bind a LOB column as a stream when using the PgSQL driver, applications should call this method before calling PDOStatement::execute(), otherwise the large object OID will be returned as an integer.

### Parameters

Number of the column (1-indexed) or name of the column in the result set. If using the column name, be aware that the name should match the case of the column, as returned by the driver.

Name of the PHP variable to which the column will be bound.

Data type of the parameter, specified by the PDO::PARAM_* constants.

A hint for pre-allocation.

Optional parameter(s) for the driver.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

Emits an error with level E_WARNING if the attribute PDO::ATTR_ERRMODE is set to PDO::ERRMODE_WARNING.

Throws a PDOException if the attribute PDO::ATTR_ERRMODE is set to PDO::ERRMODE_EXCEPTION.

### Examples

Example #1 Binding result set output to PHP variables

Binding columns in the result set to PHP variables is an effective way to make the data contained in each row immediately available to your application. The following example demonstrates how PDO allows you to bind and retrieve columns with a variety of options and with intelligent defaults.

```
<?php
$stmt = $dbh->prepare('SELECT name, colour, calories FROM fruit');
$stmt->execute();

/* Bind by column number */
$stmt->bindColumn(1, $name);
$stmt->bindColumn(2, $colour);

/* Bind by column name */
$stmt->bindColumn('calories', $cals);

while ($stmt->fetch(PDO::FETCH_BOUND)) {
    print $name . "\t" . $colour . "\t" . $cals . "\n";
}
```

The above example will output something similar to:

```
apple   red     150
banana  yellow  175
kiwi    green   75
orange  orange  150
mango   red     200
strawberry      red     25
```

### See Also

- PDOStatement::execute() - Executes a prepared statement
- PDOStatement::fetch() - Fetches the next row from a result set
- PDOStatement::fetchAll() - Fetches the remaining rows from a result set
- PDOStatement::fetchColumn() - Returns a single column from the next row of a result set

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdostatement.bindcolumn.php
