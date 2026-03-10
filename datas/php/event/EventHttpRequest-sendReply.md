# EventHttpRequest::sendReply

Source: https://devdocs.io/php/eventhttprequest.sendreply

(PECL event >= 1.4.0-beta)

EventHttpRequest::sendReply — Send an HTML reply to the client

### Description

```
public EventHttpRequest::sendReply( int $code ,  string $reason ,  EventBuffer $buf  = ?): void
```

Send an HTML reply to the client. The body of the reply consists of data in optional buf parameter.

### Parameters

The HTTP response code to send.

A brief message to send with the response code.

The body of the response.

### Return Values

No value is returned.

### See Also

- EventHttpRequest::sendError() - Send an HTML error message to the client
- EventHttpRequest::sendReplyChunk() - Send another data chunk as part of an ongoing chunked reply

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventhttprequest.sendreply.php
