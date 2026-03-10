# msg_get_queue

Source: https://devdocs.io/php/function.msg-get-queue

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

msg_get_queue — Create or attach to a message queue

### Description

```
msg_get_queue(int $key, int $permissions = 0666): SysvMessageQueue|false
```

msg_get_queue() returns an id that can be used to access the System V message queue with the given key. The first call creates the message queue with the optional permissions. A second call to msg_get_queue() for the same key will return a different message queue identifier, but both identifiers access the same underlying message queue.

### Parameters

Message queue numeric ID

Queue permissions. Default to 0666. If the message queue already exists, the permissions will be ignored.

### Return Values

Returns SysvMessageQueue instance that can be used to access the System V message queue, or false on failure.

### Changelog

### See Also

- msg_remove_queue() - Destroy a message queue
- msg_receive() - Receive a message from a message queue
- msg_send() - Send a message to a message queue
- msg_stat_queue() - Returns information from the message queue data structure
- msg_set_queue() - Set information in the message queue data structure

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.msg-get-queue.php
