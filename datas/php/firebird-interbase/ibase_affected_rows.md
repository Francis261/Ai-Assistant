# ibase_affected_rows

Source: https://devdocs.io/php/function.ibase-affected-rows

(PHP 5, PHP 7 < 7.4.0)

ibase_affected_rows — Return the number of rows that were affected by the previous query

### Description

```
ibase_affected_rows(resource $link_identifier = ?): int
```

This function returns the number of rows that were affected by the previous query (INSERT, UPDATE or DELETE) that was executed from within the specified transaction context.

### Parameters

A transaction context. If link_identifier is a connection resource, its default transaction is used.

### Return Values

Returns the number of rows as an integer.

### See Also

- ibase_query() - Execute a query on an InterBase database
- ibase_execute() - Execute a previously prepared query

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ibase-affected-rows.php
