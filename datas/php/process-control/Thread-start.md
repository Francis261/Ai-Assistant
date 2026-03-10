# Thread::start

Source: https://devdocs.io/php/thread.start

(PECL pthreads >= 2.0.0)

Thread::start — Execution

### Description

```
public Thread::start(int $options = ?): bool
```

Will start a new Thread to execute the implemented run method

### Parameters

An optional mask of inheritance constants, by default PTHREADS_INHERIT_ALL

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Starting Threads

```
<?php
class My extends Thread {
    public function run() {
        /** ... **/
    }
}
$my = new My();
var_dump($my->start());
?>
```

The above example will output:

```
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/thread.start.php
