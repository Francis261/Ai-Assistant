# odbc_binmode

Source: https://devdocs.io/php/function.odbc-binmode

(PHP 4, PHP 5, PHP 7, PHP 8)

odbc_binmode — Handling of binary column data

### Description

```
odbc_binmode(Odbc\Result $statement, int $mode): true
```

Controls handling of binary column data. ODBC SQL types affected are BINARY, VARBINARY, and LONGVARBINARY. The default mode can be set using the uodbc.defaultbinmode php.ini directive.

When binary SQL data is converted to character C data (ODBC_BINMODE_CONVERT), each byte (8 bits) of source data is represented as two ASCII characters. These characters are the ASCII character representation of the number in its hexadecimal form. For example, a binary 00000001 is converted to "01" and a binary 11111111 is converted to "FF".

While the handling of BINARY and VARBINARY columns only depend on the binmode, the handling of LONGVARBINARY columns also depends on the longreadlen as well:

If odbc_fetch_into() is used, passthru means that an empty string is returned for these columns. If odbc_result() is used, passthru means that the data are sent directly to the client (i.e. printed).

### Parameters

The ODBC result object.

Possible values for mode are:

- ODBC_BINMODE_PASSTHRU: Passthru BINARY data
- ODBC_BINMODE_RETURN: Return as is
- ODBC_BINMODE_CONVERT: Convert to char and return

Note: Handling of binary long columns is also affected by odbc_longreadlen().

### Return Values

Always returns true.

### Changelog

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.odbc-binmode.php
