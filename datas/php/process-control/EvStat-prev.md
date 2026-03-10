# EvStat::prev

Source: https://devdocs.io/php/evstat.prev

(PECL ev >= 0.2.0)

EvStat::prev — Returns the previous set of values returned by EvStat::attr

### Description

```
public EvStat::prev(): void
```

Just like EvStat::attr(), but returns the previous set of values.

### Parameters

This function has no parameters.

### Return Values

Returns an array with the same structure as the array returned by EvStat::attr(). The array contains previously detected values.

### See Also

- EvStat::attr() - Returns the values most recently detected by Ev
- EvStat::stat() - Initiates the stat call

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evstat.prev.php
