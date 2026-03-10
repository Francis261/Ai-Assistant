# The SQLite3 class

Source: https://devdocs.io/php/class.sqlite3

## Introduction

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

A class that interfaces SQLite 3 databases.

## Class synopsis

```
public backup(SQLite3 $destination, string $sourceDatabase = "main", string $destinationDatabase = "main"): bool
```

```
public busyTimeout(int $milliseconds): bool
```

```
public changes(): int
```

```
public close(): bool
```

```
public createAggregate(
 string $name,
 callable $stepCallback,
 callable $finalCallback,
 int $argCount = -1
): bool
```

```
public createCollation(string $name, callable $callback): bool
```

```
public createFunction(
 string $name,
 callable $callback,
 int $argCount = -1,
 int $flags = 0
): bool
```

```
public enableExceptions(bool $enable = false): bool
```

```
public static escapeString(string $string): string
```

```
public exec(string $query): bool
```

```
public lastErrorCode(): int
```

```
public lastErrorMsg(): string
```

```
public lastInsertRowID(): int
```

```
public loadExtension(string $name): bool
```

```
public open(string $filename, int $flags = SQLITE3_OPEN_READWRITE | SQLITE3_OPEN_CREATE, string $encryptionKey = ""): void
```

```
public openBlob(
 string $table,
 string $column,
 int $rowid,
 string $database = "main",
 int $flags = SQLITE3_OPEN_READONLY
): resource|false
```

```
public prepare(string $query): SQLite3Stmt|false
```

```
public query(string $query): SQLite3Result|false
```

```
public querySingle(string $query, bool $entireRow = false): mixed
```

```
public setAuthorizer(?callable $callback): bool
```

```
public static version(): array
```

## Predefined Constants

## Table of Contents

- SQLite3::backup — Backup one database to another database
- SQLite3::busyTimeout — Sets the busy connection handler
- SQLite3::changes — Returns the number of database rows that were changed (or inserted or deleted) by the most recent SQL statement
- SQLite3::close — Closes the database connection
- SQLite3::__construct — Instantiates an SQLite3 object and opens an SQLite 3 database
- SQLite3::createAggregate — Registers a PHP function for use as an SQL aggregate function
- SQLite3::createCollation — Registers a PHP function for use as an SQL collating function
- SQLite3::createFunction — Registers a PHP function for use as an SQL scalar function
- SQLite3::enableExceptions — Enable throwing exceptions
- SQLite3::escapeString — Returns a string that has been properly escaped
- SQLite3::exec — Executes a result-less query against a given database
- SQLite3::lastErrorCode — Returns the numeric result code of the most recent failed SQLite request
- SQLite3::lastErrorMsg — Returns English text describing the most recent failed SQLite request
- SQLite3::lastInsertRowID — Returns the row ID of the most recent INSERT into the database
- SQLite3::loadExtension — Attempts to load an SQLite extension library
- SQLite3::open — Opens an SQLite database
- SQLite3::openBlob — Opens a stream resource to read a BLOB
- SQLite3::prepare — Prepares an SQL statement for execution
- SQLite3::query — Executes an SQL query
- SQLite3::querySingle — Executes a query and returns a single result
- SQLite3::setAuthorizer — Configures a callback to be used as an authorizer to limit what a statement can do
- SQLite3::version — Returns the SQLite3 library version as a string constant and as a number

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.sqlite3.php
