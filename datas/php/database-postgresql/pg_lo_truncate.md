# pg_lo_truncate

Source: https://devdocs.io/php/function.pg-lo-truncate

(PHP 5 >= 5.6.0, PHP 7, PHP 8)

pg_lo_truncate — Truncates a large object

### Description

```
pg_lo_truncate(PgSql\Lob $lob, int $size): bool
```

pg_lo_truncate() truncates an PgSql\Lob instance.

To use the large object interface, it is necessary to enclose it within a transaction block.

### Parameters

An PgSql\Lob instance, returned by pg_lo_open().

The number of bytes to truncate.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 pg_lo_truncate() example

```
<?php
   $doc_oid = 189762345;
   $database = pg_connect("dbname=jacarta");
   pg_query($database, "begin");
   $handle = pg_lo_open($database, $doc_oid, "r");
   // Truncate to 0
   pg_lo_truncate($handle, 0);
   pg_query($database, "commit");
   echo $data;
?>
```

### See Also

- pg_lo_tell() - Returns current seek position a of large object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-lo-truncate.php
