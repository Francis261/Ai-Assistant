# Stomp::ack

Source: https://devdocs.io/php/stomp.ack

# stomp_ack

(PECL stomp >= 0.1.0)

Stomp::ack -- stomp_ack — Acknowledges consumption of a message

### Description

Object-oriented style (method):

```
public Stomp::ack(mixed $msg, array $headers = ?): bool
```

Procedural style:

```
stomp_ack(resource $link, mixed $msg, array $headers = ?): bool
```

Acknowledges consumption of a message from a subscription using client acknowledgment.

### Parameters

Procedural style only: The stomp link identifier returned by stomp_connect().

The message/messageId to be acknowledged.

Associative array containing the additional headers (example: receipt).

### Return Values

Returns true on success or false on failure.

### Examples

Example #1 Object-oriented style

```
<?php

$queue  = '/queue/foo';
$msg    = 'bar';

/* connection */
try {
    $stomp = new Stomp('tcp://localhost:61613');
} catch(StompException $e) {
    die('Connection failed: ' . $e->getMessage());
}

/* send a message to the queue 'foo' */
$stomp->send($queue, $msg);

/* subscribe to messages from the queue 'foo' */
$stomp->subscribe($queue);

/* read a frame */
$frame = $stomp->readFrame();

if ($frame->body === $msg) {
    /* acknowledge that the frame was received */
    $stomp->ack($frame);
}

/* remove the subscription */
$stomp->unsubscribe($queue);

/* close connection */
unset($stomp);

?>
```

Example #2 Procedural style

```
<?php

$queue  = '/queue/foo';
$msg    = 'bar';

/* connection */
$link = stomp_connect('ssl://localhost:61612');

/* check connection */
if (!$link) {
    die('Connection failed: ' . stomp_connect_error());
}

/* begin a transaction */
stomp_begin($link, 't1');

/* send a message to the queue 'foo' */
stomp_send($link, $queue, $msg, array('transaction' => 't1'));

/* commit a transaction */
stomp_commit($link, 't1');

/* subscribe to messages from the queue 'foo' */
stomp_subscribe($link, $queue);

/* read a frame */
$frame = stomp_read_frame($link);

if ($frame['body'] === $msg) {
    /* acknowledge that the frame was received */
    stomp_ack($link, $frame['headers']['message-id']);
}

/* remove the subscription */
stomp_unsubscribe($link, $queue);

/* close connection */
stomp_close($link);

?>
```

### Notes

Note:

A transaction header may be specified, indicating that the message acknowledgment should be part of the named transaction.

Stomp is inherently asynchronous. Synchronous communication can be implemented adding a receipt header. This will cause methods to not return anything until the server has acknowledged receipt of the message or until read timeout was reached.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/stomp.ack.php
