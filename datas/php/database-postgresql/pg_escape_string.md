# pg_escape_string

Source: https://devdocs.io/php/function.pg-escape-string

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

pg_escape_string — Escape a string for query

### Description

```
pg_escape_string(PgSql\Connection $connection = ?, string $data): string
```

pg_escape_string() escapes a string for querying the database. It returns an escaped string in the PostgreSQL format without quotes. pg_escape_literal() is more preferred way to escape SQL parameters for PostgreSQL. addslashes() must not be used with PostgreSQL. If the type of the column is bytea, pg_escape_bytea() must be used instead. pg_escape_identifier() must be used to escape identifiers (e.g. table names, field names)

Note:

This function requires PostgreSQL 7.2 or later.

### Parameters

An PgSql\Connection instance. When connection is unspecified, the default connection is used. The default connection is the last connection made by pg_connect() or pg_pconnect().

As of PHP 8.1.0, using the default connection is deprecated.

A string containing text to be escaped.

### Return Values

A string containing the escaped data.

### Changelog

### Examples

Example #1 pg_escape_string() example

```
<?php 
  // Connect to the database
  $dbconn = pg_connect('dbname=foo');
  
  // Read in a text file (containing apostrophes and backslashes)
  $data = file_get_contents('letter.txt');
  
  // Escape the text data
  $escaped = pg_escape_string($data);
  
  // Insert it into the database
  pg_query("INSERT INTO correspondence (name, data) VALUES ('My letter', '{$escaped}')");
?>
```

### See Also

- pg_escape_bytea() - Escape a string for insertion into a bytea field

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-escape-string.php
