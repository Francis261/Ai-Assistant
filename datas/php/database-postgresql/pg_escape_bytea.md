# pg_escape_bytea

Source: https://devdocs.io/php/function.pg-escape-bytea

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

pg_escape_bytea — Escape a string for insertion into a bytea field

### Description

```
pg_escape_bytea(PgSql\Connection $connection = ?, string $data): string
```

pg_escape_bytea() escapes string for bytea datatype. It returns escaped string.

Note:

When you SELECT a bytea type, PostgreSQL returns octal byte values prefixed with '\' (e.g. \032). Users are supposed to convert back to binary format manually.

This function requires PostgreSQL 7.2 or later. With PostgreSQL 7.2.0 and 7.2.1, bytea values must be cast when you enable multi-byte support. i.e. INSERT INTO test_table (image)
 VALUES ('$image_escaped'::bytea); PostgreSQL 7.2.2 or later does not need a cast. The exception is when the client and backend character encoding does not match, and there may be multi-byte stream error. User must then cast to bytea to avoid this error.

### Parameters

An PgSql\Connection instance. When connection is unspecified, the default connection is used. The default connection is the last connection made by pg_connect() or pg_pconnect().

As of PHP 8.1.0, using the default connection is deprecated.

A string containing text or binary data to be inserted into a bytea column.

### Return Values

A string containing the escaped data.

### Changelog

### Examples

Example #1 pg_escape_bytea() example

```
<?php 
  // Connect to the database
  $dbconn = pg_connect('dbname=foo');
  
  // Read in a binary file
  $data = file_get_contents('image1.jpg');
  
  // Escape the binary data
  $escaped = pg_escape_bytea($data);
  
  // Insert it into the database
  pg_query("INSERT INTO gallery (name, data) VALUES ('Pine trees', '{$escaped}')");
?>
```

### See Also

- pg_unescape_bytea() - Unescape binary for bytea type
- pg_escape_string() - Escape a string for query

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-escape-bytea.php
