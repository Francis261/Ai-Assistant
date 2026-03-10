# odbc_execute

Source: https://devdocs.io/php/function.odbc-execute

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_execute — Execute a prepared statement

### Description

```
odbc_execute(Odbc\Result $statement, array $params = []): bool
```

Executes a statement prepared with odbc_prepare().

### Parameters

The ODBC result object from odbc_prepare().

Parameters in params will be substituted for placeholders in the prepared statement in order. Elements of this array will be converted to strings by calling this function.

Any parameters in params which start and end with single quotes will be taken as the name of a file to read and send to the database server as the data for the appropriate placeholder.

### Return Values

Returns true on success or false on failure.

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

- odbc_prepare() - Prepares a statement for execution

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-execute.php
