# Threaded::wait

Source: https://devdocs.io/php/threaded.wait

(PECL pthreads >= 2.0.0)

Threaded::wait — Synchronization

### Description

```
public Threaded::wait(int $timeout = ?): bool
```

Will cause the calling context to wait for notification from the referenced object

### Parameters

An optional timeout in microseconds

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Notifications and Waiting

```
<?php
class My extends Thread {
    public function run() {
        /** cause this thread to wait **/
        $this->synchronized(function($thread){
            if (!$thread->done)
                $thread->wait();
        }, $this);
    }
}
$my = new My();
$my->start();
/** send notification to the waiting thread **/
$my->synchronized(function($thread){
    $thread->done = true;
    $thread->notify();
}, $my);
var_dump($my->join());
?>
```

The above example will output:

```
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/threaded.wait.php
