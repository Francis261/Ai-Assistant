# SQLite3::changes

Source: https://devdocs.io/php/sqlite3.changes

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SQLite3::changes — Returns the number of database rows that were changed (or inserted or deleted) by the most recent SQL statement

### Description

```
public SQLite3::changes(): int
```

Returns the number of database rows that were changed (or inserted or deleted) by the most recent SQL statement.

### Parameters

This function has no parameters.

### Return Values

Returns an int value corresponding to the number of database rows changed (or inserted or deleted) by the most recent SQL statement.

### Examples

Example #1 SQLite3::changes() example

```
<?php
$db = new SQLite3('mysqlitedb.db');

$query = $db->exec('UPDATE counter SET views=0 WHERE page="test"');
if ($query) {
    echo 'Number of rows modified: ', $db->changes();
}
?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sqlite3.changes.php
