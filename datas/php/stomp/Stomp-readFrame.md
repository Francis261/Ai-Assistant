# Stomp::readFrame

Source: https://devdocs.io/php/stomp.readframe

# stomp_read_frame

(PECL stomp >= 0.1.0)

Stomp::readFrame -- stomp_read_frame — Reads the next frame

### Description

Object-oriented style (method):

```
public Stomp::readFrame(string $class_name = "stompFrame"): stompframe
```

Procedural style:

```
stomp_read_frame(resource $link): array
```

Reads the next frame. It is possible to instantiate an object of a specific class, and pass parameters to that class's constructor.

### Parameters

Procedural style only: The stomp link identifier returned by stomp_connect().

The name of the class to instantiate. If not specified, a stompFrame object is returned.

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

/* subscribe to messages from the queue 'foo' */
$stomp->subscribe('/queue/foo');

/* read a frame */
var_dump($stomp->readFrame());

/* close connection */
unset($stomp);

?>
```

The above example will output something similar to:

```
object(StompFrame)#2 (3) {
  ["command"]=>
  string(7) "MESSAGE"
  ["headers"]=>
  array(5) {
    ["message-id"]=>
    string(41) "ID:php.net-55293-1257226743606-4:2:-1:1:1"
    ["destination"]=>
    string(10) "/queue/foo"
    ["timestamp"]=>
    string(13) "1257226805828"
    ["expires"]=>
    string(1) "0"
    ["priority"]=>
    string(1) "0"
  }
  ["body"]=>
  string(3) "bar"
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

/* subscribe to messages from the queue 'foo' */
stomp_subscribe($link, '/queue/foo');

/* read a frame */
$frame = stomp_read_frame($link);

/* close connection */
stomp_close($link);

?>
```

The above example will output something similar to:

```
array(3) {
  ["command"]=>
  string(7) "MESSAGE"
  ["body"]=>
  string(3) "bar"
  ["headers"]=>
  array(6) {
    ["transaction"]=>
    string(2) "t1"
    ["message-id"]=>
    string(41) "ID:php.net-55293-1257226743606-4:3:-1:1:1"
    ["destination"]=>
    string(10) "/queue/foo"
    ["timestamp"]=>
    string(13) "1257227037059"
    ["expires"]=>
    string(1) "0"
    ["priority"]=>
    string(1) "0"
  }
}
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/stomp.readframe.php
