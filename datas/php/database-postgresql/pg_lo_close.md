# pg_lo_close

Source: https://devdocs.io/php/function.pg-lo-close

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

pg_lo_close — Close a large object

### Description

```
pg_lo_close(PgSql\Lob $lob): bool
```

pg_lo_close() closes a large object.

To use the large object interface, it is necessary to enclose it within a transaction block.

Note:

This function used to be called pg_loclose().

### Parameters

An PgSql\Lob instance, returned by pg_lo_open().

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 pg_lo_close() example

```
<?php
   $database = pg_connect("dbname=jacarta");
   pg_query($database, "begin");
   $oid = pg_lo_create($database);
   echo "$oid\n";
   $handle = pg_lo_open($database, $oid, "w");
   echo "$handle\n";
   pg_lo_write($handle, "large object data");
   pg_lo_close($handle);
   pg_query($database, "commit");
?>
```

### See Also

- pg_lo_open() - Open a large object
- pg_lo_create() - Create a large object
- pg_lo_import() - Import a large object from file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-lo-close.php
