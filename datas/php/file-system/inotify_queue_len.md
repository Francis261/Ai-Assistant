# inotify_queue_len

Source: https://devdocs.io/php/function.inotify-queue-len

(PECL inotify >= 0.1.2)

inotify_queue_len — Return a number upper than zero if there are pending events

### Description

```
inotify_queue_len(resource $inotify_instance): int
```

This function allows to know if inotify_read() will block or not. If a number upper than zero is returned, there are pending events and inotify_read() will not block.

### Parameters

Resource returned by inotify_init()

### Return Values

Returns a number upper than zero if there are pending events.

### See Also

- inotify_init() - Initialize an inotify instance
- stream_select() - Runs the equivalent of the select() system call on the given arrays of streams with a timeout specified by seconds and microseconds
- stream_set_blocking() - Set blocking/non-blocking mode on a stream

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.inotify-queue-len.php
