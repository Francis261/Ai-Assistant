# mysqli_sql_exception::getSqlState

Source: https://devdocs.io/php/mysqli-sql-exception.getsqlstate

(PHP 8 >= 8.1.2)

mysqli_sql_exception::getSqlState — Returns the SQLSTATE error code

### Description

```
public mysqli_sql_exception::getSqlState(): string
```

Returns a string containing the SQLSTATE error code for the last error. The error code consists of five characters. The values are specified by ANSI SQL and ODBC. For a list of possible values, see » http://dev.mysql.com/doc/mysql/en/error-handling.html.

Note:

Note that not all MySQL errors are yet mapped to SQLSTATE's. The value HY000 (general error) is used for unmapped errors.

### Parameters

This function has no parameters.

### Return Values

Returns a string containing the SQLSTATE error code for the last error. The error code consists of five characters.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli-sql-exception.getsqlstate.php
