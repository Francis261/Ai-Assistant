# odbc_connection_string_is_quoted

Source: https://devdocs.io/php/function.odbc-connection-string-is-quoted

(PHP 8 >= 8.2.0)

odbc_connection_string_is_quoted — Determines if an ODBC connection string value is quoted

### Description

```
odbc_connection_string_is_quoted(string $str): bool
```

Determines if a string is properly quoted for an ODBC connection string value. ODBC connection string quoting is performed using curly braces, and ending braces within a string must be escaped through repeating them twice, similar to SQL quoting.

### Parameters

The string to check for quoting.

### Return Values

true if quoted properly, false if not.

### See Also

- odbc_connection_string_quote() - Quotes an ODBC connection string value
- odbc_connection_string_should_quote() - Determines if an ODBC connection string value should be quoted

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-connection-string-is-quoted.php
