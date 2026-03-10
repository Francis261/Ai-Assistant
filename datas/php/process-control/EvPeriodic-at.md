# EvPeriodic::at

Source: https://devdocs.io/php/evperiodic.at

(PECL ev >= 0.2.0)

EvPeriodic::at — Returns the absolute time that this watcher is supposed to trigger next

### Description

```
public EvPeriodic::at(): float
```

When the watcher is active, returns the absolute time that this watcher is supposed to trigger next. This is not the same as the offset argument to EvPeriodic::set() or EvPeriodic::__construct(), but indeed works even in interval mode.

### Parameters

This function has no parameters.

### Return Values

Returns the absolute time this watcher is supposed to trigger next in seconds.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evperiodic.at.php
