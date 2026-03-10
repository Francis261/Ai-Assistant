# Stomp::unsubscribe

Source: https://devdocs.io/php/stomp.unsubscribe

# stomp_unsubscribe

(PECL stomp >= 0.1.0)

Stomp::unsubscribe -- stomp_unsubscribe — Removes an existing subscription

### Description

Object-oriented style (method):

```
public Stomp::unsubscribe(string $destination, array $headers = ?): bool
```

Procedural style:

```
stomp_unsubscribe(resource $link, string $destination, array $headers = ?): bool
```

Removes an existing subscription.

### Parameters

Procedural style only: The stomp link identifier returned by stomp_connect().

Subscription to remove.

Associative array containing the additional headers (example: receipt).

### Return Values

Returns true on success or false on failure.

### Examples

See stomp_ack().

### Notes

Stomp is inherently asynchronous. Synchronous communication can be implemented adding a receipt header. This will cause methods to not return anything until the server has acknowledged receipt of the message or until read timeout was reached.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/stomp.unsubscribe.php
