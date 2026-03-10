# Pool::shutdown

Source: https://devdocs.io/php/pool.shutdown

(PECL pthreads >= 2.0.0)

Pool::shutdown — Shutdown all workers

### Description

```
public Pool::shutdown(): void
```

Shuts down all of the workers in the pool. This will block until all submitted tasks have been executed.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### Examples

Example #1 Shutting down a pool

```
<?php
class Task extends Threaded
{
    public function run()
    {
        usleep(500000);
    }
}

$pool = new Pool(4);

for ($i = 0; $i < 10; ++$i) {
    $pool->submit(new Task());
}

$pool->shutdown(); // blocks until all submitted tasks have finished executing
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pool.shutdown.php
