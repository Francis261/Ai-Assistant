# The SQLite3Result class

Source: https://devdocs.io/php/class.sqlite3result

## Introduction

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

A class that handles result sets for the SQLite 3 extension.

## Class synopsis

```
public columnName(int $column): string|false
```

```
public columnType(int $column): int|false
```

```
public fetchArray(int $mode = SQLITE3_BOTH): array|false
```

```
public finalize(): true
```

```
public numColumns(): int
```

```
public reset(): bool
```

## Table of Contents

- SQLite3Result::columnName — Returns the name of the nth column
- SQLite3Result::columnType — Returns the type of the nth column
- SQLite3Result::__construct — Constructs an SQLite3Result
- SQLite3Result::fetchArray — Fetches a result row as an associative or numerically indexed array or both
- SQLite3Result::finalize — Closes the result set
- SQLite3Result::numColumns — Returns the number of columns in the result set
- SQLite3Result::reset — Resets the result set back to the first row

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.sqlite3result.php
