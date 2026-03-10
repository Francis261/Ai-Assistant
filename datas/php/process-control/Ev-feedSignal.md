# Ev::feedSignal

Source: https://devdocs.io/php/ev.feedsignal

(PECL ev >= 0.2.0)

Ev::feedSignal — Feed a signal event info Ev

### Description

```
final public static Ev::feedSignal( int $signum ): void
```

Simulates a signal receive. It is safe to call this function at any time, from any context, including signal handlers or random threads. Its main use is to customise signal handling in the process.

Unlike Ev::feedSignalEvent(), this works regardless of which loop has registered the signal.

### Parameters

Signal number. See signal(7) man page for detals. You can use constants exported by pcntl extension.

### Return Values

No value is returned.

### See Also

- Ev::feedSignalEvent() - Feed signal event into the default loop

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ev.feedsignal.php
