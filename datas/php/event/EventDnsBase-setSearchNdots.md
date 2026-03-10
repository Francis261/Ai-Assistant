# EventDnsBase::setSearchNdots

Source: https://devdocs.io/php/eventdnsbase.setsearchndots

(PECL event >= 1.2.6-beta)

EventDnsBase::setSearchNdots — Set the 'ndots' parameter for searches

### Description

```
public EventDnsBase::setSearchNdots( int $ndots ): bool
```

Set the 'ndots' parameter for searches. Sets the number of dots which, when found in a name, causes the first query to be without any search domain.

### Parameters

The number of dots.

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventdnsbase.setsearchndots.php
