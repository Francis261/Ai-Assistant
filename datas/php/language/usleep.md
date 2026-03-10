# usleep

Source: https://devdocs.io/php/function.usleep

(PHP 4, PHP 5, PHP 7, PHP 8)

usleep — Delay execution in microseconds

### Description

```
usleep(int $microseconds): void
```

Delays program execution for the given number of microseconds.

### Parameters

Halt time in microseconds. A microsecond is one millionth of a second.

Note: Values larger than 1000000 (i.e. sleeping for more than a second) may not be supported by the operating system. Use sleep() instead.

Note: The sleep may be lengthened slightly (i.e. may be longer than microseconds) by any system activity or by the time spent processing the call or by the granularity of system timers.

### Return Values

No value is returned.

### Examples

Example #1 usleep() example

```
<?php

// Current time
echo (new DateTime('now'))->format('H:i:s.v'), "\n";

// wait for 2 milliseconds
usleep(2000);

// back!
echo (new DateTime('now'))->format('H:i:s.v'), "\n";

// wait for 30 milliseconds
usleep(30000);

// back again!
echo (new DateTime('now'))->format('H:i:s.v'), "\n";

?>
```

The above example will output:

```
11:13:28.005
11:13:28.007
11:13:28.037
```

### See Also

- sleep() - Delay execution
- time_nanosleep() - Delay for a number of seconds and nanoseconds
- time_sleep_until() - Make the script sleep until the specified time
- set_time_limit() - Limits the maximum execution time

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.usleep.php
