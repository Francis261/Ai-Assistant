# odbc_gettypeinfo

Source: https://devdocs.io/php/function.odbc-gettypeinfo

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_gettypeinfo — Retrieves information about data types supported by the data source

### Description

```
odbc_gettypeinfo(Odbc\Connection $odbc, int $data_type = 0): Odbc\Result|false
```

Retrieves information about data types supported by the data source.

### Parameters

The ODBC connection object, see odbc_connect() for details.

The data type, which can be used to restrict the information to a single data type.

### Return Values

Returns an ODBC result object or false on failure.

The result set has the following columns:

- TYPE_NAME
- DATA_TYPE
- PRECISION
- LITERAL_PREFIX
- LITERAL_SUFFIX
- CREATE_PARAMS
- NULLABLE
- CASE_SENSITIVE
- SEARCHABLE
- UNSIGNED_ATTRIBUTE
- MONEY
- AUTO_INCREMENT
- LOCAL_TYPE_NAME
- MINIMUM_SCALE
- MAXIMUM_SCALE

The result set is ordered by DATA_TYPE and TYPE_NAME.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-gettypeinfo.php
