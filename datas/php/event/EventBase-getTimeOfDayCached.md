# EventBase::getTimeOfDayCached

Source: https://devdocs.io/php/eventbase.gettimeofdaycached

(PECL event >= 1.2.6-beta)

EventBase::getTimeOfDayCached — Returns the current event base time

### Description

```
public EventBase::getTimeOfDayCached(): float
```

On success returns the current time(as returned by gettimeofday() ), looking at the cached value in base if possible, and calling gettimeofday() or clock_gettime() as appropriate if there is no cached time.

### Parameters

This function has no parameters.

### Return Values

Returns the current event base time. On failure returns null.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbase.gettimeofdaycached.php
