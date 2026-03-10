# Yaf_Application::getLastErrorMsg

Source: https://devdocs.io/php/yaf-application.getlasterrormsg

(Yaf >=2.1.2)

Yaf_Application::getLastErrorMsg — Get message of the last occurred error

### Description

```
public Yaf_Application::getLastErrorMsg(): string
```

### Parameters

This function has no parameters.

### Return Values

### Examples

Example #1 Yaf_Application::getLastErrorMsg()example

```
<?php
function error_handler($errno, $errstr, $errfile, $errline) {
   var_dump(Yaf_Application::app()->getLastErrorMsg());
}

$config = array(                   
 "application" => array(
   "directory" => "/tmp/notexists",
     "dispatcher" => array(
       "throwException" => 0, //trigger error instead of throw exception when error occure
      ),
  ),
);

$app = new Yaf_Application($config);
$app->getDispatcher()->setErrorHandler("error_handler", E_RECOVERABLE_ERROR);
$app->run();
?>
```

The above example will output something similar to:

```
string(69) "Could not find controller script /tmp/notexists/controllers/Index.php"
```

© 1997–2025 The PHP Documentation GroupLicensed under the Creative Commons Attribution License v3.0 or later.
 https://www.php.net/manual/en/yaf-application.getlasterrormsg.php
