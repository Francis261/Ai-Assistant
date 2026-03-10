# The Yaf_Plugin_Abstract class

Source: https://devdocs.io/php/class.yaf-plugin-abstract

## Introduction

(Yaf >=1.0.0)

Plugins allow for easy extensibility and customization of the framework.

Plugins are classes. The actual class definition will vary based on the component -- you may need to implement this interface, but the fact remains that the plugin is itself a class.

A plugin could be loaded into Yaf by using Yaf_Dispatcher::registerPlugin(), after registering, All the methods which the plugin implemented according to this interface, will be called at the proper time.

## Examples

Example #1 Plugin example

```
<?php
   /* bootstrap class should be defined under ./application/Bootstrap.php */
   class Bootstrap extends Yaf_Bootstrap_Abstract {
        public function _initPlugin(Yaf_Dispatcher $dispatcher) {
            /* register a plugin */
            $dispatcher->registerPlugin(new TestPlugin());
        }
   }

   /* plugin class should be placed under ./application/plugins/ */
   class TestPlugin extends Yaf_Plugin_Abstract {
        public function routerStartup(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response) {
            /* before router 
               in this hook,  user can do some url rewrite */
            var_dump("routerStartup");
        }
        public function routerShutdown(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response) {
            /* router complete 
               in this hook, user can do login check */
            var_dump("routerShutdown");
        }
        public function dispatchLoopStartup(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response) {
            var_dump("dispatchLoopStartup");
        }
        public function preDispatch(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response) {
            var_dump("preDispatch");
        }
        public function postDispatch(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response) {
            var_dump("postDispatch");
        }
        public function dispatchLoopShutdown(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response) {
            /* final hook
               in this hook user can do logging or implement layout */
            var_dump("dispatchLoopShutdown");
        }
   }

   Class IndexController extends Yaf_Controller_Abstract {
        public function indexAction() {
            return FALSE; //prevent rendering
        }
   }

   $config = array(
       "application" => array(
           "directory" => dirname(__FILE__) . "/application/",
       ),
   );
 
   $app = new Yaf_Application($config);
   $app->bootstrap()->run();
?>
```

The above example will output something similar to:

```
string(13) "routerStartup"
string(14) "routerShutdown"
string(19) "dispatchLoopStartup"
string(11) "preDispatch"
string(12) "postDispatch"
string(20) "dispatchLoopShutdown"
```

## Class synopsis

```
public dispatchLoopShutdown(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response): void
```

```
public dispatchLoopStartup(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response): void
```

```
public postDispatch(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response): void
```

```
public preDispatch(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response): void
```

```
public preResponse(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response): void
```

```
public routerShutdown(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response): void
```

```
public routerStartup(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response): void
```

## Table of Contents

- Yaf_Plugin_Abstract::dispatchLoopShutdown — The dispatchLoopShutdown purpose
- Yaf_Plugin_Abstract::dispatchLoopStartup — Hook before dispatch loop
- Yaf_Plugin_Abstract::postDispatch — The postDispatch purpose
- Yaf_Plugin_Abstract::preDispatch — The preDispatch purpose
- Yaf_Plugin_Abstract::preResponse — The preResponse purpose
- Yaf_Plugin_Abstract::routerShutdown — The routerShutdown purpose
- Yaf_Plugin_Abstract::routerStartup — RouterStartup hook

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.yaf-plugin-abstract.php
