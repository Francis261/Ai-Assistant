# The mysqli class

Source: https://devdocs.io/php/class.mysqli

## Introduction

(PHP 5, PHP 7, PHP 8)

Represents a connection between PHP and a MySQL database.

## Class synopsis

```
public autocommit(bool $enable): bool
```

```
public begin_transaction(int $flags = 0, ?string $name = null): bool
```

```
public change_user(string $username, #[\SensitiveParameter] string $password, ?string $database): bool
```

```
public character_set_name(): string
```

```
public close(): true
```

```
public commit(int $flags = 0, ?string $name = null): bool
```

```
public connect(
 ?string $hostname = null,
 ?string $username = null,
 #[\SensitiveParameter] ?string $password = null,
 ?string $database = null,
 ?int $port = null,
 ?string $socket = null
): bool
```

```
public debug(string $options): true
```

```
public dump_debug_info(): bool
```

```
public execute_query(string $query, ?array $params = null): mysqli_result|bool
```

```
public get_charset(): ?object
```

```
#[\Deprecated] 
 public get_client_info(): string
```

```
public get_connection_stats(): array
```

```
public get_server_info(): string
```

```
public get_warnings(): mysqli_warning|false
```

```
#[\Deprecated] 
 public init(): ?bool
```

```
#[\Deprecated] 
 public kill(int $process_id): bool
```

```
public more_results(): bool
```

```
public multi_query(string $query): bool
```

```
public next_result(): bool
```

```
public options(int $option, string|int $value): bool
```

```
#[\Deprecated] 
 public ping(): bool
```

```
public static poll(
 ?array &$read,
 ?array &$error,
 array &$reject,
 int $seconds,
 int $microseconds = 0
): int|false
```

```
public prepare(string $query): mysqli_stmt|false
```

```
public query(string $query, int $result_mode = MYSQLI_STORE_RESULT): mysqli_result|bool
```

```
public real_connect(
 ?string $hostname = null,
 ?string $username = null,
 #[\SensitiveParameter] ?string $password = null,
 ?string $database = null,
 ?int $port = null,
 ?string $socket = null,
 int $flags = 0
): bool
```

```
public real_escape_string(string $string): string
```

```
public real_query(string $query): bool
```

```
public reap_async_query(): mysqli_result|bool
```

```
#[\Deprecated] 
 public refresh(int $flags): bool
```

```
public release_savepoint(string $name): bool
```

```
public rollback(int $flags = 0, ?string $name = null): bool
```

```
public savepoint(string $name): bool
```

```
public select_db(string $database): bool
```

```
public set_charset(string $charset): bool
```

```
public ssl_set(
 ?string $key,
 ?string $certificate,
 ?string $ca_certificate,
 ?string $ca_path,
 ?string $cipher_algos
): true
```

```
public stat(): string|false
```

```
public stmt_init(): mysqli_stmt|false
```

```
public store_result(int $mode = 0): mysqli_result|false
```

```
public thread_safe(): bool
```

```
public use_result(): mysqli_result|false
```

## Table of Contents

- mysqli::$affected_rows — Gets the number of affected rows in a previous MySQL operation
- mysqli::autocommit — Turns on or off auto-committing database modifications
- mysqli::begin_transaction — Starts a transaction
- mysqli::change_user — Changes the user of the database connection
- mysqli::character_set_name — Returns the current character set of the database connection
- mysqli::close — Closes a previously opened database connection
- mysqli::commit — Commits the current transaction
- mysqli::$connect_errno — Returns the error code from last connect call
- mysqli::$connect_error — Returns a description of the last connection error
- mysqli::__construct — Open a new connection to the MySQL server
- mysqli::debug — Performs debugging operations
- mysqli::dump_debug_info — Dump debugging information into the log
- mysqli::$errno — Returns the error code for the most recent function call
- mysqli::$error — Returns a string description of the last error
- mysqli::$error_list — Returns a list of errors from the last command executed
- mysqli::execute_query — Prepares, binds parameters, and executes SQL statement
- mysqli::$field_count — Returns the number of columns for the most recent query
- mysqli::get_charset — Returns a character set object
- mysqli::$client_info — Get MySQL client info
- mysqli::$client_version — Returns the MySQL client version as an integer
- mysqli::get_connection_stats — Returns statistics about the client connection
- mysqli::$host_info — Returns a string representing the type of connection used
- mysqli::$protocol_version — Returns the version of the MySQL protocol used
- mysqli::$server_info — Returns the version of the MySQL server
- mysqli::$server_version — Returns the version of the MySQL server as an integer
- mysqli::get_warnings — Get result of SHOW WARNINGS
- mysqli::$info — Retrieves information about the most recently executed query
- mysqli::init — Initializes MySQLi and returns an object for use with mysqli_real_connect()
- mysqli::$insert_id — Returns the value generated for an AUTO_INCREMENT column by the last query
- mysqli::kill — Asks the server to kill a MySQL thread
- mysqli::more_results — Check if there are any more query results from a multi query
- mysqli::multi_query — Performs one or more queries on the database
- mysqli::next_result — Prepare next result from multi_query
- mysqli::options — Set options
- mysqli::ping — Pings a server connection, or tries to reconnect if the connection has gone down
- mysqli::poll — Poll connections
- mysqli::prepare — Prepares an SQL statement for execution
- mysqli::query — Performs a query on the database
- mysqli::real_connect — Opens a connection to a mysql server
- mysqli::real_escape_string — Escapes special characters in a string for use in an SQL statement, taking into account the current charset of the connection
- mysqli::real_query — Execute an SQL query
- mysqli::reap_async_query — Get result from async query
- mysqli::refresh — Refreshes
- mysqli::release_savepoint — Removes the named savepoint from the set of savepoints of the current transaction
- mysqli::rollback — Rolls back current transaction
- mysqli::savepoint — Set a named transaction savepoint
- mysqli::select_db — Selects the default database for database queries
- mysqli::set_charset — Sets the client character set
- mysqli::$sqlstate — Returns the SQLSTATE error from previous MySQL operation
- mysqli::ssl_set — Used for establishing secure connections using SSL
- mysqli::stat — Gets the current system status
- mysqli::stmt_init — Initializes a statement and returns an object for use with mysqli_stmt_prepare
- mysqli::store_result — Transfers a result set from the last query
- mysqli::$thread_id — Returns the thread ID for the current connection
- mysqli::thread_safe — Returns whether thread safety is given or not
- mysqli::use_result — Initiate a result set retrieval
- mysqli::$warning_count — Returns the number of warnings generated by the most recently executed query

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.mysqli.php
