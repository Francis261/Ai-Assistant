# The Yaf_Bootstrap_Abstract class

Source: https://devdocs.io/php/class.yaf-bootstrap-abstract

## Introduction

(No version information available, might only be in Git)

Bootstrap is a mechanism used to do some initial config before a Application run.

User may define their own Bootstrap class by inheriting Yaf_Bootstrap_Abstract

Any method declared in Bootstrap class with leading "_init", will be called by Yaf_Application::bootstrap() one by one according to their defined order.

## Examples

Example #1 Bootstrap example

```
<?php
   /* bootstrap class should be defined under ./application/Bootstrap.php */
   class Bootstrap extends Yaf_Bootstrap_Abstract {
        public function _initConfig(Yaf_Dispatcher $dispatcher) {
            var_dump(__METHOD__);
        }
        public function _initPlugin(Yaf_Dispatcher $dispatcher) {
            var_dump(__METHOD__);
        }
   }

   $config = array(
       "application" => array(
           "directory" => dirname(__FILE__) . "/application/",
       ),
   );
 
   $app = new Yaf_Application($config);
   $app->bootstrap();
?>
```

The above example will output something similar to:

```
string(22) "Bootstrap::_initConfig"
string(22) "Bootstrap::_initPlugin"
```

## Class synopsis

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/class.yaf-bootstrap-abstract.php
