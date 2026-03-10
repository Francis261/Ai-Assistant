# EvTimer::again

Source: https://devdocs.io/php/evtimer.again

(PECL ev >= 0.2.0)

EvTimer::again — Restarts the timer watcher

### Description

```
public EvTimer::again(): void
```

This will act as if the timer timed out and restart it again if it is repeating. The exact semantics are:

1. if the timer is pending, its pending status is cleared.
2. if the timer is started but non-repeating, stop it (as if it timed out).
3. if the timer is repeating, either start it if necessary (with the repeat value), or reset the running timer to the repeat value.

if the timer is pending, its pending status is cleared.

if the timer is started but non-repeating, stop it (as if it timed out).

if the timer is repeating, either start it if necessary (with the repeat value), or reset the running timer to the repeat value.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### See Also

- EvWatcher::stop() - Stops the watcher

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evtimer.again.php
