# EventConfig::setMaxDispatchInterval

Source: https://devdocs.io/php/eventconfig.setmaxdispatchinterval

(PECL event >= 2.1.0-alpha)

EventConfig::setMaxDispatchInterval — Prevents priority inversion

### Description

```
public EventConfig::setMaxDispatchInterval( int $max_interval ,  int $max_callbacks ,  int $min_priority ): void
```

Prevents priority inversion by limiting how many low-priority event callbacks can be invoked before checking for more high-priority events.

Note:

Available since libevent 2.1.0-alpha.

### Parameters

An interval after which Libevent should stop running callbacks and check for more events, or 0, if there should be no such interval.

A number of callbacks after which Libevent should stop running callbacks and check for more events, or -1, if there should be no such limit.

A priority below which max_interval and max_callbacks should not be enforced. If this is set to 0, they are enforced for events of every priority; if it's set to 1, they're enforced for events of priority 1 and above, and so on.

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventconfig.setmaxdispatchinterval.php
