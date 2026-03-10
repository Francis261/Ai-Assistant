# EvStat::stat

Source: https://devdocs.io/php/evstat.stat

(PECL ev >= 0.2.0)

EvStat::stat — Initiates the stat call

### Description

```
public EvStat::stat(): bool
```

Initiates the stat call(updates internal cache). It stats(using lstat) the path specified in the watcher and sets to the values found.

### Parameters

This function has no parameters.

### Return Values

Returns true if path exists. Otherwise false.

### See Also

- EvStat::attr() - Returns the values most recently detected by Ev
- EvStat::prev() - Returns the previous set of values returned by EvStat::attr

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evstat.stat.php
