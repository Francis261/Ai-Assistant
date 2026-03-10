# The Volatile class

Source: https://devdocs.io/php/class.volatile

## Introduction

(PECL pthreads >= 3.0.0)

The Volatile class is new to pthreads v3. Its introduction is a consequence of the new immutability semantics of Threaded members of Threaded classes. The Volatile class enables for mutability of its Threaded members, and is also used to store PHP arrays in Threaded contexts.

## Class synopsis

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

## Examples

Example #1 New immutability semantics of Threaded

```
<?php

class Task extends Threaded
{
    public function __construct()
    {
        $this->data = new Threaded();

        // attempt to overwrite a Threaded property of a Threaded class (invalid)
        $this->data = new stdClass();
    }
}

var_dump((new Task())->data);
```

The above example will output something similar to:

```
RuntimeException: Threaded members previously set to Threaded objects are immutable, cannot overwrite data in %s:%d
```

Example #2 Volatile use-case

```
<?php

class Task extends Volatile
{
    public function __construct()
    {
        $this->data = new Threaded();

        // attempt to overwrite a Threaded property of a Volatile class (valid)
        $this->data = new stdClass();
    }
}

var_dump((new Task())->data);
```

The above example will output something similar to:

```
object(stdClass)#3 (0) {
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.volatile.php
