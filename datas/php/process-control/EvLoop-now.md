# EvLoop::now

Source: https://devdocs.io/php/evloop.now

(PECL ev >= 0.2.0)

EvLoop::now — Returns the current "event loop time"

### Description

```
public EvLoop::now(): float
```

Returns the current "event loop time", which is the time the event loop received events and started processing them. This timestamp does not change as long as callbacks are being processed, and this is also the base time used for relative timers. You can treat it as the timestamp of the event occurring(or more correctly, libev finding out about it).

### Parameters

This function has no parameters.

### Return Values

Returns time of the event loop in (fractional) seconds.

### See Also

- Ev::now() - Returns the time when the last iteration of the default event loop has started

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evloop.now.php
