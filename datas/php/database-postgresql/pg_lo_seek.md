# pg_lo_seek

Source: https://devdocs.io/php/function.pg-lo-seek

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

pg_lo_seek — Seeks position within a large object

### Description

```
pg_lo_seek(PgSql\Lob $lob, int $offset, int $whence = SEEK_CUR): bool
```

pg_lo_seek() seeks a position within an PgSql\Lob instance.

To use the large object interface, it is necessary to enclose it within a transaction block.

### Parameters

An PgSql\Lob instance, returned by pg_lo_open().

The number of bytes to seek.

One of the constants PGSQL_SEEK_SET (seek from object start), PGSQL_SEEK_CUR (seek from current position) or PGSQL_SEEK_END (seek from object end) .

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 pg_lo_seek() example

```
<?php
   $doc_oid = 189762345;
   $database = pg_connect("dbname=jacarta");
   pg_query($database, "begin");
   $handle = pg_lo_open($database, $doc_oid, "r");
   // Skip first 50000 bytes
   pg_lo_seek($handle, 50000, PGSQL_SEEK_SET);
   // Read the next 10000 bytes
   $data = pg_lo_read($handle, 10000);
   pg_query($database, "commit");
   echo $data;
?>
```

### See Also

- pg_lo_tell() - Returns current seek position a of large object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-lo-seek.php
