# odbc_longreadlen

Source: https://devdocs.io/php/function.odbc-longreadlen

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_longreadlen — Handling of LONG columns

### Description

```
odbc_longreadlen(Odbc\Result $statement, int $length): true
```

Controls handling of LONG, LONGVARCHAR and LONGVARBINARY columns. The default length can be set using the uodbc.defaultlrl php.ini directive.

### Parameters

The ODBC result object.

The number of bytes returned to PHP is controlled by the parameter length. If it is set to 0, long column data is passed through to the client (i.e. printed) when retrieved with odbc_result().

### Return Values

Always returns true.

### Changelog

### Notes

Note:

Handling of LONGVARBINARY columns is also affected by odbc_binmode().

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-longreadlen.php
