# Pool::submitTo

Source: https://devdocs.io/php/pool.submitto

(PECL pthreads >= 2.0.0)

Pool::submitTo — Submits a task to a specific worker for execution

### Description

```
public Pool::submitTo(int $worker, Threaded $task): int
```

Submit a task to the specified worker in the pool. The workers are indexed from 0, and will only exist if the pool has needed to create them (since threads are lazily spawned).

### Parameters

The worker to stack the task onto, indexed from 0.

The task for execution.

### Return Values

The identifier of the worker that accepted the task.

### Examples

Example #1 Submitting tasks to a specific worker

```
<?php
class Task extends Threaded {
    public function run() {
        var_dump(Thread::getCurrentThreadID());
    }
}

$pool = new Pool(2);

$pool->submit(new Task());

for ($i = 0; $i < 5; ++$i) {
    $pool->submitTo(0, new Task()); // stack all tasks onto the first worker
}

$pool->submitTo(1, new Task()); // cannot stack the task onto the second worker due to it not existing yet

$pool->shutdown();
```

The above example will output:

```
int(4475011072)
int(4475011072)
int(4475011072)
int(4475011072)
int(4475011072)
int(4475011072)

Fatal error: Uncaught Exception: The selected worker (1) does not exist in %s:%d
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pool.submitTo.php
