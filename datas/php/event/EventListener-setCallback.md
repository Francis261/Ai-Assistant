# EventListener::setCallback

Source: https://devdocs.io/php/eventlistener.setcallback

(PECL event >= 1.2.6-beta)

EventListener::setCallback — The setCallback purpose

### Description

```
public EventListener::setCallback( callable $cb ,  mixed $arg  = null ): void
```

Adjust event connect listener's callback and optionally the callback argument.

### Parameters

The new callback for new connections. Ignored if null.

Should match the following prototype:

```
callback(
  EventListener $listener  = null ,
  mixed $fd  = null ,
  array $address  = null ,
  mixed $arg  = null 
): void
```

The EventListener object.

The file descriptor or a resource associated with the listener.

Array of two elements: IP address and the server port.

User custom data attached to the callback.

Custom user data attached to the callback. Ignored if null.

### Return Values

No value is returned.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventlistener.setcallback.php
