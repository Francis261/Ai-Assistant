# pcntl_alarm

Source: https://devdocs.io/php/function.pcntl-alarm

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

pcntl_alarm — Set an alarm clock for delivery of a signal

### Description

```
pcntl_alarm(int $seconds): int
```

Creates a timer that will send a SIGALRM signal to the process after the given number of seconds. Any call to pcntl_alarm() will cancel any previously set alarm.

### Parameters

The number of seconds to wait. If seconds is zero, no new alarm is created.

### Return Values

Returns the time in seconds that any previously scheduled alarm had remaining before it was to be delivered, or 0 if there was no previously scheduled alarm.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pcntl-alarm.php
