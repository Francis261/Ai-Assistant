# PDO::prepare

Source: https://devdocs.io/php/pdo.prepare

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PHP 8,PECL pdo >= 0.1.0)

PDO::prepare — Prepares a statement for execution and returns a statement object

### Description

```
public PDO::prepare(string $query, array $options = []): PDOStatement|false
```

Prepares an SQL statement to be executed by the PDOStatement::execute() method. The statement template can contain zero or more named (:name) or question mark (?) parameter markers for which real values will be substituted when the statement is executed. Both named and question mark parameter markers cannot be used within the same statement template; only one or the other parameter style. Use these parameters to bind any user-input, do not include the user-input directly in the query.

You must include a unique parameter marker for each value you wish to pass in to the statement when you call PDOStatement::execute(). You cannot use a named parameter marker of the same name more than once in a prepared statement, unless emulation mode is on.

Note:

Parameter markers can represent a complete data literal only. Neither part of literal, nor keyword, nor identifier, nor whatever arbitrary query part can be bound using parameters. For example, you cannot bind multiple values to a single parameter in the IN() clause of an SQL statement.

Calling PDO::prepare() and PDOStatement::execute() for statements that will be issued multiple times with different parameter values optimizes the performance of your application by allowing the driver to negotiate client and/or server side caching of the query plan and meta information. Also, calling PDO::prepare() and PDOStatement::execute() helps to prevent SQL injection attacks by eliminating the need to manually quote and escape the parameters.

PDO will emulate prepared statements/bound parameters for drivers that do not natively support them, and can also rewrite named or question mark style parameter markers to something more appropriate, if the driver supports one style but not the other.

Note: The parser used for emulated prepared statements and for rewriting named or question mark style parameters supports the non standard backslash escapes for single- and double quotes. That means that terminating quotes immediately preceeded by a backslash are not recognized as such, which may result in wrong detection of parameters causing the prepared statement to fail when it is executed. A work-around is to not use emulated prepares for such SQL queries, and to avoid rewriting of parameters by using a parameter style which is natively supported by the driver.

As of PHP 7.4.0, question marks can be escaped by doubling them. That means that the ?? string will be translated to ? when sending the query to the database.

### Parameters

This must be a valid SQL statement template for the target database server.

This array holds one or more key=>value pairs to set attribute values for the PDOStatement object that this method returns. You would most commonly use this to set the PDO::ATTR_CURSOR value to PDO::CURSOR_SCROLL to request a scrollable cursor. Some drivers have driver-specific options that may be set at prepare-time.

### Return Values

If the database server successfully prepares the statement, PDO::prepare() returns a PDOStatement object. If the database server cannot successfully prepare the statement, PDO::prepare() returns false or emits PDOException (depending on error handling).

Note:

Emulated prepared statements does not communicate with the database server so PDO::prepare() does not check the statement.

### Errors/Exceptions

Emits an error with level E_WARNING if the attribute PDO::ATTR_ERRMODE is set to PDO::ERRMODE_WARNING.

Throws a PDOException if the attribute PDO::ATTR_ERRMODE is set to PDO::ERRMODE_EXCEPTION.

### Examples

Example #1 SQL statement template with named parameters

```
<?php
/* Execute a prepared statement by passing an array of values */
$sql = 'SELECT name, colour, calories
    FROM fruit
    WHERE calories < :calories AND colour = :colour';
$sth = $dbh->prepare($sql, [PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY]);
$sth->execute(['calories' => 150, 'colour' => 'red']);
$red = $sth->fetchAll();
/* Array keys can be prefixed with colons ":" too (optional) */
$sth->execute([':calories' => 175, ':colour' => 'yellow']);
$yellow = $sth->fetchAll();
?>
```

Example #2 SQL statement template with question mark parameters

```
<?php
/* Execute a prepared statement by passing an array of values */
$sth = $dbh->prepare('SELECT name, colour, calories
    FROM fruit
    WHERE calories < ? AND colour = ?');
$sth->execute([150, 'red']);
$red = $sth->fetchAll();
$sth->execute([175, 'yellow']);
$yellow = $sth->fetchAll();
?>
```

Example #3 SQL statement template with question mark escaped

```
<?php
/* note: this is only valid on PostgreSQL databases */
$sth = $dbh->prepare('SELECT * FROM issues WHERE tag::jsonb ?? ?');
$sth->execute(['feature']);
$featureIssues = $sth->fetchAll();
$sth->execute(['performance']);
$performanceIssues = $sth->fetchAll();
?>
```

### See Also

- PDO::exec() - Execute an SQL statement and return the number of affected rows
- PDO::query() - Prepares and executes an SQL statement without placeholders
- PDOStatement::execute() - Executes a prepared statement

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdo.prepare.php
