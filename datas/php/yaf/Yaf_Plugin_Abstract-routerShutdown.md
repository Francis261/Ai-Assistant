# Yaf_Plugin_Abstract::routerShutdown

Source: https://devdocs.io/php/yaf-plugin-abstract.routershutdown

(Yaf >=1.0.0)

Yaf_Plugin_Abstract::routerShutdown — The routerShutdown purpose

### Description

```
public Yaf_Plugin_Abstract::routerShutdown(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response): void
```

This hook will be trigged after the route process finished, this hook is usually used for login check.

### Parameters

### Return Values

### Examples

Example #1 Yaf_Plugin_Abstract::routerShutdown()example

```
<?php
class UserInitPlugin extends Yaf_Plugin_Abstract {

    public function routerShutdown(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response) {
        $controller = $request->getControllerName();

        /**
         * Use access controller is unecessary for APIs
         */
        if (in_array(strtolower($controller), array(
            'api',  
        ))) {
            return TRUE;
        }
       
        if (Yaf_Session::getInstance()->has("login")) {
            return TRUE;
        }
 
        /* Use access check failed, need to login */
        $response->setRedirect("http://yourdomain.com/login/");
        return FALSE;
    }
}
?>
```

### See Also

- Yaf_Plugin_Abstract::routerStartup() - RouterStartup hook
- Yaf_Plugin_Abstract::dispatchLoopStartup() - Hook before dispatch loop
- Yaf_Plugin_Abstract::preDispatch() - The preDispatch purpose
- Yaf_Plugin_Abstract::postDispatch() - The postDispatch purpose
- Yaf_Plugin_Abstract::dispatchLoopShutdown() - The dispatchLoopShutdown purpose

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-plugin-abstract.routershutdown.php
