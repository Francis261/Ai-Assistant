# odbc_prepare

Source: https://devdocs.io/php/function.odbc-prepare

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_prepare — Prepares a statement for execution

### Description

```
odbc_prepare(Odbc\Connection $odbc, string $query): Odbc\Result|false
```

Prepares a statement for execution. The ODBC result object can be used later to execute the statement with odbc_execute().

Some databases (such as IBM DB2, MS SQL Server, and Oracle) support stored procedures that accept parameters of type IN, INOUT, and OUT as defined by the ODBC specification. However, the Unified ODBC driver currently only supports parameters of type IN to stored procedures.

### Parameters

The ODBC connection object, see odbc_connect() for details.

The query string statement being prepared.

### Return Values

Returns an ODBC result object if the SQL command was prepared successfully. Returns false on error.

### Changelog

### Examples

Example #1 odbc_execute() and odbc_prepare() example

In the following code, $success will only be true if all three parameters to myproc are IN parameters:

```
<?php
$a = 1;
$b = 2;
$c = 3;
$stmt    = odbc_prepare($conn, 'CALL myproc(?,?,?)');
$success = odbc_execute($stmt, array($a, $b, $c));
?>
```

If you need to call a stored procedure using INOUT or OUT parameters, the recommended workaround is to use a native extension for your database (for example, oci8 for Oracle).

### See Also

- odbc_execute() - Execute a prepared statement

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-prepare.php
