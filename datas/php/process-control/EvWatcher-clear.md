# EvWatcher::clear

Source: https://devdocs.io/php/evwatcher.clear

(PECL ev >= 0.2.0)

EvWatcher::clear — Clear watcher pending status

### Description

```
public EvWatcher::clear(): int
```

If the watcher is pending, this method clears its pending status and returns its revents bitset(as if its callback was invoked). If the watcher isn't pending it does nothing and returns 0.

Sometimes it can be useful to "poll" a watcher instead of waiting for its callback to be invoked, which can be accomplished with this function.

### Parameters

This function has no parameters.

### Return Values

In case if the watcher is pending, returns revents bitset as if the watcher callback had been invoked. Otherwise returns 0.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evwatcher.clear.php
