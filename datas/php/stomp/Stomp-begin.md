# Stomp::begin

Source: https://devdocs.io/php/stomp.begin

# stomp_begin

(PECL stomp >= 0.1.0)

Stomp::begin -- stomp_begin — Starts a transaction

### Description

Object-oriented style (method):

```
public Stomp::begin(string $transaction_id, array $headers = ?): bool
```

Procedural style:

```
stomp_begin(resource $link, string $transaction_id, array $headers = ?): bool
```

Starts a transaction.

### Parameters

Procedural style only: The stomp link identifier returned by stomp_connect().

The transaction id.

Associative array containing the additional headers (example: receipt).

### Return Values

Returns true on success or false on failure.

### Examples

See stomp_commit() or stomp_abort().

### Notes

Stomp is inherently asynchronous. Synchronous communication can be implemented adding a receipt header. This will cause methods to not return anything until the server has acknowledged receipt of the message or until read timeout was reached.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/stomp.begin.php
