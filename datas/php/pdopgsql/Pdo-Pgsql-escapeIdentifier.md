# Pdo\Pgsql::escapeIdentifier

Source: https://devdocs.io/php/pdo-pgsql.escapeidentifier

(PHP 8 >= 8.4.0)

Pdo\Pgsql::escapeIdentifier — Escapes a string for use as an SQL identifier

### Description

```
public Pdo\Pgsql::escapeIdentifier(string $input): string
```

Escapes a string for use as an SQL identifier, such as a table, column, or function name. This is useful when a user-supplied identifier might contain special characters that would otherwise not be interpreted as part of the identifier by the SQL parser, or when the identifier might contain upper case characters whose case should be preserved.

### Parameters

### Return Values

A string containing the escaped data.

### Examples

Example #1 Pdo\Pgsql::escapeIdentifier() example

```
<?php
$pdo = new Pdo\Pgsql('pgsql:dbname=test host=localhost', $user, $pass);

$unescapedTableName = 'UnescapedTableName';
$pdo->exec("CREATE TABLE $unescapedTableName ()");

$escapedTableName = $pdo->escapeIdentifier('EscapedTableName');
$pdo->exec("CREATE TABLE $escapedTableName ()");

$statement = $pdo->query(
  "SELECT relname FROM pg_stat_user_tables WHERE relname ilike '%tablename'"
);

var_export($statement->fetchAll(PDO::FETCH_COLUMN, 0));

$tableNameWithSymbols = 'Table-Name-With-Symbols';
$pdo->exec("CREATE TABLE $tableNameWithSymbols ()");
?>
```

The above example will output something similar to:

```
array (
  0 => 'unescapedtablename',
  1 => 'EscapedTableName',
)
Fatal error: Uncaught PDOException: SQLSTATE[42601]: Syntax error: 7 ERROR:  syntax error at or near "Table"
LINE 1: CREATE TABLE Table-Name-With-Symbols ()
```

### See Also

- PDO::quote() - Quotes a string for use in a query

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdo-pgsql.escapeidentifier.php
