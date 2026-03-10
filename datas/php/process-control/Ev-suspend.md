# Ev::suspend

Source: https://devdocs.io/php/ev.suspend

(PECL ev >= 0.2.0)

Ev::suspend — Suspend the default event loop

### Description

```
final public static Ev::suspend(): void
```

Ev::suspend() and Ev::resume() methods suspend and resume the default loop correspondingly.

All timer watchers will be delayed by the time spend between suspend and resume, and all periodic watchers will be rescheduled(that is, they will lose any events that would have occurred while suspended).

After calling Ev::suspend() it is not allowed to call any function on the given loop other than Ev::resume(). Also it is not allowed to call Ev::resume() without a previous call to Ev::suspend().

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### See Also

- Ev::resume() - Resume previously suspended default event loop

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ev.suspend.php
