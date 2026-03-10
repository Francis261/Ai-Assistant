# Ev::depth

Source: https://devdocs.io/php/ev.depth

(PECL ev >= 0.2.0)

Ev::depth — Returns recursion depth

### Description

```
final public static Ev::depth(): int
```

The number of times Ev::run() was entered minus the number of times Ev::run() was exited normally, in other words, the recursion depth. Outside Ev::run(), this number is 0. In a callback, this number is 1, unless Ev::run() was invoked recursively (or from another thread), in which case it is higher.

### Parameters

This function has no parameters.

### Return Values

ev_depth() returns recursion depth of the default loop.

### See Also

- Ev::iteration() - Return the number of times the default event loop has polled for new events

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ev.depth.php
