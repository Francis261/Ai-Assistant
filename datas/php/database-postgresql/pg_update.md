# pg_update

Source: https://devdocs.io/php/function.pg-update

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

pg_update — Update table

### Description

```
pg_update(
 PgSql\Connection $connection,
 string $table_name,
 array $values,
 array $conditions,
 int $flags = PGSQL_DML_EXEC
): string|bool
```

pg_update() updates records that matches conditions with values.

If flags is specified, pg_convert() is applied to values with the specified flags.

By default pg_update() passes raw values. Values must be escaped or the PGSQL_DML_ESCAPE flag must be specified in flags. PGSQL_DML_ESCAPE quotes and escapes parameters/identifiers. Therefore, table/column names become case sensitive.

Note that neither escape nor prepared query can protect LIKE query, JSON, Array, Regex, etc. These parameters should be handled according to their contexts. i.e. Escape/validate values.

### Parameters

An PgSql\Connection instance.

Name of the table into which to update rows.

An array whose keys are field names in the table table_name, and whose values are what matched rows are to be updated to.

An array whose keys are field names in the table table_name, and whose values are the conditions that a row must meet to be updated.

Any number of PGSQL_CONV_FORCE_NULL, PGSQL_DML_NO_CONV, PGSQL_DML_ESCAPE, PGSQL_DML_EXEC, PGSQL_DML_ASYNC or PGSQL_DML_STRING combined. If PGSQL_DML_STRING is part of the flags then query string is returned. When PGSQL_DML_NO_CONV or PGSQL_DML_ESCAPE is set, it does not call pg_convert() internally.

### Return Values

Returns true on success or false on failure. Returns string if PGSQL_DML_STRING is passed via flags.

### Changelog

### Examples

Example #1 pg_update() example

```
<?php 
  $db = pg_connect('dbname=foo');
  $data = array('field1'=>'AA', 'field2'=>'BB');
  // This is safe somewhat, since all values are escaped.
  // However PostgreSQL supports JSON/Array. These are not
  // safe by neither escape nor prepared query.
  $res = pg_update($db, 'post_log', $_POST, $data);
  if ($res) {
      echo "Data is updated: $res\n";
  } else {
      echo "User must have sent wrong inputs\n";
  }
?>
```

### See Also

- pg_convert() - Convert associative array values into forms suitable for SQL statements

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-update.php
