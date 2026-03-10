# The PDOStatement class

Source: https://devdocs.io/php/class.pdostatement

## Introduction

(PHP 5 >= 5.1.0, PHP 7, PHP 8, PECL pdo >= 1.0.0)

Represents a prepared statement and, after the statement is executed, an associated result set.

## Class synopsis

```
public bindColumn(
 string|int $column,
 mixed &$var,
 int $type = PDO::PARAM_STR,
 int $maxLength = 0,
 mixed $driverOptions = null
): bool
```

```
public bindParam(
 string|int $param,
 mixed &$var,
 int $type = PDO::PARAM_STR,
 int $maxLength = 0,
 mixed $driverOptions = null
): bool
```

```
public bindValue(string|int $param, mixed $value, int $type = PDO::PARAM_STR): bool
```

```
public closeCursor(): bool
```

```
public columnCount(): int
```

```
public debugDumpParams(): ?bool
```

```
public errorCode(): ?string
```

```
public errorInfo(): array
```

```
public execute(?array $params = null): bool
```

```
public fetch(int $mode = PDO::FETCH_DEFAULT, int $cursorOrientation = PDO::FETCH_ORI_NEXT, int $cursorOffset = 0): mixed
```

```
public fetchAll(int $mode = PDO::FETCH_DEFAULT): array
```

```
public fetchAll(int $mode = PDO::FETCH_COLUMN, int $column): array
```

```
public fetchAll(int $mode = PDO::FETCH_CLASS, string $class, ?array $constructorArgs): array
```

```
public fetchAll(int $mode = PDO::FETCH_FUNC, callable $callback): array
```

```
public fetchColumn(int $column = 0): mixed
```

```
public fetchObject(?string $class = "stdClass", array $constructorArgs = []): object|false
```

```
public getAttribute(int $name): mixed
```

```
public getColumnMeta(int $column): array|false
```

```
public getIterator(): Iterator
```

```
public nextRowset(): bool
```

```
public rowCount(): int
```

```
public setAttribute(int $attribute, mixed $value): bool
```

```
public setFetchMode(int $mode): bool
```

```
public setFetchMode(int $mode = PDO::FETCH_COLUMN, int $colno): bool
```

```
public setFetchMode(int $mode = PDO::FETCH_CLASS, string $class, ?array $constructorArgs = null): bool
```

```
public setFetchMode(int $mode = PDO::FETCH_INTO, object $object): bool
```

## Properties

Used query string.

## Changelog

## Table of Contents

- PDOStatement::bindColumn — Bind a column to a PHP variable
- PDOStatement::bindParam — Binds a parameter to the specified variable name
- PDOStatement::bindValue — Binds a value to a parameter
- PDOStatement::closeCursor — Closes the cursor, enabling the statement to be executed again
- PDOStatement::columnCount — Returns the number of columns in the result set
- PDOStatement::debugDumpParams — Dump an SQL prepared command
- PDOStatement::errorCode — Fetch the SQLSTATE associated with the last operation on the statement handle
- PDOStatement::errorInfo — Fetch extended error information associated with the last operation on the statement handle
- PDOStatement::execute — Executes a prepared statement
- PDOStatement::fetch — Fetches the next row from a result set
- PDOStatement::fetchAll — Fetches the remaining rows from a result set
- PDOStatement::fetchColumn — Returns a single column from the next row of a result set
- PDOStatement::fetchObject — Fetches the next row and returns it as an object
- PDOStatement::getAttribute — Retrieve a statement attribute
- PDOStatement::getColumnMeta — Returns metadata for a column in a result set
- PDOStatement::getIterator — Gets result set iterator
- PDOStatement::nextRowset — Advances to the next rowset in a multi-rowset statement handle
- PDOStatement::rowCount — Returns the number of rows affected by the last SQL statement
- PDOStatement::setAttribute — Set a statement attribute
- PDOStatement::setFetchMode — Set the default fetch mode for this statement

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.pdostatement.php
