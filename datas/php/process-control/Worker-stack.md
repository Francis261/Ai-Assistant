# Worker::stack

Source: https://devdocs.io/php/worker.stack

(PECL pthreads >= 2.0.0)

Worker::stack — Stacking work

### Description

```
public Worker::stack(Threaded &$work): int
```

Appends the new work to the stack of the referenced worker.

### Parameters

A Threaded object to be executed by the worker.

### Return Values

The new size of the stack.

### Examples

Example #1 Stacking a task for execution onto a worker

```
<?php
$worker = new Worker();
$work = new class extends Threaded {};

var_dump($worker->stack($work));
```

The above example will output:

```
int(1)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/worker.stack.php
