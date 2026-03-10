# The Threaded class

Source: https://devdocs.io/php/class.threaded

## Introduction

(PECL pthreads >= 2.0.0)

Threaded objects form the basis of pthreads ability to execute user code in parallel; they expose synchronization methods and various useful interfaces.

Threaded objects, most importantly, provide implicit safety for the programmer; all operations on the object scope are safe.

## Class synopsis

```
public chunk(int $size, bool $preserve): array
```

```
public count(): int
```

```
public extend(string $class): bool
```

```
public isRunning(): bool
```

```
public isTerminated(): bool
```

```
public merge(mixed $from, bool $overwrite = ?): bool
```

```
public notify(): bool
```

```
public notifyOne(): bool
```

```
public pop(): bool
```

```
public run(): void
```

```
public shift(): mixed
```

```
public synchronized(Closure $block, mixed ...$args): mixed
```

```
public wait(int $timeout = ?): bool
```

## Table of Contents

- Threaded::chunk — Manipulation
- Threaded::count — Manipulation
- Threaded::extend — Runtime Manipulation
- Threaded::isRunning — State Detection
- Threaded::isTerminated — State Detection
- Threaded::merge — Manipulation
- Threaded::notify — Synchronization
- Threaded::notifyOne — Synchronization
- Threaded::pop — Manipulation
- Threaded::run — Execution
- Threaded::shift — Manipulation
- Threaded::synchronized — Synchronization
- Threaded::wait — Synchronization

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.threaded.php
