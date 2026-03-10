# EventHttpRequest::sendReplyStart

Source: https://devdocs.io/php/eventhttprequest.sendreplystart

(PECL event >= 1.4.0-beta)

EventHttpRequest::sendReplyStart — Initiate a chunked reply

### Description

```
public EventHttpRequest::sendReplyStart( int $code ,  string $reason ): void
```

Initiate a reply that uses Transfer-Encoding chunked.

This allows the caller to stream the reply back to the client and is useful when either not all of the reply data is immediately available or when sending very large replies.

The caller needs to supply data chunks with EventHttpRequest::sendReplyChunk() and complete the reply by calling EventHttpRequest::sendReplyEnd().

### Parameters

The HTTP response code to send.

A brief message to send with the response code.

### Return Values

No value is returned.

### See Also

- EventHttpRequest::sendReplyChunk() - Send another data chunk as part of an ongoing chunked reply
- EventHttpRequest::sendReplyEnd() - Complete a chunked reply, freeing the request as appropriate

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventhttprequest.sendreplystart.php
