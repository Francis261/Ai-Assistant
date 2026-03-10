# mysqli::more_results

Source: https://devdocs.io/php/mysqli.more-results

# mysqli_more_results

(PHP 5, PHP 7, PHP 8)

mysqli::more_results -- mysqli_more_results — Check if there are any more query results from a multi query

### Description

Object-oriented style

```
public mysqli::more_results(): bool
```

Procedural style

```
mysqli_more_results(mysqli $mysql): bool
```

Indicates if one or more result sets are available from a previous call to mysqli_multi_query().

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

### Return Values

Returns true if one or more result sets (including errors) are available from a previous call to mysqli_multi_query(), otherwise false.

### Examples

See mysqli_multi_query().

### See Also

- mysqli_multi_query() - Performs one or more queries on the database
- mysqli_next_result() - Prepare next result from multi_query
- mysqli_store_result() - Transfers a result set from the last query
- mysqli_use_result() - Initiate a result set retrieval

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.more-results.php
