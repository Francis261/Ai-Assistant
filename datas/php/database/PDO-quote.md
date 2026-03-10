# PDO::quote

Source: https://devdocs.io/php/pdo.quote

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 0.2.1)

PDO::quote — Quotes a string for use in a query

### Description

```
public PDO::quote(string $string, int $type = PDO::PARAM_STR): string|false
```

PDO::quote() places quotes around the input string (if required) and escapes special characters within the input string, using a quoting style appropriate to the underlying driver.

If you are using this function to build SQL statements, you are strongly recommended to use PDO::prepare() to prepare SQL statements with bound parameters instead of using PDO::quote() to interpolate user input into an SQL statement. Prepared statements with bound parameters are not only more portable, more convenient, immune to SQL injection, but are often much faster to execute than interpolated queries, as both the server and client side can cache a compiled form of the query.

Not all PDO drivers implement this method (notably PDO_ODBC). Consider using prepared statements instead.

# Security: the default character set

The character set must be set either on the server level, or within the database connection itself (depending on the driver) for it to affect PDO::quote(). See the driver-specific documentation for more information.

### Parameters

The string to be quoted.

Provides a hint to the type of data for drivers that have alternate quoting styles. For example PDO_PARAM_LOB will tell the driver to escape binary data.

### Return Values

Returns a quoted string that is theoretically safe to pass into an SQL statement. Returns false if the driver does not support quoting in this way.

### Examples

Example #1 Quoting a normal string

```
<?php
$conn = new PDO('sqlite:/home/lynn/music.sql3');

/* Simple string */
$string = 'Nice';
print "Unquoted string: $string\n";
print "Quoted string: " . $conn->quote($string) . "\n";
?>
```

The above example will output:

```
Unquoted string: Nice
Quoted string: 'Nice'
```

Example #2 Quoting a dangerous string

```
<?php
$conn = new PDO('sqlite:/home/lynn/music.sql3');

/* Dangerous string */
$string = 'Naughty \' string';
print "Unquoted string: $string\n";
print "Quoted string:" . $conn->quote($string) . "\n";
?>
```

The above example will output:

```
Unquoted string: Naughty ' string
Quoted string: 'Naughty '' string'
```

Example #3 Quoting a complex string

```
<?php
$conn = new PDO('sqlite:/home/lynn/music.sql3');

/* Complex string */
$string = "Co'mpl''ex \"st'\"ring";
print "Unquoted string: $string\n";
print "Quoted string: " . $conn->quote($string) . "\n";
?>
```

The above example will output:

```
Unquoted string: Co'mpl''ex "st'"ring
Quoted string: 'Co''mpl''''ex "st''"ring'
```

### See Also

- PDO::prepare() - Prepares a statement for execution and returns a statement object
- PDOStatement::execute() - Executes a prepared statement

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdo.quote.php
