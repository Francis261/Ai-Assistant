# Worker::isShutdown

Source: https://devdocs.io/php/worker.isshutdown

(PECL pthreads >= 2.0.0)

Worker::isShutdown — State Detection

### Description

```
public Worker::isShutdown(): bool
```

Whether the worker has been shutdown or not.

### Parameters

This function has no parameters.

### Return Values

Returns whether the worker has been shutdown or not.

### Examples

Example #1 Detect the state of a worker

```
<?php
$worker = new Worker();
$worker->start();

var_dump($worker->isShutdown());

$worker->shutdown();

var_dump($worker->isShutdown());
```

The above example will output:

```
bool(false)
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/worker.isshutdown.php
