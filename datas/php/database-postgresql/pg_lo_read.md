# pg_lo_read

Source: https://devdocs.io/php/function.pg-lo-read

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

pg_lo_read — Read a large object

### Description

```
pg_lo_read(PgSql\Lob $lob, int $length = 8192): string|false
```

pg_lo_read() reads at most length bytes from a large object and returns it as a string.

To use the large object interface, it is necessary to enclose it within a transaction block.

Note:

This function used to be called pg_loread().

### Parameters

An PgSql\Lob instance, returned by pg_lo_open().

An optional maximum number of bytes to return.

### Return Values

A string containing length bytes from the large object, or false on error.

### Changelog

### Examples

Example #1 pg_lo_read() example

```
<?php
   $doc_oid = 189762345;
   $database = pg_connect("dbname=jacarta");
   pg_query($database, "begin");
   $handle = pg_lo_open($database, $doc_oid, "r");
   $data = pg_lo_read($handle, 50000);
   pg_query($database, "commit");
   echo $data;
?>
```

### See Also

- pg_lo_read_all() - Reads an entire large object and send straight to browser

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-lo-read.php
