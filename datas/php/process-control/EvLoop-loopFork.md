# EvLoop::loopFork

Source: https://devdocs.io/php/evloop.loopfork

(PECL ev >= 0.2.0)

EvLoop::loopFork — Must be called after a fork

### Description

```
public EvLoop::loopFork(): void
```

Must be called after a fork in the child, before entering or continuing the event loop. An alternative is to use Ev::FLAG_FORKCHECK which calls this function automatically, at some performance loss (refer to the » libev documentation ).

### Parameters

This function has no parameters.

### Return Values

No value is returned.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/evloop.loopfork.php
