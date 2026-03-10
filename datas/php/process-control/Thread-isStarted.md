# Thread::isStarted

Source: https://devdocs.io/php/thread.isstarted

(PECL pthreads >= 2.0.0)

Thread::isStarted — State Detection

### Description

```
public Thread::isStarted(): bool
```

Tell if the referenced Thread was started

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Tell if the referenced Thread was started

```
<?php
$worker = new Worker();
$worker->start();
var_dump($worker->isStarted());
?>
```

The above example will output:

```
bool(true)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/thread.isstarted.php
