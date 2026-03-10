# msg_send

Source: https://devdocs.io/php/function.msg-send

(PHP 4 >= 4.3.0, PHP 5, PHP 7, PHP 8)

msg_send — Send a message to a message queue

### Description

```
msg_send(
 SysvMessageQueue $queue,
 int $message_type,
 string|int|float|bool $message,
 bool $serialize = true,
 bool $blocking = true,
 int &$error_code = null
): bool
```

msg_send() sends a message of type message_type (which MUST be greater than 0) to the message queue specified by queue.

### Parameters

The message queue.

The type of the message (MUST be greater than 0)

The body of the message.

Note:

If serialize set to false is supplied, MUST be of type: string, int, float or bool. In other case a warning will be issued.

The optional serialize controls how the message is sent. serialize defaults to true which means that the message is serialized using the same mechanism as the session module before being sent to the queue. This allows complex arrays and objects to be sent to other PHP scripts, or if you are using the WDDX serializer, to any WDDX compatible client.

If the message is too large to fit in the queue, your script will wait until another process reads messages from the queue and frees enough space for your message to be sent. This is called blocking; you can prevent blocking by setting the optional blocking parameter to false, in which case msg_send() will immediately return false if the message is too big for the queue, and set the optional error_code to MSG_EAGAIN, indicating that you should try to send your message again a little later on.

If the function fails, the optional errorcode will be set to the value of the system errno variable.

### Return Values

Returns true on success or false on failure.

Upon successful completion the message queue data structure is updated as follows: msg_lspid is set to the process-ID of the calling process, msg_qnum is incremented by 1 and msg_stime is set to the current time.

### Changelog

### See Also

- msg_remove_queue() - Destroy a message queue
- msg_receive() - Receive a message from a message queue
- msg_stat_queue() - Returns information from the message queue data structure
- msg_set_queue() - Set information in the message queue data structure

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/function.msg-send.php
