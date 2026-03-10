# Pool::collect

Source: https://devdocs.io/php/pool.collect

(PECL pthreads >= 2.0.0)

Pool::collect — Collect references to completed tasks

### Description

```
public Pool::collect(Callable $collector = ?): int
```

Allows the pool to collect references determined to be garbage by the optionally given collector.

### Parameters

A Callable collector that returns a boolean on whether the task can be collected or not. Only in rare cases should a custom collector need to be used.

### Return Values

The number of remaining tasks in the pool to be collected.

### Changelog

### Examples

Example #1 A basic example of Pool::collect()

```
<?php
$pool = new Pool(4);

for ($i = 0; $i < 15; ++$i) {
    $pool->submit(new class extends Threaded {});
}

while ($pool->collect()); // blocks until all tasks have finished executing

$pool->shutdown();
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/pool.collect.php
