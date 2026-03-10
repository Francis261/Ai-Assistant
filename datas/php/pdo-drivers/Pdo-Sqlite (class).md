# The Pdo\Sqlite class

Source: https://devdocs.io/php/class.pdo-sqlite

## Introduction

(PHP 8 >= 8.4.0)

A PDO subclass representing a connection using the SQLite PDO driver.

This driver supports a dedicated SQL query parser for the SQLite dialect. It can handle the following:

- Single, double-quoted, and backtick literals, with doubling as escaping mechanism.
- Square brackets quoting for identifiers.
- Two-dashes and C-style comments (non-nested).

## Class synopsis

```
public createAggregate(
 string $name,
 callable $step,
 callable $finalize,
 int $numArgs = -1
): bool
```

```
public createCollation(string $name, callable $callback): bool
```

```
public createFunction(
 string $function_name,
 callable $callback,
 int $num_args = -1,
 int $flags = 0
): bool
```

```
public loadExtension(string $name): void
```

```
public openBlob(
 string $table,
 string $column,
 int $rowid,
 ?string $dbname = "main",
 int $flags = Pdo\Sqlite::OPEN_READONLY
): resource|false
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

## Table of Contents

- Pdo\Sqlite::createAggregate — Registers an aggregating user-defined function for use in SQL statements
- Pdo\Sqlite::createCollation — Registers a user-defined function for use as a collating function in SQL statements
- Pdo\Sqlite::createFunction — Registers a user-defined function for use in SQL statements
- Pdo\Sqlite::loadExtension — Description
- Pdo\Sqlite::openBlob — Description

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.pdo-sqlite.php
