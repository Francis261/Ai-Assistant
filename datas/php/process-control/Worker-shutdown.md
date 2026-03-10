# Worker::shutdown

Source: https://devdocs.io/php/worker.shutdown

(PECL pthreads >= 2.0.0)

Worker::shutdown — Shutdown the worker

### Description

```
public Worker::shutdown(): bool
```

Shuts down the worker after executing all of the stacked tasks.

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Shutdown the referenced worker

```
<?php
$my = new Worker();
$my->start();
/* stack/execute tasks */
var_dump($my->shutdown());
```

The above example will output:

```
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/worker.shutdown.php
