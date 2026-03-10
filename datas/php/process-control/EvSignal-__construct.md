# EvSignal::__construct

Source: https://devdocs.io/php/evsignal.construct

(PECL ev >= 0.2.0)

EvSignal::__construct — Constructs EvSignal watcher object

### Description

Constructs EvSignal watcher object and starts it automatically. For a stopped periodic watcher consider using EvSignal::createStopped() method.

### Parameters

Signal number. See constants exported by pcntl extension. See also signal(7) man page.

See Watcher callbacks.

Custom data associated with the watcher.

Watcher priority

### Examples

Example #1 Handle SIGTERM signal

```
<?php
$w = new EvSignal(SIGTERM, function ($watcher) {
    echo "SIGTERM received\n";
    $watcher->stop();
});

Ev::run();
?>
```

### See Also

- EvSignal::createStopped() - Create stopped EvSignal watcher object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evsignal.construct.php
