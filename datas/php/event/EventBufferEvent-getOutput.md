# EventBufferEvent::getOutput

Source: https://devdocs.io/php/eventbufferevent.getoutput

(PECL event >= 1.2.6-beta)

EventBufferEvent::getOutput — Returns underlying output buffer associated with current buffer event

### Description

```
public EventBufferEvent::getOutput(): EventBuffer
```

Returns underlying output buffer associated with current buffer event. An output buffer is a storage for data to be written.

Note, there is also 
 output
 property of EventBufferEvent class.

### Parameters

This function has no parameters.

### Return Values

Returns instance of EventBuffer output buffer associated with current buffer event.

### Examples

Example #1 EventBufferEvent::getOutput() example

```
<?php
$base = new EventBase();

$dns_base = new EventDnsBase($base, TRUE); // Use async DNS resolving
if (!$dns_base) {
    exit("Failed to init DNS Base\n");
}

$bev = new EventBufferEvent($base, /* use internal socket */ NULL,
    EventBufferEvent::OPT_CLOSE_ON_FREE | EventBufferEvent::OPT_DEFER_CALLBACKS,
    "readcb", /* writecb */ NULL, "eventcb", $base
);
if (!$bev) {
    exit("Failed creating bufferevent socket\n");
}

$bev->enable(Event::READ | Event::WRITE);

$output = $bev->getOutput();
if (!$output->add(
    "GET {$argv[2]} HTTP/1.0\r\n".
    "Host: {$argv[1]}\r\n".
    "Connection: Close\r\n\r\n"
)) {
    exit("Failed adding request to output buffer\n");
}

/* ... */
?>
```

### See Also

- EventBufferEvent::getInput() - Returns underlying input buffer associated with current buffer event

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbufferevent.getoutput.php
