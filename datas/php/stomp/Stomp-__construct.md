# Stomp::__construct

Source: https://devdocs.io/php/stomp.construct

# stomp_connect

(PECL stomp >= 0.1.0)

Stomp::__construct -- stomp_connect — Opens a connection

### Description

Object-oriented style (constructor):

Procedural style:

```
stomp_connect(
 string $broker = ini_get("stomp.default_broker_uri"),
 string $username = ?,
 string $password = ?,
 array $headers = ?
): resource
```

Opens a connection to a stomp compliant Message Broker.

### Parameters

The broker URI

The username.

The password.

Associative array containing the additional headers (example: receipt).

### Return Values

Note:

A transaction header may be specified, indicating that the message acknowledgment should be part of the named transaction.

### Changelog

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

/* close connection */
unset($stomp);

?>
```

Example #2 Procedural style

```
<?php

/* connection */
$link = stomp_connect('ssl://localhost:61612');

/* check connection */
if (!$link) {
    die('Connection failed: ' . stomp_connect_error());
}

/* close connection */
stomp_close($link);

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/stomp.construct.php
