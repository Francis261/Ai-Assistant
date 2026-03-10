# pg_insert

Source: https://devdocs.io/php/function.pg-insert

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

pg_insert — Insert array into table

### Description

```
pg_insert(
 PgSql\Connection $connection,
 string $table_name,
 array $values,
 int $flags = PGSQL_DML_EXEC
): PgSql\Result|string|bool
```

pg_insert() inserts the values of values into the table specified by table_name.

If flags is specified, pg_convert() is applied to values with the specified flags.

By default pg_insert() passes raw values. Values must be escaped or the PGSQL_DML_ESCAPE flag must be specified in flags. PGSQL_DML_ESCAPE quotes and escapes parameters/identifiers. Therefore, table/column names become case sensitive.

Note that neither escape nor prepared query can protect LIKE query, JSON, Array, Regex, etc. These parameters should be handled according to their contexts. i.e. Escape/validate values.

### Parameters

An PgSql\Connection instance.

Name of the table into which to insert rows. The table table_name must at least have as many columns as values has elements.

An array whose keys are field names in the table table_name, and whose values are the values of those fields that are to be inserted.

Any number of PGSQL_CONV_OPTS, PGSQL_DML_NO_CONV, PGSQL_DML_ESCAPE, PGSQL_DML_EXEC, PGSQL_DML_ASYNC or PGSQL_DML_STRING combined. If PGSQL_DML_STRING is part of the flags then query string is returned. When PGSQL_DML_NO_CONV or PGSQL_DML_ESCAPE is set, it does not call pg_convert() internally.

### Return Values

Returns true on success or false on failure.. Or returns a string on success if PGSQL_DML_STRING is passed via flags.

### Errors/Exceptions

A ValueError is thrown when the specified table is invalid.

A ValueError or TypeError is thrown when the value or type of field does not match properly with a PostgreSQL's type.

### Changelog

### Examples

Example #1 pg_insert() example

```
<?php 
  $dbconn = pg_connect('dbname=foo');
  // This is safe somewhat, since all values are escaped.
  // However PostgreSQL supports JSON/Array. These are not
  // safe by neither escape nor prepared query.
  $res = pg_insert($dbconn, 'post_log', $_POST, PGSQL_DML_ESCAPE);
  if ($res) {
      echo "POST data is successfully logged\n";
  } else {
      echo "User must have sent wrong inputs\n";
  }
?>
```

### See Also

- pg_convert() - Convert associative array values into forms suitable for SQL statements

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-insert.php
