# Worker::unstack

Source: https://devdocs.io/php/worker.unstack

(PECL pthreads >= 2.0.0)

Worker::unstack — Unstacking work

### Description

```
public Worker::unstack(): int
```

Removes the first task (the oldest one) in the stack.

### Parameters

This function has no parameters.

### Return Values

The new size of the stack.

### Changelog

### Examples

Example #1 Removing objects from the stack of Workers

```
<?php
$my = new Worker();
$work = new class extends Threaded {};

var_dump($my->stack($work));
var_dump($my->unstack());
```

The above example will output:

```
int(1)
int(0)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/worker.unstack.php
