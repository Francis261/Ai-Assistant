# Thread::join

Source: https://devdocs.io/php/thread.join

(PECL pthreads >= 2.0.0)

Thread::join — Synchronization

### Description

```
public Thread::join(): bool
```

Causes the calling context to wait for the referenced Thread to finish executing

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Join with the referenced Thread

```
<?php
class My extends Thread {
    public function run() {
        /* ... */
    }
}
$my = new My();
$my->start();
/* ... */
var_dump($my->join());
/* ... */
?>
```

The above example will output:

```
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/thread.join.php
