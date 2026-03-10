# odbc_setoption

Source: https://devdocs.io/php/function.odbc-setoption

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_setoption — Adjust ODBC settings

### Description

```
odbc_setoption(
 Odbc\Connection|Odbc\Result $odbc,
 int $which,
 int $option,
 int $value
): bool
```

This function allows fiddling with the ODBC options for a particular connection or query result. It was written to help find work around to problems in quirky ODBC drivers. You should probably only use this function if you are an ODBC programmer and understand the effects the various options will have. You will certainly need a good ODBC reference to explain all the different options and values that can be used. Different driver versions support different options.

Because the effects may vary depending on the ODBC driver, use of this function in scripts to be made publicly available is strongly discouraged. Also, some ODBC options are not available to this function because they must be set before the connection is established or the query is prepared. However, if on a particular job it can make PHP work so your boss doesn't tell you to use a commercial product, that's all that really matters.

### Parameters

Is a connection id or result id on which to change the settings. For SQLSetConnectOption(), this is a connection id. For SQLSetStmtOption(), this is a result id.

Is the ODBC function to use. The value should be 1 for SQLSetConnectOption() and 2 for SQLSetStmtOption().

The option to set.

The value for the given option.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 odbc_setoption() examples

```
<?php
// 1. Option 102 of SQLSetConnectOption() is SQL_AUTOCOMMIT.
//    Value 1 of SQL_AUTOCOMMIT is SQL_AUTOCOMMIT_ON.
//    This example has the same effect as
//    odbc_autocommit($conn, true);

odbc_setoption($conn, 1, 102, 1);

// 2. Option 0 of SQLSetStmtOption() is SQL_QUERY_TIMEOUT.
//    This example sets the query to timeout after 30 seconds.

$result = odbc_prepare($conn, $sql);
odbc_setoption($result, 2, 0, 30);
odbc_execute($result);
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-setoption.php
