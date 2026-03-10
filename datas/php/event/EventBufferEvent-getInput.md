# EventBufferEvent::getInput

Source: https://devdocs.io/php/eventbufferevent.getinput

(PECL event >= 1.2.6-beta)

EventBufferEvent::getInput — Returns underlying input buffer associated with current buffer event

### Description

```
public EventBufferEvent::getInput(): EventBuffer
```

Returns underlying input buffer associated with current buffer event. An input buffer is a storage for data to read.

Note, there is also 
 input
 property of EventBufferEvent class.

### Parameters

This function has no parameters.

### Return Values

Returns instance of EventBuffer input buffer associated with current buffer event.

### Examples

Example #1 Buffer event's read callback

```
<?php
function readcb($bev, $base) {
    $input = $bev->input; //$bev->getInput();

    while (($n = $input->remove($buf, 1024)) > 0) {
        echo $buf;
    }
}
?>
```

### See Also

- EventBufferEvent::getOutput() - Returns underlying output buffer associated with current buffer event

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbufferevent.getinput.php
