# The Pdo\Mysql class

Source: https://devdocs.io/php/class.pdo-mysql

## Introduction

(PHP 8 >= 8.4.0)

A PDO subclass representing a connection using the MySQL PDO driver.

This driver supports a dedicated SQL query parser for the MySQL dialect. It can handle the following:

- Single and double-quoted literals with both doubling and backslash as escaping mechanisms
- Backtick literals with doubling as escaping mechanism
- Two-dashes, C-style comments, and Hash-comments.

## Class synopsis

```
public getWarningCount(): int
```

```
public PDO::beginTransaction(): bool
```

```
public PDO::commit(): bool
```

```
public static PDO::connect(
 string $dsn,
 ?string $username = null,
 #[\SensitiveParameter] ?string $password = null,
 ?array $options = null
): static
```

```
public PDO::errorCode(): ?string
```

```
public PDO::errorInfo(): array
```

```
public PDO::exec(string $statement): int|false
```

```
public PDO::getAttribute(int $attribute): mixed
```

```
public static PDO::getAvailableDrivers(): array
```

```
public PDO::inTransaction(): bool
```

```
public PDO::lastInsertId(?string $name = null): string|false
```

```
public PDO::prepare(string $query, array $options = []): PDOStatement|false
```

```
public PDO::query(string $query, ?int $fetchMode = null): PDOStatement|false
```

```
public PDO::query(string $query, ?int $fetchMode = PDO::FETCH_COLUMN, int $colno): PDOStatement|false
```

```
public PDO::query(
 string $query,
 ?int $fetchMode = PDO::FETCH_CLASS,
 string $classname,
 array $constructorArgs
): PDOStatement|false
```

```
public PDO::query(string $query, ?int $fetchMode = PDO::FETCH_INTO, object $object): PDOStatement|false
```

```
public PDO::quote(string $string, int $type = PDO::PARAM_STR): string|false
```

```
public PDO::rollBack(): bool
```

```
public PDO::setAttribute(int $attribute, mixed $value): bool
```

## Predefined Constants

Example #1 Setting MySQL unbuffered mode

```
<?php
$pdo = new Pdo\Mysql("mysql:host=localhost;dbname=world", 'my_user', 'my_password');
$pdo->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, false);

$unbufferedResult = $pdo->query("SELECT Name FROM City");
foreach ($unbufferedResult as $row) {
    echo $row['Name'] . PHP_EOL;
}
?>
```

Note: Can only be used in the driver_options array when constructing a new database handle.

Note: Can only be used in the driver_options array when constructing a new database handle.

Note: Can only be used in the driver_options array when constructing a new database handle.

Note: This option is not available if mysqlnd is used, because mysqlnd does not read the mysql configuration files.

Note: This option is not available if mysqlnd is used, because mysqlnd does not read the mysql configuration files.

Note: Can only be used in the driver_options array when constructing a new database handle.

Note: Can only be used in the driver_options array when constructing a new database handle.

Note: This constant is not supported when compiled against mysqlnd.

Note: Can only be used in the driver_options array when constructing a new database handle.

Note: Can only be used in the driver_options array when constructing a new database handle.

Note: Can only be used in the driver_options array when constructing a new database handle.

Note: Can only be used in the driver_options array when constructing a new database handle.

Note: Can only be used in the driver_options array when constructing a new database handle.

Note: Can only be used in the driver_options array when constructing a new database handle.

Note: Can only be used in the driver_options array when constructing a new database handle.

Note: This option is available only with mysqlnd.

Note: Can only be used in the driver_options array when constructing a new database handle.

## Table of Contents

- Pdo\Mysql::getWarningCount — Returns the number of warnings from the last executed query

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.pdo-mysql.php
