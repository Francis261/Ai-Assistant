# Thread::isJoined

Source: https://devdocs.io/php/thread.isjoined

(PECL pthreads >= 2.0.0)

Thread::isJoined — State Detection

### Description

```
public Thread::isJoined(): bool
```

Tell if the referenced Thread has been joined

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Detect the state of the referenced Thread

```
<?php
class My extends Thread {
    public function run() {
        $this->synchronized(function($thread){
            if (!$thread->done)
                $thread->wait();
        }, $this);
    }
}
$my = new My();
$my->start();
var_dump($my->isJoined());
$my->synchronized(function($thread){
    $thread->done = true;
    $thread->notify();
}, $my);
?>
```

The above example will output:

```
bool(false)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/thread.isjoined.php
