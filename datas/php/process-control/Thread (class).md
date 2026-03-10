# The Thread class

Source: https://devdocs.io/php/class.thread

## Introduction

(PECL pthreads >= 2.0.0)

When the start method of a Thread is invoked, the run method code will be executed in separate Thread, in parallel.

After the run method is executed the Thread will exit immediately, it will be joined with the creating Thread at the appropriate time.

Relying on the engine to determine when a Thread should join may cause undesirable behaviour; the programmer should be explicit, where possible.

## Class synopsis

```
public getCreatorId(): int
```

```
public static getCurrentThread(): Thread
```

```
public static getCurrentThreadId(): int
```

```
public getThreadId(): int
```

```
public isJoined(): bool
```

```
public isStarted(): bool
```

```
public join(): bool
```

```
public start(int $options = ?): bool
```

```
public Threaded::chunk(int $size, bool $preserve): array
```

```
public Threaded::count(): int
```

```
public Threaded::extend(string $class): bool
```

```
public Threaded::isRunning(): bool
```

```
public Threaded::isTerminated(): bool
```

```
public Threaded::merge(mixed $from, bool $overwrite = ?): bool
```

```
public Threaded::notify(): bool
```

```
public Threaded::notifyOne(): bool
```

```
public Threaded::pop(): bool
```

```
public Threaded::run(): void
```

```
public Threaded::shift(): mixed
```

```
public Threaded::synchronized(Closure $block, mixed ...$args): mixed
```

```
public Threaded::wait(int $timeout = ?): bool
```

## Table of Contents

- Thread::getCreatorId — Identification
- Thread::getCurrentThread — Identification
- Thread::getCurrentThreadId — Identification
- Thread::getThreadId — Identification
- Thread::isJoined — State Detection
- Thread::isStarted — State Detection
- Thread::join — Synchronization
- Thread::start — Execution

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.thread.php
