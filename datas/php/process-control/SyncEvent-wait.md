# SyncEvent::wait

Source: https://devdocs.io/php/syncevent.wait

(PECL sync >= 1.0.0)

SyncEvent::wait — Waits for the event to be fired/set

### Description

```
public SyncEvent::wait(int $wait = -1): bool
```

Waits for the SyncEvent object to be fired.

### Parameters

The number of milliseconds to wait for the event to be fired. A value of -1 is infinite.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 SyncEvent::wait() example

```
<?php
// In a web application:
$event = new SyncEvent("GetAppReport");
$event->fire();

// In a cron job:
$event = new SyncEvent("GetAppReport");
$event->wait();
?>
```

### See Also

- SyncEvent::fire() - Fires/sets the event

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/syncevent.wait.php
