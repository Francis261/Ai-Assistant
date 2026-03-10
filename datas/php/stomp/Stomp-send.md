# Stomp::send

Source: https://devdocs.io/php/stomp.send

# stomp_send

(PECL stomp >= 0.1.0)

Stomp::send -- stomp_send — Sends a message

### Description

Object-oriented style (method):

```
public Stomp::send(string $destination, mixed $msg, array $headers = ?): bool
```

Procedural style:

```
stomp_send(
 resource $link,
 string $destination,
 mixed $msg,
 array $headers = ?
): bool
```

Sends a message to the Message Broker.

### Parameters

Procedural style only: The stomp link identifier returned by stomp_connect().

Where to send the message

Message to send.

Associative array containing the additional headers (example: receipt).

### Return Values

Returns true on success or false on failure.

### Examples

See stomp_ack().

### Notes

Note:

A transaction header may be specified, indicating that the message acknowledgment should be part of the named transaction.

Stomp is inherently asynchronous. Synchronous communication can be implemented adding a receipt header. This will cause methods to not return anything until the server has acknowledged receipt of the message or until read timeout was reached.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/stomp.send.php
