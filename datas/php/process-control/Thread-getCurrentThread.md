# Thread::getCurrentThread

Source: https://devdocs.io/php/thread.getcurrentthread

(PECL pthreads >= 2.0.0)

Thread::getCurrentThread — Identification

### Description

```
public static Thread::getCurrentThread(): Thread
```

Return a reference to the currently executing Thread

### Parameters

This function has no parameters.

### Return Values

An object representing the currently executing Thread

### Examples

Example #1 Return the currently executing Thread

```
<?php
class My extends Thread {
    public function run() {
        var_dump(Thread::getCurrentThread());
    }
}
$my = new My();
$my->start();
?>
```

The above example will output:

```
object(My)#2 (0) {
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/thread.getcurrentthread.php
