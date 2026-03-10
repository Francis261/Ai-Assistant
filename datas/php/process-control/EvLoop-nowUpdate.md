# EvLoop::nowUpdate

Source: https://devdocs.io/php/evloop.nowupdate

(PECL ev >= 0.2.0)

EvLoop::nowUpdate — Establishes the current time by querying the kernel, updating the time returned by EvLoop::now in the progress

### Description

```
public EvLoop::nowUpdate(): void
```

Establishes the current time by querying the kernel, updating the time returned by EvLoop::now() in the progress. This is a costly operation and is usually done automatically within EvLoop::run().

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### See Also

- EvLoop::now() - Returns the current "event loop time"
- Ev::nowUpdate() - Establishes the current time by querying the kernel, updating the time returned by Ev::now in the progress

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evloop.nowupdate.php
