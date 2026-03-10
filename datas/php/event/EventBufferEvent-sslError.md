# EventBufferEvent::sslError

Source: https://devdocs.io/php/eventbufferevent.sslerror

(PECL event >= 1.2.6-beta)

EventBufferEvent::sslError — Returns most recent OpenSSL error reported on the buffer event

### Description

```
public EventBufferEvent::sslError(): string
```

Returns most recent OpenSSL error reported on the buffer event.

Note:

This function is available only if Event is compiled with OpenSSL support.

### Parameters

This function has no parameters.

### Return Values

Returns OpenSSL error string reported on the buffer event, or false, if there is no more error to return.

### Examples

Example #1 EventBufferEvent::sslError() example

```
<?php
// This callback is invoked when some even occurs on the event listener,
// e.g. connection closed, or an error occurred
function ssl_event_cb($bev, $events, $ctx) {
    if ($events & EventBufferEvent::ERROR) {
        // Fetch errors from the SSL error stack
        while ($err = $bev->sslError()) {
            fprintf(STDERR, "Bufferevent error %s.\n", $err);
        }
    }

    if ($events & (EventBufferEvent::EOF | EventBufferEvent::ERROR)) {
        $bev->free();
    }
}
?>
```

### See Also

- EventBufferEvent::sslRenegotiate() - Tells a bufferevent to begin SSL renegotiation

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventbufferevent.sslerror.php
