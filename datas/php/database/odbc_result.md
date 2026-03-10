# odbc_result

Source: https://devdocs.io/php/function.odbc-result

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_result — Get result data

### Description

```
odbc_result(Odbc\Result $statement, string|int $field): string|bool|null
```

Get result data

### Parameters

The ODBC result object.

The field name being retrieved. It can either be an integer containing the column number of the field you want; or it can be a string containing the name of the field.

### Return Values

Returns the string contents of the field, false on error, null for NULL data, or true for binary data.

### Changelog

### Examples

The first call to odbc_result() returns the value of the third field in the current record of the query result. The second function call to odbc_result() returns the value of the field whose field name is "val" in the current record of the query result. An error occurs if a column number parameter for a field is less than one or exceeds the number of columns (or fields) in the current record. Similarly, an error occurs if a field with a name that is not one of the fieldnames of the table(s) that is(are) being queried.

Example #1 odbc_result() examples

```
<?php
$item_3   = odbc_result($Query_ID, 3);
$item_val = odbc_result($Query_ID, "val");
?>
```

### Notes

Field indices start from 1. Regarding the way binary or long column data is returned refer to odbc_binmode() and odbc_longreadlen().

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-result.php
