# Yaf_Dispatcher::setErrorHandler

Source: https://devdocs.io/php/yaf-dispatcher.seterrorhandler

(Yaf >=1.0.0)

Yaf_Dispatcher::setErrorHandler — Set error handler

### Description

```
public Yaf_Dispatcher::setErrorHandler(call $callback, int $error_types): Yaf_Dispatcher
```

Set error handler for Yaf. when application.dispatcher.throwException is off, Yaf will trigger catchable error while unexpected errors occurred.

Thus, this error handler will be called while the error raise.

### Parameters

A callable callback

### Return Values

### See Also

- Yaf_Dispatcher::throwException() - Switch on/off exception throwing
- Yaf_Application::getLastErrorNo() - Get code of last occurred error
- Yaf_Application::getLastErrorMsg() - Get message of the last occurred error

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-dispatcher.seterrorhandler.php
