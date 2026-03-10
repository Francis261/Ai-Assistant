# ibase_wait_event

Source: https://devdocs.io/php/function.ibase-wait-event

(PHP 5, PHP 7 < 7.4.0)

ibase_wait_event — Wait for an event to be posted by the database

### Description

```
ibase_wait_event(string $event_name, string ...$event_names): string
```

```
ibase_wait_event(resource $connection, string $event_name, string ...$event_names): string
```

This function suspends execution of the script until one of the specified events is posted by the database. The name of the event that was posted is returned. This function accepts up to 15 event arguments.

### Parameters

The event name.

### Return Values

Returns the name of the event that was posted.

### See Also

- ibase_set_event_handler() - Register a callback function to be called when events are posted
- ibase_free_event_handler() - Cancels a registered event handler

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.ibase-wait-event.php
