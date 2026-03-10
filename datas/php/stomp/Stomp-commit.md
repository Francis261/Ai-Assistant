# Stomp::commit

Source: https://devdocs.io/php/stomp.commit

# stomp_commit

(PECL stomp >= 0.1.0)

Stomp::commit -- stomp_commit — Commits a transaction in progress

### Description

Object-oriented style (method):

```
public Stomp::commit(string $transaction_id, array $headers = ?): bool
```

Procedural style:

```
stomp_commit(resource $link, string $transaction_id, array $headers = ?): bool
```

Commits a transaction in progress.

### Parameters

Procedural style only: The stomp link identifier returned by stomp_connect().

The transaction id.

Associative array containing the additional headers (example: receipt).

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Object-oriented style

```
<?php

/* connection */
try {
    $stomp = new Stomp('tcp://localhost:61613');
} catch(StompException $e) {
    die('Connection failed: ' . $e->getMessage());
}

/* begin a transaction */
$stomp->begin('t1');

/* send a message to the queue */
$stomp->send('/queue/foo', 'bar', array('transaction' => 't1'));

/* commit */
$stomp->commit('t1');

/* close connection */
unset($stomp);

?>
```

Example #2 Procedural style

```
<?php

/* connection */
$link = stomp_connect('tcp://localhost:61613');

/* check connection */
if (!$link) {
    die('Connection failed: ' . stomp_connect_error());
}

/* begin a transaction */
stomp_begin($link, 't1');

/* send a message to the queue 'foo' */
stomp_send($link, '/queue/foo', 'bar', array('transaction' => 't1'));

/* commit */
stomp_commit($link, 't1');

/* close connection */
stomp_close($link);

?>
```

### Notes

Stomp is inherently asynchronous. Synchronous communication can be implemented adding a receipt header. This will cause methods to not return anything until the server has acknowledged receipt of the message or until read timeout was reached.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/stomp.commit.php
