# odbc_connection_string_should_quote

Source: https://devdocs.io/php/function.odbc-connection-string-should-quote

(PHP 8 >= 8.2.0)

odbc_connection_string_should_quote — Determines if an ODBC connection string value should be quoted

### Description

```
odbc_connection_string_should_quote(string $str): bool
```

Determines if a string needs to be quoted for an ODBC connection string value; that is, if it contains special characters.

Note that this does not check if the string is already quoted; an already quoted string will contain characters that will make this function return true. You should call odbc_connection_string_is_quoted() to check.

### Parameters

The string to check for.

### Return Values

true if the string should be quoted; false otherwise.

### See Also

- odbc_connection_string_quote() - Quotes an ODBC connection string value
- odbc_connection_string_is_quoted() - Determines if an ODBC connection string value is quoted

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-connection-string-should-quote.php
