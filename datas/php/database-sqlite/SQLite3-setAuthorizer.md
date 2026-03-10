# SQLite3::setAuthorizer

Source: https://devdocs.io/php/sqlite3.setauthorizer

(PHP 8)

SQLite3::setAuthorizer — Configures a callback to be used as an authorizer to limit what a statement can do

### Description

```
public SQLite3::setAuthorizer(?callable $callback): bool
```

Sets a callback that will be called by SQLite every time an action is performed (reading, deleting, updating, etc.). This is used when preparing a SQL statement from an untrusted source to ensure that the SQL statements do not try to access data they are not allowed to see, or that they do not try to execute malicious statements that damage the database. For example, an application may allow a user to enter arbitrary SQL queries for evaluation by a database. But the application does not want the user to be able to make arbitrary changes to the database. An authorizer could then be put in place while the user-entered SQL is being prepared that disallows everything except SELECT statements.

The authorizer callback may be called multiple times for each statement prepared by SQLite. A SELECT or UPDATE query will call the authorizer for every column that would be read or updated.

The authorizer is called with up to five parameters. The first parameter is always given, and is an int (action code) matching a constant from SQLite3. The other parameters are only passed for some actions. The following table describes the second and third parameters according to the action:

The 4th parameter will be the name of the database ("main", "temp", etc.) if applicable.

The 5th parameter to the authorizer callback is the name of the inner-most trigger or view that is responsible for the access attempt or null if this access attempt is directly from top-level SQL code.

When the callback returns SQLite3::OK, that means the operation requested is accepted. When the callback returns SQLite3::DENY, the call that triggered the authorizer will fail with an error message explaining that access is denied.

If the action code is SQLite3::READ and the callback returns SQLite3::IGNORE then the prepared statement is constructed to substitute a null value in place of the table column that would have been read if SQLite3::OK had been returned. The SQLite3::IGNORE return can be used to deny an untrusted user access to individual columns of a table.

When a table is referenced by a SELECT but no column values are extracted from that table (for example in a query like "SELECT count(*) FROM
 table") then the SQLite3::READ authorizer callback is invoked once for that table with a column name that is an empty string.

If the action code is SQLite3::DELETE and the callback returns SQLite3::IGNORE then the DELETE operation proceeds but the truncate optimization is disabled and all rows are deleted individually.

Only a single authorizer can be in place on a database connection at a time. Each call to SQLite3::setAuthorizer() overrides the previous call. Disable the authorizer by installing a null callback. The authorizer is disabled by default.

The authorizer callback must not do anything that will modify the database connection that invoked the authorizer callback.

Note that the authorizer is only called when a statement is prepared, not when it's executed.

More details can be found in the » SQLite3 documentation.

### Parameters

The callable to be called.

If null is passed instead, this will disable the current authorizer callback.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

This method doesn't throw any error, but if an authorizer is enabled and returns an invalid value, the statement preparation will throw an error (or exception, depending on the use of the SQLite3::enableExceptions() method).

### Examples

Example #1 SQLite3::setAuthorizer() example

This only allows access to reading, and only some columns of the users table will be returned. Other columns will be replaced with null.

```
<?php
$db = new SQLite3('data.sqlite');
$db->exec('CREATE TABLE users (id, name, password);');
$db->exec('INSERT INTO users VALUES (1, \'Pauline\', \'Snails4eva\');');

$allowed_columns = ['id', 'name'];

$db->setAuthorizer(function (int $action, ...$args) use ($allowed_columns) {
    if ($action === SQLite3::READ) {
        list($table, $column) = $args;

        if ($table === 'users' && in_array($column, $allowed_columns)) {
            return SQLite3::OK;
        }

        return SQLite3::IGNORE;
    }

    return SQLite3::DENY;
});

print_r($db->querySingle('SELECT * FROM users WHERE id = 1;'));
```

The above example will output:

```
Array
(
    [id] => 1
    [name] => Pauline
    [password] =>
)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/sqlite3.setauthorizer.php
