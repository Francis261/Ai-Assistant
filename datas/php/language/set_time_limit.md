# set_time_limit

Source: https://devdocs.io/php/function.set-time-limit

(PHP 4, PHP 5, PHP 7, PHP 8)

set_time_limit — Limits the maximum execution time

### Description

```
set_time_limit(int $seconds): bool
```

Set the number of seconds a script is allowed to run. If this is reached, the script returns a fatal error. The default limit is 30 seconds or, if it exists, the max_execution_time value defined in the php.ini.

When called, set_time_limit() restarts the timeout counter from zero. In other words, if the timeout is the default 30 seconds, and 25 seconds into script execution a call such as set_time_limit(20) is made, the script will run for a total of 45 seconds before timing out.

### Parameters

The maximum execution time, in seconds. If set to zero, no time limit is imposed.

### Return Values

Returns true on success, or false on failure.

### Notes

Note:

The set_time_limit() function and the configuration directive max_execution_time only affect the execution time of the script itself. Any time spent on activity that happens outside the execution of the script such as system calls using system(), stream operations, database queries, etc. is not included when determining the maximum time that the script has been running. This is not true on Windows where the measured time is real.

### See Also

- max_execution_time
- max_input_time

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.set-time-limit.php
