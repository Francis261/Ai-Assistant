# pg_escape_literal

Source: https://devdocs.io/php/function.pg-escape-literal

(PHP 5 >= 5.4.4, PHP 7, PHP 8)

pg_escape_literal — Escape a literal for insertion into a text field

### Description

```
pg_escape_literal(PgSql\Connection $connection = ?, string $data): string
```

pg_escape_literal() escapes a literal for querying the PostgreSQL database. It returns an escaped literal in the PostgreSQL format. pg_escape_literal() adds quotes before and after data. Users should not add quotes. Use of this function is recommended instead of pg_escape_string(). If the type of the column is bytea, pg_escape_bytea() must be used instead. For escaping identifiers (e.g. table, field names), pg_escape_identifier() must be used.

Note:

This function has internal escape code and can also be used with PostgreSQL 8.4 or less.

### Parameters

An PgSql\Connection instance. When connection is unspecified, the default connection is used. The default connection is the last connection made by pg_connect() or pg_pconnect().

As of PHP 8.1.0, using the default connection is deprecated.

A string containing text to be escaped.

### Return Values

A string containing the escaped data.

### Changelog

### Examples

Example #1 pg_escape_literal() example

```
<?php 
  // Connect to the database
  $dbconn = pg_connect('dbname=foo');
  
  // Read in a text file (containing apostrophes and backslashes)
  $data = file_get_contents('letter.txt');
  
  // Escape the text data
  $escaped = pg_escape_literal($data);
  
  // Insert it into the database. Note that no quotes around {$escaped}
  pg_query("INSERT INTO correspondence (name, data) VALUES ('My letter', {$escaped})");
?>
```

### See Also

- pg_escape_identifier() - Escape a identifier for insertion into a text field
- pg_escape_bytea() - Escape a string for insertion into a bytea field
- pg_escape_string() - Escape a string for query

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-escape-literal.php
