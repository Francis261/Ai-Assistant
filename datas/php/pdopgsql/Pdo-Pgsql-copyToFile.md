# Pdo\Pgsql::copyToFile

Source: https://devdocs.io/php/pdo-pgsql.copytofile

(PHP 8 >= 8.4.0)

Pdo\Pgsql::copyToFile — Copy data from table into file

### Description

```
public Pdo\Pgsql::copyToFile(
 string $tableName,
 string $filename,
 string $separator = "\t",
 string $nullAs = "\\\\N",
 ?string $fields = null
): bool
```

Copies data from table into file specified by filename using separator as fields delimiter and fields list.

### Parameters

### Return Values

Returns true on success or false on failure.

### See Also

- Pdo\Pgsql::copyFromFile() - Copy data from file into table
- Pdo\Pgsql::copyFromArray() - Copy data from a PHP array into a table
- Pdo\Pgsql::copyToArray() - Copy data from database table into PHP array

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdo-pgsql.copytofile.php
