# Stomp::getReadTimeout

Source: https://devdocs.io/php/stomp.getreadtimeout

# stomp_get_read_timeout

(PECL stomp >= 0.3.0)

Stomp::getReadTimeout -- stomp_get_read_timeout — Gets read timeout

### Description

Object-oriented style (method):

```
public Stomp::getReadTimeout(): array
```

Procedural style:

```
stomp_get_read_timeout(resource $link): array
```

Gets read timeout

### Parameters

Procedural style only: The stomp link identifier returned by stomp_connect().

### Return Values

Returns an array with 2 elements: sec and usec.

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

var_dump($stomp->getReadTimeout());

/* close connection */
unset($stomp);

?>
```

The above example will output something similar to:

```
array(2) {
  ["sec"]=>
  int(2)
  ["usec"]=>
  int(0)
}
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

var_dump(stomp_get_read_timeout($link));

/* close connection */
stomp_close($link);

?>
```

The above example will output something similar to:

```
array(2) {
  ["sec"]=>
  int(2)
  ["usec"]=>
  int(0)
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/stomp.getreadtimeout.php
