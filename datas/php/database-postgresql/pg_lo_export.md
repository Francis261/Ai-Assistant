# pg_lo_export

Source: https://devdocs.io/php/function.pg-lo-export

(PHP 4 >= 4.2.0, PHP 5, PHP 7, PHP 8)

pg_lo_export — Export a large object to file

### Description

```
pg_lo_export(PgSql\Connection $connection = ?, int $oid, string $pathname): bool
```

pg_lo_export() takes a large object in a PostgreSQL database and saves its contents to a file on the local filesystem.

To use the large object interface, it is necessary to enclose it within a transaction block.

Note:

This function used to be called pg_loexport().

### Parameters

An PgSql\Connection instance. When connection is unspecified, the default connection is used. The default connection is the last connection made by pg_connect() or pg_pconnect().

As of PHP 8.1.0, using the default connection is deprecated.

The OID of the large object in the database.

The full path and file name of the file in which to write the large object on the client filesystem.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 pg_lo_export() example

```
<?php
   $database = pg_connect("dbname=jacarta");
   pg_query($database, "begin");
   $oid = pg_lo_create($database);
   $handle = pg_lo_open($database, $oid, "w");
   pg_lo_write($handle, "large object data");
   pg_lo_close($handle);
   pg_lo_export($database, $oid, '/tmp/lob.dat');
   pg_query($database, "commit");
?>
```

### See Also

- pg_lo_import() - Import a large object from file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pg-lo-export.php
