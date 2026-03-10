# EvTimer::set

Source: https://devdocs.io/php/evtimer.set

(PECL ev >= 0.2.0)

EvTimer::set — Configures the watcher

### Description

```
public EvTimer::set( float $after ,  float $repeat ): void
```

Configures the watcher

### Parameters

Configures the timer to trigger after after seconds.

If repeat is 0.0, then it will automatically be stopped once the timeout is reached. If it is positive, then the timer will automatically be configured to trigger again every repeat seconds later, until stopped manually.

### Return Values

No value is returned.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evtimer.set.php
