# pcntl_sigtimedwait

Source: https://devdocs.io/php/function.pcntl-sigtimedwait

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

pcntl_sigtimedwait — Waits for signals, with a timeout

### Description

```
pcntl_sigtimedwait(
 array $signals,
 array &$info = [],
 int $seconds = 0,
 int $nanoseconds = 0
): int|false
```

The pcntl_sigtimedwait() function operates in exactly the same way as pcntl_sigwaitinfo() except that it takes two additional parameters, seconds and nanoseconds, which enable an upper bound to be placed on the time for which the script is suspended.

### Parameters

Array of signals to wait for.

The info is set to an array containing information about the signal. See pcntl_sigwaitinfo().

Timeout in seconds.

Timeout in nanoseconds.

### Return Values

pcntl_sigtimedwait() returns a signal number on success, or false on failure.

### Changelog

### See Also

- pcntl_sigprocmask() - Sets and retrieves blocked signals
- pcntl_sigwaitinfo() - Waits for signals

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pcntl-sigtimedwait.php
