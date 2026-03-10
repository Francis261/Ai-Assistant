# EventListener::setErrorCallback

Source: https://devdocs.io/php/eventlistener.seterrorcallback

(PECL event >= 1.2.6-beta)

EventListener::setErrorCallback — Set event listener's error callback

### Description

```
public EventListener::setErrorCallback( string $cb ): void
```

Set event listener's error callback

### Parameters

The error callback. Should match the following prototype:

```
callback( EventListener $listener  = null ,  mixed $data  = null ): void
```

The EventListener object.

User custom data attached to the callback.

### Return Values

### See Also

- EventListener::setCallback() - The setCallback purpose

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/eventlistener.seterrorcallback.php
