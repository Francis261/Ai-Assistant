# Stomp::setReadTimeout

Source: https://devdocs.io/php/stomp.setreadtimeout

# stomp_set_read_timeout

(PECL stomp >= 0.3.0)

Stomp::setReadTimeout -- stomp_set_read_timeout — Sets read timeout

### Description

Object-oriented style (method):

```
public Stomp::setReadTimeout(int $seconds, int $microseconds = ?): void
```

Procedural style:

```
stomp_set_read_timeout(resource $link, int $seconds, int $microseconds = ?): void
```

Sets read timeout.

### Parameters

Procedural style only: The stomp link identifier returned by stomp_connect().

The seconds part of the timeout to be set.

The microseconds part of the timeout to be set.

### Return Values

No value is returned.

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

$stomp->setReadTimeout(10);
    
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

stomp_set_read_timeout($link, 10);
    
/* close connection */
stomp_close($link);

?>
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/stomp.setreadtimeout.php
