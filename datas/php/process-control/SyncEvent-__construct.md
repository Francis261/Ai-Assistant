# SyncEvent::__construct

Source: https://devdocs.io/php/syncevent.construct

(PECL sync >= 1.0.0)

SyncEvent::__construct — Constructs a new SyncEvent object

### Description

```
public SyncEvent::__construct(string $name = ?, bool $manual = false, bool $prefire = false)
```

Constructs a named or unnamed event object.

### Parameters

The name of the event if this is a named event object.

Note:

If the name already exists, it must be able to be opened by the current user that the process is running as or an exception will be thrown with a meaningless error message.

Specifies whether or not the event object must be reset manually.

Note:

Manual reset event objects allow all waiting processes through until the object is reset.

Specifies whether or not to prefire (signal) the event object.

Note:

Only has impact if the calling process/thread is the first to create the object.

### Return Values

The new SyncEvent object.

### Errors/Exceptions

An exception is thrown if the event object cannot be created or opened.

### Examples

Example #1 SyncEvent::__construct() example

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

### Changelog

Added prefire.

### See Also

- SyncEvent::fire() - Fires/sets the event
- SyncEvent::reset() - Resets a manual event
- SyncEvent::wait() - Waits for the event to be fired/set

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/syncevent.construct.php
