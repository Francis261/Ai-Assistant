# The Pdo\Odbc class

Source: https://devdocs.io/php/class.pdo-odbc

## Introduction

(PHP 8 >= 8.4.0)

A PDO subclass representing a connection using the ODBC PDO driver.

## Class synopsis

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

This option controls whether the ODBC cursor library is used. The ODBC cursor library supports some advanced ODBC features (e.g. block scrollable cursors), which may not be implemented by the driver. The following values are supported:

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.pdo-odbc.php
