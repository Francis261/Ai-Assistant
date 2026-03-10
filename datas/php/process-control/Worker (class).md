# The Worker class

Source: https://devdocs.io/php/class.worker

## Introduction

(PECL pthreads >= 2.0.0)

Worker Threads have a persistent context, as such should be used over Threads in most cases.

When a Worker is started, the run method will be executed, but the Thread will not leave until one of the following conditions are met:

- the Worker goes out of scope (no more references remain)
- the programmer calls shutdown
- the script dies

the Worker goes out of scope (no more references remain)

the programmer calls shutdown

the script dies

This means the programmer can reuse the context throughout execution; placing objects on the stack of the Worker will cause the Worker to execute the stacked objects run method.

## Class synopsis

```
public collect(Callable $collector = ?): int
```

```
public getStacked(): int
```

```
public isShutdown(): bool
```

```
public shutdown(): bool
```

```
public stack(Threaded &$work): int
```

```
public unstack(): int
```

```
public Thread::getCreatorId(): int
```

```
public static Thread::getCurrentThread(): Thread
```

```
public static Thread::getCurrentThreadId(): int
```

```
public Thread::getThreadId(): int
```

```
public Thread::isJoined(): bool
```

```
public Thread::isStarted(): bool
```

```
public Thread::join(): bool
```

```
public Thread::start(int $options = ?): bool
```

## Table of Contents

- Worker::collect — Collect references to completed tasks
- Worker::getStacked — Gets the remaining stack size
- Worker::isShutdown — State Detection
- Worker::shutdown — Shutdown the worker
- Worker::stack — Stacking work
- Worker::unstack — Unstacking work

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.worker.php
