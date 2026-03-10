# Ev::run

Source: https://devdocs.io/php/ev.run

(PECL ev >= 0.2.0)

Ev::run — Begin checking for events and calling callbacks for the default loop

### Description

```
final public static Ev::run( int $flags  = ?): void
```

Begin checking for events and calling callbacks for the default loop. Returns when a callback calls Ev::stop() method, or the flags are nonzero(in which case the return value is true) or when there are no active watchers which reference the loop( EvWatcher::keepalive() is true), in which case the return value will be false. The return value can generally be interpreted as if true, there is more work left to do.

### Parameters

Optional parameter flags can be one of the following:

See the run flag constants.

### Return Values

No value is returned.

### See Also

- Ev::stop() - Stops the default event loop
- EvLoop::run() - Begin checking for events and calling callbacks for the loop

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ev.run.php
