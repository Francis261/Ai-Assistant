# The mysqli_result class

Source: https://devdocs.io/php/class.mysqli-result

## Introduction

(PHP 5, PHP 7, PHP 8)

Represents the result set obtained from a query against the database.

## Class synopsis

```
public data_seek(int $offset): bool
```

```
public fetch_all(int $mode = MYSQLI_NUM): array
```

```
public fetch_array(int $mode = MYSQLI_BOTH): array|null|false
```

```
public fetch_assoc(): array|null|false
```

```
public fetch_column(int $column = 0): null|int|float|string|false
```

```
public fetch_field(): object|false
```

```
public fetch_field_direct(int $index): object|false
```

```
public fetch_fields(): array
```

```
public fetch_object(string $class = "stdClass", array $constructor_args = []): object|null|false
```

```
public fetch_row(): array|null|false
```

```
public field_seek(int $index): true
```

```
public free(): void
```

```
public close(): void
```

```
public free_result(): void
```

```
public getIterator(): Iterator
```

## Properties

Stores whether the result is buffered or unbuffered as an int (MYSQLI_STORE_RESULT or MYSQLI_USE_RESULT, respectively).

## Changelog

## Table of Contents

- mysqli_result::__construct — Constructs a mysqli_result object
- mysqli_result::$current_field — Get current field offset of a result pointer
- mysqli_result::data_seek — Adjusts the result pointer to an arbitrary row in the result
- mysqli_result::fetch_all — Fetch all result rows as an associative array, a numeric array, or both
- mysqli_result::fetch_array — Fetch the next row of a result set as an associative, a numeric array, or both
- mysqli_result::fetch_assoc — Fetch the next row of a result set as an associative array
- mysqli_result::fetch_column — Fetch a single column from the next row of a result set
- mysqli_result::fetch_field — Returns the next field in the result set
- mysqli_result::fetch_field_direct — Fetch meta-data for a single field
- mysqli_result::fetch_fields — Returns an array of objects representing the fields in a result set
- mysqli_result::fetch_object — Fetch the next row of a result set as an object
- mysqli_result::fetch_row — Fetch the next row of a result set as an enumerated array
- mysqli_result::$field_count — Gets the number of fields in the result set
- mysqli_result::field_seek — Set result pointer to a specified field offset
- mysqli_result::free — Frees the memory associated with a result
- mysqli_result::getIterator — Retrieve an external iterator
- mysqli_result::$lengths — Returns the lengths of the columns of the current row in the result set
- mysqli_result::$num_rows — Gets the number of rows in the result set

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.mysqli-result.php
