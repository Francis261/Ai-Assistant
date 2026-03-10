# Threaded::notifyOne

Source: https://devdocs.io/php/threaded.notifyone

(PECL pthreads >= 3.0.0)

Threaded::notifyOne — Synchronization

### Description

```
public Threaded::notifyOne(): bool
```

Send notification to the referenced object. This unblocks at least one of the blocked threads (as opposed to unblocking all of them, as seen with Threaded::notify()).

### Parameters

This function has no parameters.

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
    $thread->notifyOne();
}, $my);
var_dump($my->join());
?>
```

The above example will output:

```
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/threaded.notifyone.php
