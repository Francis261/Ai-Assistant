# SyncEvent::fire

Source: https://devdocs.io/php/syncevent.fire

(PECL sync >= 1.0.0)

SyncEvent::fire — Fires/sets the event

### Description

```
public SyncEvent::fire(): bool
```

Fires/sets a SyncEvent object. Lets multiple threads through that are waiting if the event object was created with a manual value of true.

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 SyncEvent::fire() example

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

- SyncEvent::reset() - Resets a manual event
- SyncEvent::wait() - Waits for the event to be fired/set

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/syncevent.fire.php
