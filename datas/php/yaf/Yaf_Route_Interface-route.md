# Yaf_Route_Interface::route

Source: https://devdocs.io/php/yaf-route-interface.route

(Yaf >=1.0.0)

Yaf_Route_Interface::route — Route a request

### Description

```
abstract public Yaf_Route_Interface::route(Yaf_Request_Abstract $request): bool
```

Yaf_Route_Interface::route() is the only method that a custom route should implement.

Note:

since of 2.3.0, there is another method should also be implemented, see Yaf_Route_Interface::assemble().

if this method return true, then the route process will be end. otherwise, Yaf_Router will call next route in the route stack to route request.

This method would set the route result to the parameter request, by calling Yaf_Request_Abstract::setControllerName(), Yaf_Request_Abstract::setActionName() and Yaf_Request_Abstract::setModuleName().

This method should also call Yaf_Request_Abstract::setRouted() to make the request routed at last.

### Parameters

A Yaf_Request_Abstract instance.

### Return Values

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-route-interface.route.php
