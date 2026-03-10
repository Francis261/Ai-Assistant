# The Pool class

Source: https://devdocs.io/php/class.pool

## Introduction

(PECL pthreads >= 2.0.0)

A Pool is a container for, and controller of, an adjustable number of Workers.

Pooling provides a higher level abstraction of the Worker functionality, including the management of references in the way required by pthreads.

## Class synopsis

```
public collect(Callable $collector = ?): int
```

```
public resize(int $size): void
```

```
public shutdown(): void
```

```
public submit(Threaded $task): int
```

```
public submitTo(int $worker, Threaded $task): int
```

## Properties

maximum number of Workers this Pool can use

the class of the Worker

references to Workers

the arguments for constructor of new Workers

offset in workers of the last Worker used

## Table of Contents

- Pool::collect — Collect references to completed tasks
- Pool::__construct — Creates a new Pool of Workers
- Pool::resize — Resize the Pool
- Pool::shutdown — Shutdown all workers
- Pool::submit — Submits an object for execution
- Pool::submitTo — Submits a task to a specific worker for execution

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.pool.php
