# Yaf_Plugin_Abstract::routerStartup

Source: https://devdocs.io/php/yaf-plugin-abstract.routerstartup

(Yaf >=1.0.0)

Yaf_Plugin_Abstract::routerStartup — RouterStartup hook

### Description

```
public Yaf_Plugin_Abstract::routerStartup(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response): void
```

This is the earliest hook in Yaf plugin hook system, if a custom plugin implement this method, then it will be called before routing a request.

This function is currently not documented; only its argument list is available.

### Parameters

### Return Values

### See Also

- Yaf_Plugin_Abstract::routerShutdown() - The routerShutdown purpose
- Yaf_Plugin_Abstract::dispatchLoopStartup() - Hook before dispatch loop
- Yaf_Plugin_Abstract::preDispatch() - The preDispatch purpose
- Yaf_Plugin_Abstract::postDispatch() - The postDispatch purpose
- Yaf_Plugin_Abstract::dispatchLoopShutdown() - The dispatchLoopShutdown purpose

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-plugin-abstract.routerstartup.php
