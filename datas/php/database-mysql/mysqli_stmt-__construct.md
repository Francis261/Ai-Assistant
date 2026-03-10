# mysqli_stmt::__construct

Source: https://devdocs.io/php/mysqli-stmt.construct

(PHP 5, PHP 7, PHP 8)

mysqli_stmt::__construct — Constructs a new mysqli_stmt object

### Description

This method constructs a new mysqli_stmt object.

### Parameters

A valid mysqli object.

The query, as a string. If this parameter is null, then the constructor behaves identically to mysqli_stmt_init(), otherwise it behaves as per mysqli_prepare().

### Errors/Exceptions

If mysqli error reporting is enabled (MYSQLI_REPORT_ERROR) and the requested operation fails, a warning is generated. If, in addition, the mode is set to MYSQLI_REPORT_STRICT, a mysqli_sql_exception is thrown instead.

### Changelog

### See Also

- mysqli_prepare() - Prepares an SQL statement for execution
- mysqli_stmt_init() - Initializes a statement and returns an object for use with mysqli_stmt_prepare

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-stmt.construct.php
