# msg_stat_queue

Source: https://devdocs.io/php/function.msg-stat-queue

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

msg_stat_queue — Returns information from the message queue data structure

### Description

```
msg_stat_queue(SysvMessageQueue $queue): array|false
```

msg_stat_queue() returns the message queue meta data for the message queue specified by the queue. This is useful, for example, to determine which process sent the message that was just received.

### Parameters

The message queue.

### Return Values

On success, the return value is an array whose keys and values have the following meanings:

Returns false on failure.

### Changelog

### See Also

- msg_remove_queue() - Destroy a message queue
- msg_receive() - Receive a message from a message queue
- msg_get_queue() - Create or attach to a message queue
- msg_set_queue() - Set information in the message queue data structure

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.msg-stat-queue.php
