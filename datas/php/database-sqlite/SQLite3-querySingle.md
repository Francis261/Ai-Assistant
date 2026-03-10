# SQLite3::querySingle

Source: https://devdocs.io/php/sqlite3.querysingle

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

SQLite3::querySingle — Executes a query and returns a single result

### Description

```
public SQLite3::querySingle(string $query, bool $entireRow = false): mixed
```

Executes a query and returns a single result.

### Parameters

The SQL query to execute.

By default, querySingle() returns the value of the first column returned by the query. If entireRow is true, then it returns an array of the entire first row.

### Return Values

Returns the value of the first column of results or an array of the entire first row (if entireRow is true).

If the query is valid but no results are returned, then null will be returned if entireRow is false, otherwise an empty array is returned.

Invalid or failing queries will return false.

### Examples

Example #1 SQLite3::querySingle() example

```
<?php
$db = new SQLite3('mysqlitedb.db');

var_dump($db->querySingle('SELECT username FROM user WHERE userid=1'));
print_r($db->querySingle('SELECT username, email FROM user WHERE userid=1', true));
?>
```

The above example will output something similar to:

```
string(5) "Scott"
Array
(
    [username] => Scott
    [email] => scott@example.com
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sqlite3.querysingle.php
