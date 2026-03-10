# EventHttpRequest::sendError

Source: https://devdocs.io/php/eventhttprequest.senderror

(PECL event >= 1.4.0-beta)

EventHttpRequest::sendError — Send an HTML error message to the client

### Description

```
public EventHttpRequest::sendError( int $error ,  string $reason  = null ): void
```

Send an HTML error message to the client.

### Parameters

The HTTP error code.

A brief explanation ofthe error. If null, the standard meaning of the error code will be used.

### Return Values

No value is returned.

### Examples

Example #1 EventHttpRequest::sendError() example

```
<?php
function _http_400($req) {
    $req->sendError(400);
}

$base = new EventBase();
$http = new EventHttp($base);

$http->setCallback("/err400", "_http_400");

$http->bind("0.0.0.0", 8010);
$base->loop();
?>
```

### See Also

- EventHttpRequest::sendReply() - Send an HTML reply to the client

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventhttprequest.senderror.php
