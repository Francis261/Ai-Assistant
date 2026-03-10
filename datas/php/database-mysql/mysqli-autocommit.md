# mysqli::autocommit

Source: https://devdocs.io/php/mysqli.autocommit

# mysqli_autocommit

(PHP 5, PHP 7, PHP 8)

mysqli::autocommit -- mysqli_autocommit — Turns on or off auto-committing database modifications

### Description

Object-oriented style

```
public mysqli::autocommit(bool $enable): bool
```

Procedural style

```
mysqli_autocommit(mysqli $mysql, bool $enable): bool
```

Turns on or off auto-commit mode on queries for the database connection.

To determine the current state of autocommit use the SQL command SELECT @@autocommit.

### Parameters

Procedural style only: A mysqli object returned by mysqli_connect() or mysqli_init()

Whether to turn on auto-commit or not.

### Return Values

Returns true on success or false on failure.

### Errors/Exceptions

If mysqli error reporting is enabled (MYSQLI_REPORT_ERROR) and the requested operation fails, a warning is generated. If, in addition, the mode is set to MYSQLI_REPORT_STRICT, a mysqli_sql_exception is thrown instead.

### Examples

Example #1 mysqli::autocommit() example

Object-oriented style

```
<?php

/* Tell mysqli to throw an exception if an error occurs */
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$mysqli = new mysqli("localhost", "my_user", "my_password", "world");

/* The table engine has to support transactions */
$mysqli->query("CREATE TABLE IF NOT EXISTS language (
    Code text NOT NULL,
    Speakers int(11) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;");

/* Turn autocommit off */
$mysqli->autocommit(false);

$result = $mysqli->query("SELECT @@autocommit");
$row = $result->fetch_row();
printf("Autocommit is %s\n", $row[0]);

try {
    /* Prepare insert statement */
    $stmt = $mysqli->prepare('INSERT INTO language(Code, Speakers) VALUES (?,?)');
    $stmt->bind_param('ss', $language_code, $native_speakers);

    /* Insert some values */
    $language_code = 'DE';
    $native_speakers = 50_123_456;
    $stmt->execute();
    $language_code = 'FR';
    $native_speakers = 40_546_321;
    $stmt->execute();

    /* Commit the data in the database. This doesn't set autocommit=true */
    $mysqli->commit();
    print "Committed 2 rows in the database\n";

    $result = $mysqli->query("SELECT @@autocommit");
    $row = $result->fetch_row();
    printf("Autocommit is %s\n", $row[0]);

    /* Try to insert more values */
    $language_code = 'PL';
    $native_speakers = 30_555_444;
    $stmt->execute();
    $language_code = 'DK';
    $native_speakers = 5_222_444;
    $stmt->execute();

    /* Setting autocommit=true will trigger a commit */
    $mysqli->autocommit(true);

    print "Committed 2 row in the database\n";
} catch (mysqli_sql_exception $exception) {
    $mysqli->rollback();

    throw $exception;
}
```

Procedural style

```
<?php

/* Tell mysqli to throw an exception if an error occurs */
mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

$mysqli = mysqli_connect("localhost", "my_user", "my_password", "world");

/* The table engine has to support transactions */
mysqli_query($mysqli, "CREATE TABLE IF NOT EXISTS language (
    Code text NOT NULL,
    Speakers int(11) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;");

/* Turn autocommit off */
mysqli_autocommit($mysqli, false);

$result = mysqli_query($mysqli, "SELECT @@autocommit");
$row = mysqli_fetch_row($result);
printf("Autocommit is %s\n", $row[0]);

try {
    /* Prepare insert statement */
    $stmt = mysqli_prepare($mysqli, 'INSERT INTO language(Code, Speakers) VALUES (?,?)');
    mysqli_stmt_bind_param($stmt, 'ss', $language_code, $native_speakers);

    /* Insert some values */
    $language_code = 'DE';
    $native_speakers = 50_123_456;
    mysqli_stmt_execute($stmt);
    $language_code = 'FR';
    $native_speakers = 40_546_321;
    mysqli_stmt_execute($stmt);

    /* Commit the data in the database. This doesn't set autocommit=true */
    mysqli_commit($mysqli);
    print "Committed 2 rows in the database\n";

    $result = mysqli_query($mysqli, "SELECT @@autocommit");
    $row = mysqli_fetch_row($result);
    printf("Autocommit is %s\n", $row[0]);

    /* Try to insert more values */
    $language_code = 'PL';
    $native_speakers = 30_555_444;
    mysqli_stmt_execute($stmt);
    $language_code = 'DK';
    $native_speakers = 5_222_444;
    mysqli_stmt_execute($stmt);

    /* Setting autocommit=true will trigger a commit */
    mysqli_autocommit($mysqli, true);

    print "Committed 2 row in the database\n";
} catch (mysqli_sql_exception $exception) {
    mysqli_rollback($mysqli);

    throw $exception;
}
```

The above examples will output:

```
Autocommit is 0
Committed 2 rows in the database
Autocommit is 0
Committed 2 row in the database
Autocommit is 0
Committed 2 rows in the database
Autocommit is 0
Committed 2 row in the database
```

### Notes

Note:

This function does not work with non transactional table types (like MyISAM or ISAM).

### See Also

- mysqli_begin_transaction() - Starts a transaction
- mysqli_commit() - Commits the current transaction
- mysqli_rollback() - Rolls back current transaction

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/mysqli.autocommit.php
