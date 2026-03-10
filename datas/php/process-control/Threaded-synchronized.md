# Threaded::synchronized

Source: https://devdocs.io/php/threaded.synchronized

(PECL pthreads >= 2.0.0)

Threaded::synchronized — Synchronization

### Description

```
public Threaded::synchronized(Closure $block, mixed ...$args): mixed
```

Executes the block while retaining the referenced objects synchronization lock for the calling context

### Parameters

The block of code to execute

Variable length list of arguments to use as function arguments to the block

### Return Values

The return value from the block

### Examples

Example #1 Synchronizing

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
 https://www.php.net/manual/en/threaded.synchronized.php
