# Yaf_Router::addConfig

Source: https://devdocs.io/php/yaf-router.addconfig

(Yaf >=1.0.0)

Yaf_Router::addConfig — Add config-defined routes into Router

### Description

```
public Yaf_Router::addConfig(Yaf_Config_Abstract $config): bool
```

Add routes defined by configs into Yaf_Router's route stack

### Parameters

This function has no parameters.

### Return Values

An Yaf_Config_Abstract instance, which should contains one or more valid route configs

### Examples

Example #1 application.ini()example

```
;the order is very important, the prior one will be called first

;a rewrite route match request /product/*/*
routes.route_name.type="rewrite"
routes.route_name.match="/product/:name/:value"
routes.route_name.route.controller=product
routes.route_name.route.action=info

;a regex route match request /list/*/*
routes.route_name1.type="regex"
routes.route_name1.match="#^list/([^/]*)/([^/]*)#"
routes.route_name1.route.controller=Index
routes.route_name1.route.action=action
routes.route_name1.map.1=name
routes.route_name1.map.2=value

;a simple route match /**?c=controller&a=action&m=module
routes.route_name2.type="simple"
routes.route_name2.controller=c
routes.route_name2.module=m
routes.route_name2.action=a

;a simple router match /**?r=PATH_INFO
routes.route_name3.type="supervar"
routes.route_name3.varname=r

;a map route match any request to controller
routes.route_name4.type="map"
routes.route_name4.controllerPrefer=TRUE
routes.route_namer.delimiter="#!"
```

Example #2 Yaf_Dispatcher::autoConfig()example

```
<?php
class Bootstrap extends Yaf_Bootstrap_Abstract{
    public function _initConfig() {
        $config = Yaf_Application::app()->getConfig();
        Yaf_Registry::set("config", $config);
    }

    public function _initRoute(Yaf_Dispatcher $dispatcher) {
        $router = $dispatcher->getRouter();
        /**
         * we can add some pre-defined routes in application.ini
         */
        $router->addConfig(Yaf_Registry::get("config")->routes);
    }
}
?>
```

### See Also

- Yaf_Router::addRoute() - Add new Route into Router
- Yaf_Route_Static
- Yaf_Route_Supervar
- Yaf_Route_Simple
- Yaf_Route_Regex
- Yaf_Route_Rewrite
- Yaf_Route_Map

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-router.addconfig.php
