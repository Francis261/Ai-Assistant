# EventListener::getSocketName

Source: https://devdocs.io/php/eventlistener.getsocketname

(PECL event >= 1.5.0)

EventListener::getSocketName — Retreives the current address to which the listener's socket is bound

### Description

```
public static EventListener::getSocketName( string &$address ,  mixed &$port  = ?): bool
```

Retreives the current address to which the listener's socket is bound.

### Parameters

Output parameter. IP-address depending on the socket address family.

Output parameter. The port the socket is bound to.

### Return Values

Returns true on success or false on failure.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventlistener.getsocketname.php
