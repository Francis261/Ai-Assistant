# SyncEvent::reset

Source: https://devdocs.io/php/syncevent.reset

(PECL sync >= 1.0.0)

SyncEvent::reset — Resets a manual event

### Description

```
public SyncEvent::reset(): bool
```

Resets a SyncEvent object that has been fired/set. Only valid for manual event objects.

### Parameters

This function has no parameters.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 SyncEvent::reset() example

```
<?php
// In a web application:
$event = new SyncEvent("DemoApplication", true);
$event->wait();

// In a cron job:
$event = new SyncEvent("DemoApplication", true);
$event->reset();
/* ... Do some maintenance task(s) ... */
$event->fire();
?>
```

### See Also

- SyncEvent::fire() - Fires/sets the event
- SyncEvent::reset()
- SyncEvent::wait() - Waits for the event to be fired/set

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/syncevent.reset.php
