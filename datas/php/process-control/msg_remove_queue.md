# msg_remove_queue

Source: https://devdocs.io/php/function.msg-remove-queue

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

msg_remove_queue — Destroy a message queue

### Description

```
msg_remove_queue(SysvMessageQueue $queue): bool
```

msg_remove_queue() destroys the message queue specified by the queue. Only use this function when all processes have finished working with the message queue and you need to release the system resources held by it.

### Parameters

The message queue.

### Return Values

Returns true on success or false on failure.

### Changelog

### See Also

- msg_get_queue() - Create or attach to a message queue
- msg_receive() - Receive a message from a message queue
- msg_stat_queue() - Returns information from the message queue data structure
- msg_set_queue() - Set information in the message queue data structure

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.msg-remove-queue.php
