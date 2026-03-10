# Stomp::error

Source: https://devdocs.io/php/stomp.error

# stomp_error

(PECL stomp >= 0.1.0)

Stomp::error -- stomp_error — Gets the last stomp error

### Description

Object-oriented style (method):

```
public Stomp::error(): string
```

Procedural style:

```
stomp_error(resource $link): string
```

Gets the last stomp error.

### Parameters

Procedural style only: The stomp link identifier returned by stomp_connect().

### Return Values

Returns an error string or false if no error occurred.

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

var_dump($stomp->error());

if (!$stomp->abort('unknown-transaction', array('receipt' => 'foo'))) {
    var_dump($stomp->error());
}

/* close connection */
unset($stomp);

?>
```

The above example will output something similar to:

```
bool(false)
string(43) "Invalid transaction id: unknown-transaction"
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

var_dump(stomp_error($link));

if (!stomp_abort($link, 'unknown-transaction', array('receipt' => 'foo'))) {
    var_dump(stomp_error($link));
}

/* close connection */
stomp_close($link);

?>
```

The above example will output something similar to:

```
bool(false)
string(43) "Invalid transaction id: unknown-transaction"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/stomp.error.php
