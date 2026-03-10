# Worker::getStacked

Source: https://devdocs.io/php/worker.getstacked

(PECL pthreads >= 2.0.0)

Worker::getStacked — Gets the remaining stack size

### Description

```
public Worker::getStacked(): int
```

Returns the number of tasks left on the stack

### Parameters

This function has no parameters.

### Return Values

Returns the number of tasks currently waiting to be executed by the worker

### Examples

Example #1 A basic example of Worker::getStacked

```
<?php
$worker = new Worker();

for ($i = 0; $i < 5; ++$i) {
    $worker->stack(new class extends Threaded {});
}

echo "There are {$worker->getStacked()} stacked tasks\n";
```

The above example will output:

```
There are 5 stacked tasks
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/worker.getstacked.php
