# The PDO class

Source: https://devdocs.io/php/class.pdo

## Introduction

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 0.1.0)

Represents a connection between PHP and a database server.

## Class synopsis

```
public beginTransaction(): bool
```

```
public commit(): bool
```

```
public static connect(
 string $dsn,
 ?string $username = null,
 #[\SensitiveParameter] ?string $password = null,
 ?array $options = null
): static
```

```
public errorCode(): ?string
```

```
public errorInfo(): array
```

```
public exec(string $statement): int|false
```

```
public getAttribute(int $attribute): mixed
```

```
public static getAvailableDrivers(): array
```

```
public inTransaction(): bool
```

```
public lastInsertId(?string $name = null): string|false
```

```
public prepare(string $query, array $options = []): PDOStatement|false
```

```
public query(string $query, ?int $fetchMode = null): PDOStatement|false
```

```
public query(string $query, ?int $fetchMode = PDO::FETCH_COLUMN, int $colno): PDOStatement|false
```

```
public query(
 string $query,
 ?int $fetchMode = PDO::FETCH_CLASS,
 string $classname,
 array $constructorArgs
): PDOStatement|false
```

```
public query(string $query, ?int $fetchMode = PDO::FETCH_INTO, object $object): PDOStatement|false
```

```
public quote(string $string, int $type = PDO::PARAM_STR): string|false
```

```
public rollBack(): bool
```

```
public setAttribute(int $attribute, mixed $value): bool
```

## Changelog

## Table of Contents

- PDO::beginTransaction — Initiates a transaction
- PDO::commit — Commits a transaction
- PDO::connect — Connect to a database and return a PDO subclass for drivers that support it
- PDO::__construct — Creates a PDO instance representing a connection to a database
- PDO::errorCode — Fetch the SQLSTATE associated with the last operation on the database handle
- PDO::errorInfo — Fetch extended error information associated with the last operation on the database handle
- PDO::exec — Execute an SQL statement and return the number of affected rows
- PDO::getAttribute — Retrieve a database connection attribute
- PDO::getAvailableDrivers — Return an array of available PDO drivers
- PDO::inTransaction — Checks if inside a transaction
- PDO::lastInsertId — Returns the ID of the last inserted row or sequence value
- PDO::prepare — Prepares a statement for execution and returns a statement object
- PDO::query — Prepares and executes an SQL statement without placeholders
- PDO::quote — Quotes a string for use in a query
- PDO::rollBack — Rolls back a transaction
- PDO::setAttribute — Set an attribute

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.pdo.php
