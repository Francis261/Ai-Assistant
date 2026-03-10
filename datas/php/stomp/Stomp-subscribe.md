# Stomp::subscribe

Source: https://devdocs.io/php/stomp.subscribe

# stomp_subscribe

(PECL stomp >= 0.1.0)

Stomp::subscribe -- stomp_subscribe — Registers to listen to a given destination

### Description

Object-oriented style (method):

```
public Stomp::subscribe(string $destination, array $headers = ?): bool
```

Procedural style:

```
stomp_subscribe(resource $link, string $destination, array $headers = ?): bool
```

Registers to listen to a given destination.

### Parameters

Procedural style only: The stomp link identifier returned by stomp_connect().

Destination to subscribe to.

Associative array containing the additional headers (example: receipt).

### Return Values

Returns true on success or false on failure.

### Examples

See stomp_ack().

### Notes

Stomp is inherently asynchronous. Synchronous communication can be implemented adding a receipt header. This will cause methods to not return anything until the server has acknowledged receipt of the message or until read timeout was reached.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/stomp.subscribe.php
