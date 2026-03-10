# The SQLite3Stmt class

Source: https://devdocs.io/php/class.sqlite3stmt

## Introduction

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

A class that handles prepared statements for the SQLite 3 extension.

## Class synopsis

```
public bindParam(string|int $param, mixed &$var, int $type = SQLITE3_TEXT): bool
```

```
public bindValue(string|int $param, mixed $value, int $type = SQLITE3_TEXT): bool
```

```
public clear(): bool
```

```
public close(): true
```

```
public execute(): SQLite3Result|false
```

```
public getSQL(bool $expand = false): string|false
```

```
public paramCount(): int
```

```
public readOnly(): bool
```

```
public reset(): bool
```

## Table of Contents

- SQLite3Stmt::bindParam — Binds a parameter to a statement variable
- SQLite3Stmt::bindValue — Binds the value of a parameter to a statement variable
- SQLite3Stmt::clear — Clears all current bound parameters
- SQLite3Stmt::close — Closes the prepared statement
- SQLite3Stmt::__construct — Constructs an SQLite3Stmt object
- SQLite3Stmt::execute — Executes a prepared statement and returns a result set object
- SQLite3Stmt::getSQL — Get the SQL of the statement
- SQLite3Stmt::paramCount — Returns the number of parameters within the prepared statement
- SQLite3Stmt::readOnly — Returns whether a statement is definitely read only
- SQLite3Stmt::reset — Resets the prepared statement

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.sqlite3stmt.php
