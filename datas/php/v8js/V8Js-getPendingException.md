# V8Js::getPendingException

Source: https://devdocs.io/php/v8js.getpendingexception

(PECL v8js >= 0.1.0)

V8Js::getPendingException — Return pending uncaught Javascript exception

### Description

```
public V8Js::getPendingException(): V8JsException
```

Returns any pending uncaught Javascript exception as V8JsException left from earlier V8Js::executeString() call(s).

### Parameters

This function has no parameters.

### Return Values

Either V8JsException or null.

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/v8js.getpendingexception.php
