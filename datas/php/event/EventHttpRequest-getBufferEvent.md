# EventHttpRequest::getBufferEvent

Source: https://devdocs.io/php/eventhttprequest.getbufferevent

(PECL event >= 1.8.0)

EventHttpRequest::getBufferEvent — Returns EventBufferEvent object

### Description

```
public EventHttpRequest::closeConnection(): EventBufferEvent
```

Returns EventBufferEvent object which represents buffer event that the connection is using.

The reference counter of the returned object will be incremented by one to protect internal structures against premature destruction when the method is called from a user callback. So the EventBufferEvent object should be freed explicitly with EventBufferEvent::free() method. Otherwise memory will leak.

### Parameters

This function has no parameters.

### Return Values

Returns EventBufferEvent object.

### See Also

- EventHttpRequest::getConnection() - Returns EventHttpConnection object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventhttprequest.getbufferevent.php
