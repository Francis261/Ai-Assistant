# ibase_execute

Source: https://devdocs.io/php/function.ibase-execute

(PHP 5, PHP 7 < 7.4.0)

ibase_execute — Execute a previously prepared query

### Description

```
ibase_execute(resource $query, mixed ...$values): resource
```

Execute a query prepared by ibase_prepare().

This is a lot more effective than using ibase_query() if you are repeating a same kind of query several times with only some parameters changing.

### Parameters

An InterBase query prepared by ibase_prepare().

### Return Values

If the query raises an error, returns false. If it is successful and there is a (possibly empty) result set (such as with a SELECT query), returns a result identifier. If the query was successful and there were no results, returns true.

Note:

This function returns the number of rows affected by the query (if > 0 and applicable to the statement type). A query that succeeded, but did not affect any rows (e.g. an UPDATE of a non-existent record) will return true.

### Examples

Example #1 ibase_execute() example

```
<?php

$dbh = ibase_connect($host, $username, $password);

$updates = array(
    1 => 'Eric',
    5 => 'Filip',
    7 => 'Larry'
);

$query = ibase_prepare($dbh, "UPDATE FOO SET BAR = ? WHERE BAZ = ?");

foreach ($updates as $baz => $bar) {
    ibase_execute($query, $bar, $baz);
}

?>
```

### See Also

- ibase_query() - Execute a query on an InterBase database

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ibase-execute.php
