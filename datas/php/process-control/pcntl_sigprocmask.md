# pcntl_sigprocmask

Source: https://devdocs.io/php/function.pcntl-sigprocmask

(PHP 5 >= 5.3.0, PHP 7, PHP 8)

pcntl_sigprocmask — Sets and retrieves blocked signals

### Description

```
pcntl_sigprocmask(int $mode, array $signals, array &$old_signals = null): bool
```

The pcntl_sigprocmask() function adds, removes or sets blocked signals, depending on the mode parameter.

### Parameters

Sets the behavior of pcntl_sigprocmask(). Possible values:

- SIG_BLOCK: Add the signals to the currently blocked signals.
- SIG_UNBLOCK: Remove the signals from the currently blocked signals.
- SIG_SETMASK: Replace the currently blocked signals by the given list of signals.

List of signals.

The old_signals parameter is set to an array containing the list of the previously blocked signals.

### Return Values

Returns true on success or false on failure.

### Changelog

### Examples

Example #1 pcntl_sigprocmask() example

```
<?php
pcntl_sigprocmask(SIG_BLOCK, array(SIGHUP));
$oldset = array();
pcntl_sigprocmask(SIG_UNBLOCK, array(SIGHUP), $oldset);
?>
```

### See Also

- pcntl_sigwaitinfo() - Waits for signals
- pcntl_sigtimedwait() - Waits for signals, with a timeout

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pcntl-sigprocmask.php
