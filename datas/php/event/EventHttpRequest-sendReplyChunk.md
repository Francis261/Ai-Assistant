# EventHttpRequest::sendReplyChunk

Source: https://devdocs.io/php/eventhttprequest.sendreplychunk

(PECL event >= 1.4.0-beta)

EventHttpRequest::sendReplyChunk — Send another data chunk as part of an ongoing chunked reply

### Description

```
public EventHttpRequest::sendReplyChunk( EventBuffer $buf ): void
```

Send another data chunk as part of an ongoing chunked reply. After calling this method buf will be empty.

### Parameters

The data chunk to send as part of the reply.

### Return Values

No value is returned.

### See Also

- EventHttpRequest::sendReplyStart() - Initiate a chunked reply
- EventHttpRequest::sendReplyEnd() - Complete a chunked reply, freeing the request as appropriate

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventhttprequest.sendreplychunk.php
