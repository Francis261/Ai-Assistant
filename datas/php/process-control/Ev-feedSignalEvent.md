# Ev::feedSignalEvent

Source: https://devdocs.io/php/ev.feedsignalevent

(No version information available, might only be in Git)

Ev::feedSignalEvent — Feed signal event into the default loop

### Description

```
final public static Ev::feedSignalEvent( int $signum ): void
```

Feed signal event into the default loop. Ev will react to this call as if the signal specified by signal had occurred.

### Parameters

Signal number. See signal(7) man page for detals. See also constants exported by pcntl extension.

### Return Values

No value is returned.

### See Also

- Ev::feedSignal() - Feed a signal event info Ev

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ev.feedsignalevent.php
