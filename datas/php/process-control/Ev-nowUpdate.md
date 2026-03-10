# Ev::nowUpdate

Source: https://devdocs.io/php/ev.nowupdate

(PECL ev >= 0.2.0)

Ev::nowUpdate — Establishes the current time by querying the kernel, updating the time returned by Ev::now in the progress

### Description

```
final public static Ev::nowUpdate(): void
```

Establishes the current time by querying the kernel, updating the time returned by Ev::now() in the progress. This is a costly operation and is usually done automatically within Ev::run().

This method is rarely useful, but when some event callback runs for a very long time without entering the event loop, updating libev 's consideration of the current time is a good idea.

### Parameters

This function has no parameters.

### Return Values

No value is returned.

### See Also

- Ev::now() - Returns the time when the last iteration of the default event loop has started

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ev.nowupdate.php
