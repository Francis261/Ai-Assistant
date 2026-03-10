# Yaf_Application::getDispatcher

Source: https://devdocs.io/php/yaf-application.getdispatcher

(Yaf >=1.0.0)

Yaf_Application::getDispatcher — Get Yaf_Dispatcher instance

### Description

```
public Yaf_Application::getDispatcher(): Yaf_Dispatcher
```

### Parameters

This function has no parameters.

### Return Values

### Examples

Example #1 Yaf_Application::getDispatcher()example

```
<?php
$config = array(
    "application" => array(
        "directory" => realpath(dirname(__FILE__)) . "/application",
    ),
);

/** Yaf_Application */
$application = new Yaf_Application($config);
print_r($application->getDispatcher());
?>
```

The above example will output something similar to:

```
Yaf_Dispatcher Object
(
    [_router:protected] => Yaf_Router Object
        (
            [_routes:protected] => Array
                (
                    [_default] => Yaf_Route_Static Object
                        (
                        )

                )

            [_current:protected] => 
        )

    [_view:protected] => 
    [_request:protected] => Yaf_Request_Http Object
        (
            [module] => 
            [controller] => 
            [action] => 
            [method] => Cli
            [params:protected] => Array
                (
                )

            [language:protected] => 
            [_exception:protected] => 
            [_base_uri:protected] => 
            [uri:protected] => 
            [dispatched:protected] => 
            [routed:protected] => 
        )

    [_plugins:protected] => Array
        (
        )

    [_auto_render:protected] => 1
    [_return_response:protected] => 
    [_instantly_flush:protected] => 
    [_default_module:protected] => Index
    [_default_controller:protected] => Index
    [_default_action:protected] => index
    [_response] => Yaf_Response_Cli Object
        (
            [_header:protected] => Array
                (
                )

            [_body:protected] => 
            [_sendheader:protected] => 
        )

)
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-application.getdispatcher.php
