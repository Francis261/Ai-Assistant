# Thread::getCreatorId

Source: https://devdocs.io/php/thread.getcreatorid

(PECL pthreads >= 2.0.0)

Thread::getCreatorId — Identification

### Description

```
public Thread::getCreatorId(): int
```

Will return the identity of the Thread that created the referenced Thread

### Parameters

This function has no parameters.

### Return Values

A numeric identity

### Examples

Example #1 Return the identity of the Thread or Process that created the referenced Thread

```
<?php
class My extends Thread {
    public function run() {
        printf("%s created by Thread #%lu\n", __CLASS__, $this->getCreatorId());
    }
}
$my = new My();
$my->start();
?>
```

The above example will output:

```
My created by Thread #123456778899
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/thread.getcreatorid.php
