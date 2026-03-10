# EvLoop::run

Source: https://devdocs.io/php/evloop.run

(PECL ev >= 0.2.0)

EvLoop::run — Begin checking for events and calling callbacks for the loop

### Description

```
public EvLoop::run( int $flags  = 0 ): void
```

Begin checking for events and calling callbacks for the current event loop. Returns when a callback calls Ev::stop() method, or the flags are nonzero(in which case the return value is true) or when there are no active watchers which reference the loop( EvWatcher::keepalive() is true), in which case the return value will be false. The return value can generally be interpreted as if true, there is more work left to do.

### Parameters

Optional parameter flags can be one of the following:

See the run flag constants.

### Return Values

No value is returned.

### See Also

- EvLoop::stop() - Stops the event loop
- Ev::run() - Begin checking for events and calling callbacks for the default loop

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evloop.run.php
