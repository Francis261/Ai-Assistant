# Threaded::isRunning

Source: https://devdocs.io/php/thread.isrunning

(PECL pthreads >= 2.0.0)

Threaded::isRunning — State Detection

### Description

```
public Threaded::isRunning(): bool
```

Tell if the referenced object is executing

### Parameters

This function has no parameters.

### Return Values

A boolean indication of state

Note:

A object is considered running while executing the run method

### Examples

Example #1 Detect the state of the referenced object

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
var_dump($my->isRunning());
$my->synchronized(function($thread){
    $thread->done = true;
    $thread->notify();
}, $my);
?>
```

The above example will output:

```
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/thread.isrunning.php
