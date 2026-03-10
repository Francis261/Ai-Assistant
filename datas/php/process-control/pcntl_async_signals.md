# pcntl_async_signals

Source: https://devdocs.io/php/function.pcntl-async-signals

(PHP 7 >= 7.1.0, PHP 8)

pcntl_async_signals — Enable/disable asynchronous signal handling or return the old setting

### Description

```
pcntl_async_signals(?bool $enable = null): bool
```

If the enable parameter is null, pcntl_async_signals() returns whether asynchronous signal handling is enabled. Otherwise, asynchronous signal handling is enabled or disabled.

### Parameters

Whether asynchronous signal handling should be enabled.

### Return Values

When used as getter (enable parameter is null) it returns whether asynchronous signal handling is enabled. When used as setter (enable parameter is not null), it returns whether asynchronous signal handling was enabled before the function call.

### Changelog

### See Also

- declare

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.pcntl-async-signals.php
