# msg_receive

Source: https://devdocs.io/php/function.msg-receive

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

msg_receive — Receive a message from a message queue

### Description

```
msg_receive(
 SysvMessageQueue $queue,
 int $desired_message_type,
 int &$received_message_type,
 int $max_message_size,
 mixed &$message,
 bool $unserialize = true,
 int $flags = 0,
 int &$error_code = null
): bool
```

msg_receive() will receive the first message from the specified queue of the type specified by desired_message_type.

### Parameters

The message queue.

If desired_message_type is 0, the message from the front of the queue is returned. If desired_message_type is greater than 0, then the first message of that type is returned. If desired_message_type is less than 0, the first message on the queue with a type less than or equal to the absolute value of desired_message_type will be read. If no messages match the criteria, your script will wait until a suitable message arrives on the queue. You can prevent the script from blocking by specifying MSG_IPC_NOWAIT in the flags parameter.

The type of the message that was received will be stored in this parameter.

The maximum size of message to be accepted is specified by the max_message_size; if the message in the queue is larger than this size the function will fail (unless you set flags as described below).

The received message will be stored in message, unless there were errors receiving the message.

If set to true, the message is treated as though it was serialized using the same mechanism as the session module. The message will be unserialized and then returned to your script. This allows you to easily receive arrays or complex object structures from other PHP scripts, or if you are using the WDDX serializer, from any WDDX compatible source.

If unserialize is false, the message will be returned as a binary-safe string.

The optional flags allows you to pass flags to the low-level msgrcv system call. It defaults to 0, but you may specify one or more of the following values (by adding or ORing them together).

If the function fails, the optional error_code will be set to the value of the system errno variable.

### Return Values

Returns true on success or false on failure.

Upon successful completion the message queue data structure is updated as follows: msg_lrpid is set to the process-ID of the calling process, msg_qnum is decremented by 1 and msg_rtime is set to the current time.

### Changelog

### See Also

- msg_remove_queue() - Destroy a message queue
- msg_send() - Send a message to a message queue
- msg_stat_queue() - Returns information from the message queue data structure
- msg_set_queue() - Set information in the message queue data structure

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.msg-receive.php
