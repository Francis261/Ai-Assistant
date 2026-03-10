# Stomp::getSessionId

Source: https://devdocs.io/php/stomp.getsessionid

# stomp_get_session_id

(PECL stomp >= 0.1.0)

Stomp::getSessionId -- stomp_get_session_id — Gets the current stomp session ID

### Description

Object-oriented style (method):

```
public Stomp::getSessionId(): string|false
```

Procedural style:

```
stomp_get_session_id(resource $link): string|false
```

Gets the current stomp session ID.

### Parameters

Procedural style only: The stomp link identifier returned by stomp_connect().

### Return Values

string session id on success or false on failure.

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

var_dump($stomp->getSessionId());

/* close connection */
unset($stomp);

?>
```

The above example will output something similar to:

```
string(35) "ID:php.net-52873-1257291895530-4:14"
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

var_dump(stomp_get_session_id($link));

/* close connection */
stomp_close($link);

?>
```

The above example will output something similar to:

```
string(35) "ID:php.net-52873-1257291895530-4:14"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/stomp.getsessionid.php
