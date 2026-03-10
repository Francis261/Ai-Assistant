# Pdo\Pgsql::copyFromArray

Source: https://devdocs.io/php/pdo-pgsql.copyfromarray

(PHP 8 >= 8.4.0)

Pdo\Pgsql::copyFromArray — Copy data from a PHP array into a table

### Description

```
public Pdo\Pgsql::copyFromArray(
 string $tableName,
 array $rows,
 string $separator = "\t",
 string $nullAs = "\\\\N",
 ?string $fields = null
): bool
```

Copies data from rows array to table tableName using separator as fields delimiter and fields list.

### Parameters

### Return Values

Returns true on success or false on failure.

### See Also

- Pdo\Pgsql::copyToArray() - Copy data from database table into PHP array
- Pdo\Pgsql::copyFromFile() - Copy data from file into table
- Pdo\Pgsql::copyToFile() - Copy data from table into file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdo-pgsql.copyfromarray.php
