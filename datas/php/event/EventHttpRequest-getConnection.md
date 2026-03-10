# EventHttpRequest::getConnection

Source: https://devdocs.io/php/eventhttprequest.getconnection

(PECL event >= 1.8.0)

EventHttpRequest::getConnection — Returns EventHttpConnection object

### Description

```
public EventHttpRequest::closeConnection(): EventHttpConnection
```

Returns EventHttpConnection object which represents HTTP connection associated with the request.

Libevent API allows HTTP request objects to be not bound to any HTTP connection. Therefore we can't unambiguously associate EventHttpRequest with EventHttpConnection. Thus, we construct EventHttpConnection object on-the-fly. Having no information about the event base, DNS base and connection-close callback, we just leave these fields unset.

EventHttpRequest::getConnection() method is usually useful when we need to set up a callback on connection close. See EventHttpConnection::setCloseCallback().

### Parameters

This function has no parameters.

### Return Values

Returns EventHttpConnection object.

### See Also

- EventHttpConnection::setCloseCallback() - Set callback for connection close
- EventHttpRequest::getBufferEvent() - Returns EventBufferEvent object

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventhttprequest.getconnection.php
