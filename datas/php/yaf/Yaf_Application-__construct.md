# Yaf_Application::__construct

Source: https://devdocs.io/php/yaf-application.construct

(Yaf >=1.0.0)

Yaf_Application::__construct — Yaf_Application constructor

### Description

Instance a Yaf_Application.

### Parameters

A ini config file path, or a config array

If is a ini config file, there should be a section named as the one defined by yaf.environ, which is "product" by default.

Note:

If you use a ini configuration file as your applicatioin's config container. you would open the yaf.cache_config to improve performance.

And the config entry(and there default value) list blow:

Example #1 A ini config file example

```
[product]
;this one should alway be defined, and have no default value
application.directory=APPLICATION_PATH

;following configs have default value, you may no need to define them
application.library = APPLICATION_PATH . "/library"
application.dispatcher.throwException=1
application.dispatcher.catchException=1

application.baseUri=""

;the php script ext name
ap.ext=php

;the view template ext name
ap.view.ext=phtml

ap.dispatcher.defaultModule=Index
ap.dispatcher.defaultController=Index
ap.dispatcher.defaultAction=index

;defined modules
ap.modules=Index
```

Which section will be loaded as the final config

### Return Values

### Examples

Example #2 Yaf_Application::__construct()example

```
<?php
defined('APPLICATION_PATH')                  // APPLICATION_PATH will be used in the ini config file
    || define('APPLICATION_PATH', __DIR__);

$application = new Yaf_Application(APPLICATION_PATH.'/conf/application.ini');
$application->bootstrap()->run();
?>
```

The above example will output something similar to:

Example #3 Yaf_Application::__construct()example

```
<?php
$config = array(
    "application" => array(
        "directory" => realpath(dirname(__FILE__)) . "/application",
    ),
);

/** Yaf_Application */
$application = new Yaf_Application($config);
$application->bootstrap()->run();
?>
```

The above example will output something similar to:

### See Also

- Yaf_Config_Ini

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-application.construct.php
