# EvTimer::createStopped

Source: https://devdocs.io/php/evtimer.createstopped

(PECL ev >= 0.2.0)

EvTimer::createStopped — Creates EvTimer stopped watcher object

### Description

```
final public static EvTimer::createStopped(
  float $after ,
  float $repeat ,
  callable $callback ,
  mixed $data  = null ,
  int $priority  = 0 
): EvTimer
```

Creates EvTimer stopped watcher object. Unlike EvTimer::__construct(), this method doesn't start the watcher automatically.

### Parameters

Configures the timer to trigger after after seconds.

If repeat is 0.0, then it will automatically be stopped once the timeout is reached. If it is positive, then the timer will automatically be configured to trigger again every repeat seconds later, until stopped manually.

See Watcher callbacks.

Custom data associated with the watcher.

Watcher priority

### Return Values

Returns EvTimer watcher object on success.

### Examples

Example #1 Monotor changes of /var/log/messages. Avoid missing updates by means of one second delay

```
<?php
$timer = EvTimer::createStopped(0., 1.02, function ($w) {
    $w->stop();

    $stat = $w->data;

    // 1 second after the most recent change of the file
    printf("Current size: %ld\n", $stat->attr()['size']);
});

$stat = new EvStat("/var/log/messages", 0., function () use ($timer) {
    // Reset timer watcher
    $timer->again();
});

$timer->data = $stat;

Ev::run();
?>
```

### See Also

- EvTimer::__construct() - Constructs an EvTimer watcher object
- EvPeriodic

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evtimer.createstopped.php
