# ibase_name_result

Source: https://devdocs.io/php/function.ibase-name-result

(PHP 5, PHP 7 < 7.4.0)

ibase_name_result — Assigns a name to a result set

### Description

```
ibase_name_result(resource $result, string $name): bool
```

This function assigns a name to a result set. This name can be used later in UPDATE|DELETE ... WHERE CURRENT OF name statements.

### Parameters

An InterBase result set.

The name to be assigned.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 ibase_name_result() example

```
<?php
$result = ibase_query("SELECT field1,field2 FROM table FOR UPDATE");
ibase_name_result($result, "my_cursor");

$updateqry = ibase_prepare("UPDATE table SET field2 = ? WHERE CURRENT OF my_cursor");

for ($i = 0; ibase_fetch_row($result); ++$i) {
    ibase_execute($updateqry, $i);
}
?>
```

### See Also

- ibase_prepare() - Prepare a query for later binding of parameter placeholders and execution
- ibase_execute() - Execute a previously prepared query

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ibase-name-result.php
