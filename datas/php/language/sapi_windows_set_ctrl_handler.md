# sapi_windows_set_ctrl_handler

Source: https://devdocs.io/php/function.sapi-windows-set-ctrl-handler

(PHP 7 >= 7.4.0, PHP 8)

sapi_windows_set_ctrl_handler — Set or remove a CTRL event handler

### Description

```
sapi_windows_set_ctrl_handler(?callable $handler, bool $add = true): bool
```

Sets or removes a CTRL event handler, which allows Windows CLI processes to intercept or ignore CTRL+C and CTRL+BREAK events. Note that in multithreaded environments, this is only possible when called from the main thread.

### Parameters

A callback function to set or remove. If set, this function will be called whenever a CTRL +C or CTRL +BREAK event occurs. The function is supposed to have the following signature:

```
handler(int $event): void
```

If true, the handler is set. If false, the handler is removed.

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Basic sapi_windows_set_ctrl_handler() Usage

This example shows how to intercept CTRL events.

```
<?php
function ctrl_handler(int $event)
{
    switch ($event) {
        case PHP_WINDOWS_EVENT_CTRL_C:
            echo "You have pressed CTRL+C\n";
            break;
        case PHP_WINDOWS_EVENT_CTRL_BREAK:
            echo "You have pressed CTRL+BREAK\n";
            break;
    }
}

sapi_windows_set_ctrl_handler('ctrl_handler');
while (true); // infinite loop, so the handler can be triggered
?>
```

### See Also

- sapi_windows_generate_ctrl_event() - Send a CTRL event to another process

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.sapi-windows-set-ctrl-handler.php
