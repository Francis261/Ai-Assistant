# odbc_free_result

Source: https://devdocs.io/php/function.odbc-free-result

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_free_result — Free objects associated with a result

### Description

```
odbc_free_result(Odbc\Result $statement): true
```

Free objects associated with a result.

odbc_free_result() only needs to be called if you are worried about using too much memory while your script is running. All result memory will automatically be freed when the script is finished.

### Parameters

The ODBC result object.

### Return Values

Always returns true.

### Changelog

### Notes

Note:

If auto-commit is disabled (see odbc_autocommit()) and you call odbc_free_result() before committing, all pending transactions are rolled back.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-free-result.php
