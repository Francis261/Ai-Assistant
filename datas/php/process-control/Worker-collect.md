# Worker::collect

Source: https://devdocs.io/php/worker.collect

(PECL pthreads >= 3.0.0)

Worker::collect — Collect references to completed tasks

### Description

```
public Worker::collect(Callable $collector = ?): int
```

Allows the worker to collect references determined to be garbage by the optionally given collector.

### Parameters

A Callable collector that returns a boolean on whether the task can be collected or not. Only in rare cases should a custom collector need to be used.

### Return Values

The number of remaining tasks on the worker's stack to be collected.

### Examples

Example #1 A basic example of Worker::collect()

```
<?php
$worker = new Worker();

echo "There are currently {$worker->collect()} tasks on the stack to be collected\n";

for ($i = 0; $i < 15; ++$i) {
    $worker->stack(new class extends Threaded {});
}

echo "There are {$worker->collect()} tasks remaining on the stack to be collected\n";

$worker->start();

while ($worker->collect()); // blocks until all tasks have finished executing

echo "There are now {$worker->collect()} tasks on the stack to be collected\n";

$worker->shutdown();
```

The above example will output:

```
There are currently 0 tasks on the stack to be collected
There are 15 tasks remaining on the stack to be collected
There are now 0 tasks on the stack to be collected
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/worker.collect.php
