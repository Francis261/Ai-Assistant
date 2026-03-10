# Ev::iteration

Source: https://devdocs.io/php/ev.iteration

(PECL ev >= 0.2.0)

Ev::iteration — Return the number of times the default event loop has polled for new events

### Description

```
final public static Ev::iteration(): int
```

Return the number of times the event loop has polled for new events. Sometimes useful as a generation counter.

### Parameters

This function has no parameters.

### Return Values

Returns number of polls of the default event loop.

### See Also

- Ev::depth() - Returns recursion depth

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/ev.iteration.php
