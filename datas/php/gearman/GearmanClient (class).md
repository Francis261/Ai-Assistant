# The GearmanClient class

Source: https://devdocs.io/php/class.gearmanclient

## Introduction

(PECL gearman >= 0.5.0)

Represents a class for connecting to a Gearman job server and making requests to perform some function on provided data. The function performed must be one registered by a Gearman worker and the data passed is opaque to the job server.

## Class synopsis

```
public addOptions(int $option): bool
```

```
public addServer(string $host = null, int $port = 0, bool $setupExceptionHandler = true): bool
```

```
public addServers(string $servers = null, bool $setupExceptionHandler = true): bool
```

```
public addTask(
 string $function_name,
 string|int|float $workload,
 mixed $context = null,
 ?string $unique_key = null
): GearmanTask|false
```

```
public addTaskBackground(
 string $function_name,
 string|int|float $workload,
 mixed $context = null,
 ?string $unique_key = null
): GearmanTask|false
```

```
public addTaskHigh(
 string $function_name,
 string|int|float $workload,
 mixed $context = null,
 ?string $unique_key = null
): GearmanTask|false
```

```
public addTaskHighBackground(
 string $function_name,
 string|int|float $workload,
 mixed $context = null,
 ?string $unique_key = null
): GearmanTask|false
```

```
public addTaskLow(
 string $function_name,
 string|int|float $workload,
 mixed $context = null,
 ?string $unique_key = null
): GearmanTask|false
```

```
public addTaskLowBackground(
 string $function_name,
 string|int|float $workload,
 mixed $context = null,
 ?string $unique_key = null
): GearmanTask|false
```

```
public addTaskStatus(string $job_handle, mixed $context = null): GearmanTask|false
```

```
public clearCallbacks(): bool
```

```
public context(): string
```

```
public doBackground(string $function, string $workload, ?string $unique = null): string
```

```
public doHigh(string $function, string $workload, ?string $unique = null): string
```

```
public doHighBackground(string $function, string $workload, ?string $unique = null): string
```

```
public doJobHandle(): string
```

```
public doLow(string $function, string $workload, ?string $unique = null): string
```

```
public doLowBackground(string $function, string $workload, ?string $unique = null): string
```

```
public doNormal(string $function, string $workload, ?string $unique = null): string
```

```
public doStatus(): array
```

```
public error(): string|false
```

```
public getErrno(): int
```

```
public jobStatus(string $job_handle): array
```

```
public ping(string $workload): bool
```

```
public removeOptions(int $option): bool
```

```
public returnCode(): int
```

```
public runTasks(): bool
```

```
public setCompleteCallback(callable $callback): bool
```

```
public setContext(string $data): bool
```

```
public setCreatedCallback(callable $callback): bool
```

```
public setDataCallback(callable $callback): bool
```

```
public setExceptionCallback(callable $callback): bool
```

```
public setFailCallback(callable $callback): bool
```

```
public setOptions(int $option): bool
```

```
public setStatusCallback(callable $callback): bool
```

```
public setTimeout(int $timeout): bool
```

```
public setWarningCallback(callable $callback): bool
```

```
public setWorkloadCallback(callable $callback): bool
```

```
public timeout(): int
```

```
public wait(): bool
```

## Table of Contents

- GearmanClient::addOptions — Add client options
- GearmanClient::addServer — Add a job server to the client
- GearmanClient::addServers — Add a list of job servers to the client
- GearmanClient::addTask — Add a task to be run in parallel
- GearmanClient::addTaskBackground — Add a background task to be run in parallel
- GearmanClient::addTaskHigh — Add a high priority task to run in parallel
- GearmanClient::addTaskHighBackground — Add a high priority background task to be run in parallel
- GearmanClient::addTaskLow — Add a low priority task to run in parallel
- GearmanClient::addTaskLowBackground — Add a low priority background task to be run in parallel
- GearmanClient::addTaskStatus — Add a task to get status
- GearmanClient::clearCallbacks — Clear all task callback functions
- GearmanClient::clone — Create a copy of a GearmanClient object
- GearmanClient::__construct — Create a GearmanClient instance
- GearmanClient::context — Get the application context
- GearmanClient::data — Get the application data (deprecated)
- GearmanClient::do — Run a single task and return a result [deprecated]
- GearmanClient::doBackground — Run a task in the background
- GearmanClient::doHigh — Run a single high priority task
- GearmanClient::doHighBackground — Run a high priority task in the background
- GearmanClient::doJobHandle — Get the job handle for the running task
- GearmanClient::doLow — Run a single low priority task
- GearmanClient::doLowBackground — Run a low priority task in the background
- GearmanClient::doNormal — Run a single task and return a result
- GearmanClient::doStatus — Get the status for the running task
- GearmanClient::echo — Send data to all job servers to see if they echo it back [deprecated]
- GearmanClient::error — Returns an error string for the last error encountered
- GearmanClient::getErrno — Get an errno value
- GearmanClient::jobStatus — Get the status of a background job
- GearmanClient::ping — Send data to all job servers to see if they echo it back
- GearmanClient::removeOptions — Remove client options
- GearmanClient::returnCode — Get the last Gearman return code
- GearmanClient::runTasks — Run a list of tasks in parallel
- GearmanClient::setClientCallback — Callback function when there is a data packet for a task (deprecated)
- GearmanClient::setCompleteCallback — Set a function to be called on task completion
- GearmanClient::setContext — Set application context
- GearmanClient::setCreatedCallback — Set a callback for when a task is queued
- GearmanClient::setData — Set application data (deprecated)
- GearmanClient::setDataCallback — Callback function when there is a data packet for a task
- GearmanClient::setExceptionCallback — Set a callback for worker exceptions
- GearmanClient::setFailCallback — Set callback for job failure
- GearmanClient::setOptions — Set client options
- GearmanClient::setStatusCallback — Set a callback for collecting task status
- GearmanClient::setTimeout — Set socket I/O activity timeout
- GearmanClient::setWarningCallback — Set a callback for worker warnings
- GearmanClient::setWorkloadCallback — Set a callback for accepting incremental data updates
- GearmanClient::timeout — Get current socket I/O activity timeout value
- GearmanClient::wait — Wait for I/O activity on all connections in a client

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.gearmanclient.php
