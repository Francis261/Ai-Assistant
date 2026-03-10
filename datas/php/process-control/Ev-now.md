# Ev::now

Source: https://devdocs.io/php/ev.now

(PECL ev >= 0.2.0)

Ev::now — Returns the time when the last iteration of the default event loop has started

### Description

```
final public static Ev::now(): float
```

Returns the time when the last iteration of the default event loop has started. This is the time that timers( EvTimer and EvPeriodic) are based on, and referring to it is usually faster then calling Ev::time().

### Parameters

This function has no parameters.

### Return Values

Returns number of seconds(fractional) representing the time when the last iteration of the default event loop has started.

### See Also

- Ev::nowUpdate() - Establishes the current time by querying the kernel, updating the time returned by Ev::now in the progress

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ev.now.php
