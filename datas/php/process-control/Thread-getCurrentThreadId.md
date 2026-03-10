# Thread::getCurrentThreadId

Source: https://devdocs.io/php/thread.getcurrentthreadid

(PECL pthreads >= 2.0.0)

Thread::getCurrentThreadId — Identification

### Description

```
public static Thread::getCurrentThreadId(): int
```

Will return the identity of the currently executing Thread

### Parameters

This function has no parameters.

### Return Values

A numeric identity

### Examples

Example #1 Return the identity of the currently executing Thread

```
<?php
class My extends Thread {
    public function run() {
        printf("%s is Thread #%lu\n", __CLASS__, Thread::getCurrentThreadId());
    }
}
$my = new My();
$my->start();
?>
```

The above example will output:

```
My is Thread #123456778899
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/thread.getcurrentthreadid.php
