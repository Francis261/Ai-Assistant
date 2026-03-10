# The mysqli_stmt class

Source: https://devdocs.io/php/class.mysqli-stmt

## Introduction

(PHP 5, PHP 7, PHP 8)

Represents a prepared statement.

## Class synopsis

```
public attr_get(int $attribute): int
```

```
public attr_set(int $attribute, int $value): bool
```

```
public bind_param(string $types, mixed &$var, mixed &...$vars): bool
```

```
public bind_result(mixed &$var, mixed &...$vars): bool
```

```
public close(): true
```

```
public data_seek(int $offset): void
```

```
public execute(?array $params = null): bool
```

```
public fetch(): ?bool
```

```
public free_result(): void
```

```
public get_result(): mysqli_result|false
```

```
public get_warnings(): mysqli_warning|false
```

```
public more_results(): bool
```

```
public next_result(): bool
```

```
public num_rows(): int|string
```

```
public prepare(string $query): bool
```

```
public reset(): bool
```

```
public result_metadata(): mysqli_result|false
```

```
public send_long_data(int $param_num, string $data): bool
```

```
public store_result(): bool
```

## Properties

Stores the statement ID.

## Table of Contents

- mysqli_stmt::$affected_rows — Returns the total number of rows changed, deleted, inserted, or matched by the last statement executed
- mysqli_stmt::attr_get — Used to get the current value of a statement attribute
- mysqli_stmt::attr_set — Used to modify the behavior of a prepared statement
- mysqli_stmt::bind_param — Binds variables to a prepared statement as parameters
- mysqli_stmt::bind_result — Binds variables to a prepared statement for result storage
- mysqli_stmt::close — Closes a prepared statement
- mysqli_stmt::__construct — Constructs a new mysqli_stmt object
- mysqli_stmt::data_seek — Adjusts the result pointer to an arbitrary row in the buffered result
- mysqli_stmt::$errno — Returns the error code for the most recent statement call
- mysqli_stmt::$error — Returns a string description for last statement error
- mysqli_stmt::$error_list — Returns a list of errors from the last statement executed
- mysqli_stmt::execute — Executes a prepared statement
- mysqli_stmt::fetch — Fetch results from a prepared statement into the bound variables
- mysqli_stmt::$field_count — Returns the number of columns in the given statement
- mysqli_stmt::free_result — Frees stored result memory for the given statement handle
- mysqli_stmt::get_result — Gets a result set from a prepared statement as a mysqli_result object
- mysqli_stmt::get_warnings — Get result of SHOW WARNINGS
- mysqli_stmt::$insert_id — Get the ID generated from the previous INSERT operation
- mysqli_stmt::more_results — Check if there are more query results from a multiple query
- mysqli_stmt::next_result — Reads the next result from a multiple query
- mysqli_stmt::$num_rows — Returns the number of rows fetched from the server
- mysqli_stmt::$param_count — Returns the number of parameters for the given statement
- mysqli_stmt::prepare — Prepares an SQL statement for execution
- mysqli_stmt::reset — Resets a prepared statement
- mysqli_stmt::result_metadata — Returns result set metadata from a prepared statement
- mysqli_stmt::send_long_data — Send data in blocks
- mysqli_stmt::$sqlstate — Returns SQLSTATE error from previous statement operation
- mysqli_stmt::store_result — Stores a result set in an internal buffer

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.mysqli-stmt.php
