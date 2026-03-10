# Threaded::notify

Source: https://devdocs.io/php/threaded.notify

(PECL pthreads >= 2.0.0)

Threaded::notify — Synchronization

### Description

```
public Threaded::notify(): bool
```

Send notification to the referenced object

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
 https://www.php.net/manual/en/threaded.notify.php
