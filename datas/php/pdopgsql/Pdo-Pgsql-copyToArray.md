# Pdo\Pgsql::copyToArray

Source: https://devdocs.io/php/pdo-pgsql.copytoarray

(PHP 8 >= 8.4.0)

Pdo\Pgsql::copyToArray — Copy data from database table into PHP array

### Description

```
public Pdo\Pgsql::copyToArray(
 string $tableName,
 string $separator = "\t",
 string $nullAs = "\\\\N",
 ?string $fields = null
): array|false
```

Copies data from tableName into array using separator as fields delimiter and fields list

### Parameters

### Return Values

Returns an array of rows, or false on failure.

### See Also

- Pdo\Pgsql::copyFromArray() - Copy data from a PHP array into a table
- Pdo\Pgsql::copyFromFile() - Copy data from file into table
- Pdo\Pgsql::copyToFile() - Copy data from table into file

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdo-pgsql.copytoarray.php
