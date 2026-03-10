# The GearmanWorker class

Source: https://devdocs.io/php/class.gearmanworker

## Introduction

(PECL gearman >= 0.5.0)

## Class synopsis

```
public addFunction(
 string $function_name,
 callable $function,
 mixed $context = null,
 int $timeout = 0
): bool
```

```
public addOptions(int $option): true
```

```
public addServer(string $host = null, int $port = 0, bool $setupExceptionHandler = true): bool
```

```
public addServers(string $servers = null, bool $setupExceptionHandler = true): bool
```

```
public error(): string|false
```

```
public getErrno(): int
```

```
public options(): int
```

```
public register(string $function_name, int $timeout = 0): bool
```

```
public removeOptions(int $option): true
```

```
public returnCode(): int
```

```
public setId(string $id): bool
```

```
public setOptions(int $option): true
```

```
public setTimeout(int $timeout): true
```

```
public timeout(): int
```

```
public unregister(string $function_name): bool
```

```
public unregisterAll(): bool
```

```
public wait(): bool
```

```
public work(): bool
```

## Table of Contents

- GearmanWorker::addFunction — Register and add callback function
- GearmanWorker::addOptions — Add worker options
- GearmanWorker::addServer — Add a job server
- GearmanWorker::addServers — Add job servers
- GearmanWorker::clone — Create a copy of the worker
- GearmanWorker::__construct — Create a GearmanWorker instance
- GearmanWorker::echo — Test job server response
- GearmanWorker::error — Get the last error encountered
- GearmanWorker::getErrno — Get errno
- GearmanWorker::options — Get worker options
- GearmanWorker::register — Register a function with the job server
- GearmanWorker::removeOptions — Remove worker options
- GearmanWorker::returnCode — Get last Gearman return code
- GearmanWorker::setId — Give the worker an identifier so it can be tracked when asking gearmand for the list of available workers
- GearmanWorker::setOptions — Set worker options
- GearmanWorker::setTimeout — Set socket I/O activity timeout
- GearmanWorker::timeout — Get socket I/O activity timeout
- GearmanWorker::unregister — Unregister a function name with the job servers
- GearmanWorker::unregisterAll — Unregister all function names with the job servers
- GearmanWorker::wait — Wait for activity from one of the job servers
- GearmanWorker::work — Wait for and perform jobs

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.gearmanworker.php
