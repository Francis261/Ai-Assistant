# ibase_free_event_handler

Source: https://devdocs.io/php/function.ibase-free-event-handler

(PHP 5, PHP 7 < 7.4.0)

ibase_free_event_handler — Cancels a registered event handler

### Description

```
ibase_free_event_handler(resource $event): bool
```

This function causes the registered event handler specified by event to be cancelled. The callback function will no longer be called for the events it was registered to handle.

### Parameters

An event resource, created by ibase_set_event_handler().

### Return Values

Returns true on success or false on failure.

### See Also

- ibase_set_event_handler() - Register a callback function to be called when events are posted

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ibase-free-event-handler.php
