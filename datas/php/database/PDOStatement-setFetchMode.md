# PDOStatement::setFetchMode

Source: https://devdocs.io/php/pdostatement.setfetchmode

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 0.2.0)

PDOStatement::setFetchMode — Set the default fetch mode for this statement

### Description

```
public PDOStatement::setFetchMode(int $mode): bool
```

```
public PDOStatement::setFetchMode(int $mode = PDO::FETCH_COLUMN, int $colno): bool
```

```
public PDOStatement::setFetchMode(int $mode = PDO::FETCH_CLASS, string $class, ?array $constructorArgs = null): bool
```

```
public PDOStatement::setFetchMode(int $mode = PDO::FETCH_INTO, object $object): bool
```

### Parameters

The fetch mode must be one of the PDO::FETCH_* constants.

Column number.

Class name.

Constructor arguments.

Object.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Setting the fetch mode

The following example demonstrates how PDOStatement::setFetchMode() changes the default fetch mode for a PDOStatement object.

```
<?php
$stmt = $dbh->query('SELECT name, colour, calories FROM fruit');
$stmt->setFetchMode(PDO::FETCH_NUM);
foreach ($stmt as $row) {
    print $row[0] . "\t" . $row[1] . "\t" . $row[2] . "\n";
}
```

The above example will output something similar to:

```
apple   red     150
banana  yellow  250
orange  orange  300
kiwi    brown   75
lemon   yellow  25
pear    green   150
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pdostatement.setfetchmode.php
